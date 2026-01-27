import { WhatsAppLink } from "@/constants";
import { useState, useEffect } from "react";

export default function WelcomeBanner() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow1(true), 800);
    const t2 = setTimeout(() => setShow2(true), 1400);
    const t3 = setTimeout(() => setShow3(true), 2000);
    const t4 = setTimeout(() => setShow4(true), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const anim = (show) =>
    `transition-all duration-700 ease-out will-change-transform ${
      show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
    }`;

  return (
    <section className="relative w-full overflow-hidden aspect-[21/9]">
      {/* Background image */}
      <img
        src="/teacher_img.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Teacher"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />


      {/* Main content */}
      <div className={`${anim(show1)} relative z-10 h-full flex items-center px-6 md:px-16`}>
        <div className="max-w-xl">


          {/* Headline */}
          <h1 className={` mt-4 text-white font-bold leading-tight text-[clamp(2rem,4.5vw,3.5rem)]`}>
            Best Tutoring <br className="hidden md:block" />
            in Singapore
          </h1>

    

          {/* CTA */}
          <div className={`mt-10 flex flex-wrap gap-3`}>
            <a
              href={WhatsAppLink}
              className="text-2xl rounded-xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90 transition"
            >
              Register Today!
            </a>
          </div>

        </div>
      </div>

      {/* Floating feature chips */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className={`${anim(show2)} absolute left-[45%] top-[13%] hidden md:block`}>
          <div className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur shadow-lg">
            <h1 className="text-4xl font-semibold">1-to-1 Tutoring</h1>
            <p className="text-sm text-white/80">Personalized learning experience</p>
          </div>
        </div>

        <div className={`${anim(show3)} absolute left-[45%] top-[35%] hidden md:block`}>
          <div className="rounded-2xl bg-white/15 px-4 py-3 text-white backdrop-blur shadow-lg">
            <p className="text-4xl font-semibold">Proven Results</p>
            <p className="text-sm text-white/80">Track improvements weekly</p>
          </div>
        </div>


          
        <div className={`${anim(show4)} absolute left-[45%] top-[58%] hidden md:block`}>
          <div className="flex items-start gap-3 rounded-2xl bg-white/15 px-4 py-3 text-white backdrop-blur shadow-lg">
            <span className="mt-2 inline-block h-2 w-2 rounded-full bg-green-400" />
            <div className="text-4xl font-semibold leading-tight">
              Free Trial Lesson
              <div className="text-center ">Available</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
