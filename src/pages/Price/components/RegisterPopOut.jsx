import { useEffect, useState } from "react";

export default function BigRegisterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={() => setOpen(false)}
      />

      {/* Center modal */}
      <div className="relative h-full w-full flex items-center justify-center p-6">
        <div className="w-full max-w-2xl rounded-2xl bg-neutral-900 text-white shadow-2xl border border-white/10 animate-bigin">
          <div className="flex items-start justify-between p-6 md:p-8">
            <div className="pr-6">
              <p className="text-sm uppercase tracking-wider text-green-400 font-semibold">
                Limited-time offer
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">
                Register today.
                <br />
                Save more instantly.
              </h2>
              <p className="mt-4 text-base md:text-lg text-neutral-300">
                Multi-subject discounts available. Get priority placement and
                confirm your slot early.
              </p>

              <div className="mt-6 space-y-2 text-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>2 subjects: 5% off total fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>3 subjects: 10% off total fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Siblings: extra 10% off total fees</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-xl bg-green-400 px-6 py-3 text-base font-semibold text-black hover:bg-green-300"
                >
                  Register Now →
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-6 py-3 text-base font-medium text-neutral-200 border border-white/15 hover:bg-white/5"
                >
                  Maybe later
                </button>
              </div>

              <p className="mt-4 text-xs text-neutral-500">
                Press <span className="text-neutral-300">Esc</span> to close.
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-white text-3xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
