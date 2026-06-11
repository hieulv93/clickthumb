"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";

async function getDbUserId(
  supabase: ReturnType<typeof createServerClient>,
  clerkId: string,
) {
  const { data } = await supabase
    .from("users")
    .select("id, plan")
    .eq("clerk_id", clerkId)
    .single();
  return data;
}

export async function saveBrandKit(colors: string[], fonts: string[]) {
  const user = await currentUser();
  if (!user) return { error: "Not authenticated" };

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return { error: "User not found" };

  if (dbUser.plan !== "pro") return { error: "pro_required" };

  const { error } = await supabase
    .from("brand_kits")
    .upsert(
      {
        user_id: dbUser.id,
        colors,
        fonts,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

  if (error) return { error: error.message };
  return { ok: true };
}

export async function getBrandKit() {
  const user = await currentUser();
  if (!user) return null;

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return null;

  const { data } = await supabase
    .from("brand_kits")
    .select("logo_url, colors, fonts, updated_at")
    .eq("user_id", dbUser.id)
    .single();

  return data;
}

export async function uploadLogo(formData: FormData) {
  const user = await currentUser();
  if (!user) return { error: "Not authenticated" };

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return { error: "User not found" };
  if (dbUser.plan !== "pro") return { error: "pro_required" };

  const file = formData.get("logo") as File;
  if (!file || file.size === 0) return { error: "No file provided" };
  if (file.size > 2 * 1024 * 1024) return { error: "File too large (max 2MB)" };

  const ext = file.name.split(".").pop();
  const path = `${dbUser.id}/logo.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from("brand-kits")
    .upload(path, file, { upsert: true });

  if (uploadError) return { error: uploadError.message };

  const { data: urlData } = supabase.storage
    .from("brand-kits")
    .getPublicUrl(path);

  await supabase
    .from("brand_kits")
    .upsert(
      {
        user_id: dbUser.id,
        logo_url: urlData.publicUrl,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id" },
    );

  return { url: urlData.publicUrl };
}
