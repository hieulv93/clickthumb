"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function createCheckoutUrl() {
  try {
    const user = await currentUser();
    if (!user) redirect("/sign-in");

    const apiKey = process.env.LEMONSQUEEZY_API_KEY;
    const storeId = process.env.LEMONSQUEEZY_STORE_ID;
    const variantId = process.env.LEMONSQUEEZY_VARIANT_ID;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    if (!apiKey || !storeId || !variantId) {
      console.error("LS env missing:", {
        apiKey: !!apiKey,
        storeId: !!storeId,
        variantId: !!variantId,
      });
      return { error: "Checkout configuration error. Please try again later." };
    }

    const supabase = createServerClient();
    const { data: dbUser } = await supabase
      .from("users")
      .select("id, plan")
      .eq("clerk_id", user.id)
      .single();

    if (dbUser?.plan === "pro") return { error: "already_pro" };

    const email = user.emailAddresses[0]?.emailAddress ?? "";
    const name = [user.firstName, user.lastName].filter(Boolean).join(" ");

    const response = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
      method: "POST",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: {
              email,
              name,
              custom: { clerk_id: user.id },
            },
            product_options: {
              redirect_url: `${appUrl ?? "https://click-thumb.com"}/dashboard?upgraded=1`,
            },
          },
          relationships: {
            store: {
              data: { type: "stores", id: storeId },
            },
            variant: {
              data: { type: "variants", id: variantId },
            },
          },
        },
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("LS checkout error:", err);
      return { error: "Failed to create checkout. Please try again." };
    }

    const json = await response.json();
    const url = json.data?.attributes?.url;
    return { url };
  } catch (e) {
    console.error("createCheckoutUrl exception:", e);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
