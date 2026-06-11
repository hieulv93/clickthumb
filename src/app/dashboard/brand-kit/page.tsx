import { currentUser } from "@clerk/nextjs/server";
import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getBrandKit } from "../../actions/brandKit";
import Link from "next/link";
import BrandKitForm from "./BrandKitForm";

export default async function BrandKitPage() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const supabase = createServerClient();
  const { data: dbUser } = await supabase
    .from("users")
    .select("plan")
    .eq("clerk_id", user.id)
    .single();

  const plan = dbUser?.plan ?? "free";

  if (plan !== "pro") {
    return (
      <main className="max-w-3xl mx-auto w-full px-4 py-10">
        <Link
          href="/dashboard"
          className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block"
        >
          ← Dashboard
        </Link>
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
          <p className="font-bold text-gray-900 text-lg mb-2">
            Brand Kit requires Pro
          </p>
          <p className="text-gray-500 text-sm mb-5">
            Save your logo, colors and fonts — auto-loaded every time you create
            a thumbnail.
          </p>
          <a
            href="/upgrade"
            className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Upgrade to Pro — $8/mo
          </a>
        </div>
      </main>
    );
  }

  const brandKit = await getBrandKit();

  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10">
      <Link
        href="/dashboard"
        className="text-sm text-gray-400 hover:text-gray-600 mb-6 inline-block"
      >
        ← Dashboard
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Brand Kit</h1>
      <p className="text-sm text-gray-400 mb-8">
        Your logo, colors and fonts — saved and ready for every thumbnail.
      </p>
      <div className="rounded-xl border bg-white p-6">
        <BrandKitForm initial={brandKit} />
      </div>
    </main>
  );
}
