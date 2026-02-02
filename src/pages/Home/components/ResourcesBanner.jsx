export default function ResourcesBanner() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100 shadow-sm">
          {/* "Wood" accent strip */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800" />

          {/* subtle warm glow */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-stone-300/40 blur-3xl" />

          <div className="relative p-10 md:p-14 text-center">

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-stone-900 leading-tight">
              Looking for{" "}
              <span className="text-amber-800">free exam papers</span>{" "}
              and{" "}
              <span className="text-stone-700">study resources</span>?
            </h1>

            <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
              Grab curated papers, notes, and practice materials — built for fast revision
              and consistent improvement.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-7 py-3 rounded-xl bg-amber-800 text-amber-50 font-semibold hover:bg-amber-900 transition shadow-sm">
                Free Exam Papers
              </button>

              <button className="px-7 py-3 rounded-xl border border-stone-300 bg-stone-50 text-stone-800 font-semibold hover:bg-stone-100 transition">
                Free Resources
              </button>
            </div>

            <p className="mt-6 text-xs text-stone-500">
              Updated regularly • Easy to download • No sign-up needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
