import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";
import crypto from "crypto";

function createServiceClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}

function verifySignature(rawBody: string, signature: string): boolean {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET!;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-signature") ?? "";

  if (!verifySignature(rawBody, signature)) {
    return new Response("Invalid signature", { status: 401 });
  }

  const payload = JSON.parse(rawBody);
  const eventName: string = payload.meta?.event_name ?? "";
  const clerkId: string = payload.meta?.custom_data?.clerk_id ?? "";
  const status: string = payload.data?.attributes?.status ?? "";
  const email: string | null = payload.data?.attributes?.user_email ?? null;

  if (!clerkId) {
    return new Response("No clerk_id in custom_data", { status: 400 });
  }

  const supabase = createServiceClient();

  // Find or create user — they may have paid before visiting any tool page
  let dbUser: { id: string } | null = null;
  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("clerk_id", clerkId)
    .single();

  if (existing) {
    dbUser = existing;
    // Backfill email if missing
    if (email) {
      await supabase.from("users").update({ email }).eq("id", existing.id);
    }
  } else {
    const { data: created } = await supabase
      .from("users")
      .insert({ clerk_id: clerkId, plan: "free", email })
      .select("id")
      .single();
    dbUser = created;
  }

  if (!dbUser) {
    return new Response("Could not find or create user", { status: 500 });
  }

  const expiresAt: string | null = payload.data?.attributes?.ends_at ?? null;

  if (
    eventName === "subscription_created" ||
    (eventName === "subscription_updated" && status === "active")
  ) {
    await supabase.from("users").update({ plan: "pro" }).eq("id", dbUser.id);
    await supabase
      .from("subscriptions")
      .upsert(
        {
          user_id: dbUser.id,
          status: "active",
          plan: "pro",
          expires_at: expiresAt,
        },
        { onConflict: "user_id" },
      );
  } else if (eventName === "subscription_cancelled") {
    await supabase
      .from("subscriptions")
      .upsert(
        {
          user_id: dbUser.id,
          status: "cancelled",
          plan: "pro",
          expires_at: expiresAt,
        },
        { onConflict: "user_id" },
      );
  } else if (
    eventName === "subscription_expired" ||
    (eventName === "subscription_updated" && status === "expired")
  ) {
    await supabase.from("users").update({ plan: "free" }).eq("id", dbUser.id);
    await supabase
      .from("subscriptions")
      .upsert(
        {
          user_id: dbUser.id,
          status: "expired",
          plan: "free",
          expires_at: expiresAt,
        },
        { onConflict: "user_id" },
      );
  }

  return new Response("ok", { status: 200 });
}
