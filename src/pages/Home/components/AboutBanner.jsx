import { Link } from "react-router-dom";

export default function AboutBanner() {
  return (
    <section className="w-full bg-neutral-900 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="mb-6 text-2xl md:text-4xl font-semibold leading-tight">
          With <span className="text-[#b07a3a]">WOODSTONE</span>, we ensure your
          learning feels natural, built on a strong foundation.
        </h1>

        <Link
          to="/about"
          className="inline-block rounded-xl bg-green-400 px-6 py-3 text-base font-medium text-black transition hover:bg-green-300"
        >
          About Us →
        </Link>
      </div>
    </section>
  );
}
