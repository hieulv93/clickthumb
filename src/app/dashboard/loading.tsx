export default function DashboardLoading() {
  return (
    <main className="max-w-3xl mx-auto w-full px-4 py-10 space-y-8">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-7 w-32 bg-gray-100 rounded-lg animate-pulse" />
          <div className="h-4 w-44 bg-gray-100 rounded animate-pulse" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="h-6 w-14 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-3 w-28 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>

      {/* Saved Projects */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="h-5 w-32 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-10 bg-gray-100 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-100 bg-white p-4 space-y-3"
            >
              <div className="h-28 bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
              <div className="h-3 w-1/2 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </section>

      {/* Brand Kit */}
      <section className="space-y-3">
        <div className="h-5 w-24 bg-gray-100 rounded animate-pulse" />
        <div className="rounded-xl border border-gray-100 bg-white p-5 space-y-4">
          <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gray-100 animate-pulse"
              />
            ))}
          </div>
          <div className="h-4 w-20 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-32 bg-gray-100 rounded animate-pulse" />
        </div>
      </section>
    </main>
  );
}
