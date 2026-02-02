export default function ContactMeBanner() {
  return (
    <section className="w-full bg-[#F7F1E8] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-[#E6D7C5] bg-[#FFF9F2] p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide text-[#7A5B3A]">
                Enquiries & Registration
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-[#2B1B0E]">
                Speak to Our Tutors Today
              </h2>

              <p className="mt-3 text-base leading-relaxed text-[#5B4632]">
                We’ll recommend a suitable class based on your level and goals, and
                share available time slots, fees, and lesson details.
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-[#5B4632] sm:grid-cols-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#B07B4A]" />
                  Personalised class recommendation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#B07B4A]" />
                  Quick reply within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#B07B4A]" />
                  Transparent fees & schedules
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#B07B4A]" />
                  Friendly, professional support
                </li>
              </ul>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#7A5B3A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6A4E33]"
              >
                Contact Us
              </a>

              <a
                href="tel:+6560000000"
                className="inline-flex items-center justify-center rounded-xl border border-[#D9C3AD] bg-transparent px-6 py-3 text-sm font-semibold text-[#2B1B0E] transition hover:bg-[#F3E7DB]"
              >
                Call Us
              </a>

              <p className="text-center text-xs text-[#7A5B3A]">
                Mon–Sat • 10am–8pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
``
