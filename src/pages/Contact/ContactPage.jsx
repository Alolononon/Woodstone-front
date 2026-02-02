import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
    e.target.reset();
  };

  return (
    <main className="min-h-screen bg-[#f6efe7] text-[#3b2a1a]">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fdf8f3] to-[#f6efe7] border-b border-[#e6d8c8]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold tracking-wider text-[#8b5e34]">
            CONTACT
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-[#6b4b2e]">
            Questions about classes, schedules, or fees? We’re happy to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Form */}
          <div className="md:col-span-2 rounded-2xl bg-[#fffaf4] p-6 md:p-8 shadow-md border border-[#e6d8c8]">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <p className="mt-2 text-sm text-[#7a5a3a]">
              Leave us your details and we’ll respond within 24 hours.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm">Full name</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl bg-white border border-[#d9c7b3] px-4 py-3 placeholder:text-[#9b7b5a] focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
                    placeholder="e.g. Alex Tan"
                  />
                </div>

                <div>
                  <label className="text-sm">Email / Phone</label>
                  <input
                    required
                    type="text"
                    className="mt-2 w-full rounded-xl bg-white border border-[#d9c7b3] px-4 py-3 placeholder:text-[#9b7b5a] focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
                    placeholder="alex@email.com / 9xxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Enquiry type</label>
                <select
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl bg-white border border-[#d9c7b3] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Class enquiry</option>
                  <option>Schedule & availability</option>
                  <option>Fees & discounts</option>
                  <option>Trial lesson</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl bg-white border border-[#d9c7b3] px-4 py-3 placeholder:text-[#9b7b5a] focus:outline-none focus:ring-2 focus:ring-[#8b5e34]"
                  placeholder="Student level, subject(s), and preferred timing."
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#7a5a3a]">
                  We’ll only contact you regarding your enquiry.
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-xl bg-[#8b5e34] px-6 py-3 font-semibold text-white hover:bg-[#754b28] disabled:opacity-60"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Sent ✓"
                    : "Send message"}
                </button>
              </div>
            </form>
          </div>

          {/* Info */}
          <aside className="rounded-2xl bg-[#fffaf4] p-6 md:p-8 shadow-md border border-[#e6d8c8]">
            <h2 className="text-xl font-semibold">Contact details</h2>

            <div className="mt-5 space-y-4 text-sm text-[#6b4b2e]">
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="mt-1">+65 XXXX XXXX</p>
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="mt-1">hello@woodstonetuition.com</p>
              </div>

              <div>
                <p className="font-medium">Location</p>
                <p className="mt-1">Singapore (Online & In-person)</p>
              </div>

              <div>
                <p className="font-medium">Hours</p>
                <p className="mt-1">Mon–Sat, 10am – 9pm</p>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <a
                href="/signup"
                className="block w-full rounded-xl bg-[#e6d8c8] px-5 py-3 text-center font-medium hover:bg-[#d9c7b3]"
              >
                View classes & sign up
              </a>
              <a
                href="https://wa.me/65XXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-xl bg-[#8b5e34] px-5 py-3 text-center font-semibold text-white hover:bg-[#754b28]"
              >
                WhatsApp us →
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
