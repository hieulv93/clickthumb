import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import ProjectsSection from "./ProjectsSection";

async function resolveDbUser(clerkId: string) {
  const supabase = createServerClient();

  // Select-first: returning users skip the upsert (1 DB round-trip instead of 2)
  const { data } = await supabase
    .from("users")
    .select("id, plan")
    .eq("clerk_id", clerkId)
    .single();

  if (data) return { supabase, dbUser: data };

  // First visit: insert then return
  const { data: inserted } = await supabase
    .from("users")
    .insert({ clerk_id: clerkId, plan: "free" })
    .select("id, plan")
    .single();

  return { supabase, dbUser: inserted };
}

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ upgraded?: string }>;
}) {
  const { upgraded } = await searchParams;

  console.time("[dashboard] clerk");
  const user = await currentUser();
  console.timeEnd("[dashboard] clerk");

  if (!user) redirect("/sign-in");

  console.time("[dashboard] db:user");
  const { supabase, dbUser } = await resolveDbUser(user.id);
  console.timeEnd("[dashboard] db:user");

  const plan = dbUser?.plan ?? "free";
  const displayName =
    user.firstName ?? user.emailAddresses[0]?.emailAddress ?? "there";

  console.time("[dashboard] db:parallel");
  const [{ data: projects }, { data: brandKit }] = dbUser
    ? await Promise.all([
        supabase
          .from("projects")
          .select("id, title, preview_url, updated_at, canvas_json")
          .eq("user_id", dbUser.id)
          .order("updated_at", { ascending: false }),
        supabase
          .from("brand_kits")
          .select("logo_url, colors, fonts, updated_at")
          .eq("user_id", dbUser.id)
          .single(),
      ])
    : [{ data: [] }, { data: null }];
  console.timeEnd("[dashboard] db:parallel");

  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-8">
      {upgraded && plan === "pro" && (
        <div className="rounded-xl bg-green-50 border border-green-200 px-5 py-4 flex items-center gap-3">
          <span className="text-green-600 text-xl">🎉</span>
          <div>
            <p className="font-semibold text-green-800 text-sm sm:text-base">
              Welcome to Pro!
            </p>
            <p className="text-green-600 text-xs sm:text-sm mt-0.5">
              Brand Kit and all Pro features are now unlocked.
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-400 text-base mt-0.5">
            Welcome back, {displayName}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${plan === "pro" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"}`}
          >
            {plan === "pro" ? "Pro" : "Free"}
          </span>
          {plan === "pro" ? (
            <a
              href="https://app.lemonsqueezy.com/my-orders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Manage subscription →
            </a>
          ) : (
            <Link
              href="/upgrade"
              className="text-sm text-blue-600 hover:underline"
            >
              Upgrade to Pro →
            </Link>
          )}
        </div>
      </div>

      <section>
        <ProjectsSection projects={projects ?? []} plan={plan} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900 sm:text-lg">Brand Kit</h2>
          {plan === "pro" && (
            <Link
              href="/dashboard/brand-kit"
              className="text-xs sm:text-sm text-blue-600 hover:underline"
            >
              Edit →
            </Link>
          )}
        </div>

        {plan === "pro" ? (
          <div className="rounded-xl border bg-white p-5">
            {brandKit &&
            (brandKit.logo_url ||
              brandKit.colors.length > 0 ||
              brandKit.fonts.length > 0) ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">Logo</p>
                  {brandKit.logo_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={brandKit.logo_url}
                      alt="Brand logo"
                      className="h-10 object-contain"
                    />
                  ) : (
                    <p className="text-sm text-gray-300">—</p>
                  )}
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">
                    Colors
                  </p>
                  {brandKit.colors.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {brandKit.colors.map((c: string, i: number) => (
                        <div
                          key={`${c}-${i}`}
                          className="w-7 h-7 rounded-full border border-white shadow"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-300">—</p>
                  )}
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2">Fonts</p>
                  {brandKit.fonts.length > 0 ? (
                    <p className="text-sm sm:text-base text-gray-700">
                      {brandKit.fonts.join(", ")}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-300">—</p>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm sm:text-base text-gray-400">
                No brand kit yet.{" "}
                <Link
                  href="/dashboard/brand-kit"
                  className="text-blue-600 hover:underline"
                >
                  Set it up →
                </Link>
              </p>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                Brand Kit is a Pro feature
              </p>
              <p className="text-gray-500 text-sm sm:text-base mt-0.5">
                Save your logo, colors and fonts — auto-loaded every time you
                create a thumbnail.
              </p>
            </div>
            <a
              href="/upgrade"
              className="shrink-0 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Upgrade — $8/mo
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
