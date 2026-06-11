"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";

export async function getUserPlan(): Promise<"free" | "pro"> {
  try {
    const user = await currentUser();
    if (!user) return "free";
    const supabase = createServerClient();
    const { data } = await supabase
      .from("users")
      .select("plan")
      .eq("clerk_id", user.id)
      .single();
    return data?.plan === "pro" ? "pro" : "free";
  } catch {
    return "free";
  }
}
