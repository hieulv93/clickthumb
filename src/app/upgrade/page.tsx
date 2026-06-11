import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/supabase/server";
import CheckoutButton from "./CheckoutButton";

export default async function UpgradePage() {
  const user = await currentUser();

  if (user) {
    const supabase = createServerClient();
    const { data: dbUser } = await supabase
      .from("users")
      .select("plan")
      .eq("clerk_id", user.id)
      .single();

    if (dbUser?.plan === "pro") redirect("/dashboard");
  }

  return (
    <main className="max-w-lg mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Upgrade to Pro</h1>
      <p className="text-gray-500 mb-10">
        Everything you need to create thumbnails faster, every week.
      </p>

      <div className="rounded-2xl border bg-white p-8 text-left space-y-4 mb-8 shadow-sm">
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-bold text-gray-900">$8</span>
          <span className="text-gray-400">/month</span>
        </div>

        {[
          "Unlimited saved projects",
          "Brand Kit — logo, colors & fonts",
          "PNG export (transparent background)",
          "All premium templates",
          "No watermark on downloads",
          "Priority support",
        ].map((f) => (
          <div key={f} className="flex items-center gap-3">
            <span className="text-blue-600 text-lg">✓</span>
            <span className="text-gray-700 text-sm">{f}</span>
          </div>
        ))}
      </div>

      <CheckoutButton isSignedIn={!!user} />

      <p className="text-xs text-gray-400 mt-4">
        Cancel anytime. Secure checkout via LemonSqueezy.
      </p>
    </main>
  );
}
