"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const FREE_PROJECT_LIMIT = 3;

async function getDbUserId(
  supabase: ReturnType<typeof createServerClient>,
  clerkId: string,
) {
  // Select-first: returning users skip the upsert (saves one sequential DB round-trip)
  const { data } = await supabase
    .from("users")
    .select("id, plan")
    .eq("clerk_id", clerkId)
    .single();

  if (data) return data;

  // Brand-new user: insert and return
  const { data: inserted } = await supabase
    .from("users")
    .insert({ clerk_id: clerkId, plan: "free" })
    .select("id, plan")
    .single();

  return inserted;
}

export async function saveProject(
  title: string,
  canvasJson: string,
  previewUrl?: string | null,
) {
  const user = await currentUser();
  if (!user) return { error: "Not authenticated" };

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return { error: "User not found" };

  if (dbUser.plan === "free") {
    const { count } = await supabase
      .from("projects")
      .select("id", { count: "exact", head: true })
      .eq("user_id", dbUser.id);

    if ((count ?? 0) >= FREE_PROJECT_LIMIT) {
      return { error: "limit_reached", limit: FREE_PROJECT_LIMIT };
    }
  }

  const { count: dupCount } = await supabase
    .from("projects")
    .select("id", { count: "exact", head: true })
    .eq("user_id", dbUser.id)
    .eq("title", title);

  if ((dupCount ?? 0) > 0) {
    return { error: "duplicate_name" };
  }

  const { data, error } = await supabase
    .from("projects")
    .insert({
      user_id: dbUser.id,
      title,
      canvas_json: canvasJson,
      preview_url: previewUrl ?? null,
    })
    .select("id")
    .single();

  if (error) return { error: error.message };
  revalidatePath("/dashboard");
  return { id: data.id };
}

export async function updateProject(
  id: string,
  title: string,
  canvasJson: string,
) {
  const user = await currentUser();
  if (!user) return { error: "Not authenticated" };

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return { error: "User not found" };

  const { error } = await supabase
    .from("projects")
    .update({
      title,
      canvas_json: canvasJson,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", dbUser.id);

  if (error) return { error: error.message };
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function deleteProject(id: string) {
  const user = await currentUser();
  if (!user) return { error: "Not authenticated" };

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return { error: "User not found" };

  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .eq("user_id", dbUser.id);

  if (error) return { error: error.message };
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function getProjects() {
  const user = await currentUser();
  if (!user) return [];

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return [];

  const { data } = await supabase
    .from("projects")
    .select("id, title, preview_url, updated_at")
    .eq("user_id", dbUser.id)
    .order("updated_at", { ascending: false });

  return data ?? [];
}

export async function getProject(id: string) {
  const user = await currentUser();
  if (!user) return null;

  const supabase = createServerClient();
  const dbUser = await getDbUserId(supabase, user.id);
  if (!dbUser) return null;

  const { data } = await supabase
    .from("projects")
    .select("canvas_json, title")
    .eq("id", id)
    .eq("user_id", dbUser.id) // security: owner only
    .single();

  return data;
}
