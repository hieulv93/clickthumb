"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCheckoutUrl } from "../actions/checkout";

export default function CheckoutButton({
  isSignedIn,
}: {
  isSignedIn: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleUpgrade() {
    if (!isSignedIn) {
      router.push("/sign-in?redirect_url=/upgrade");
      return;
    }
    setLoading(true);
    setError("");
    const result = await createCheckoutUrl();
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else if (result.url) {
      window.location.href = result.url;
    }
  }

  return (
    <div>
      <button
        onClick={handleUpgrade}
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 disabled:opacity-60 transition-colors"
      >
        {loading ? "Preparing checkout…" : "Upgrade to Pro — $8/mo"}
      </button>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  );
}
