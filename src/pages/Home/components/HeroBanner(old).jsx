import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/constants"

export default function HeroBanner() {
  return (
    <section
      className="relative h-[70vh] min-h-[480px] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/library_banner.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                    Build Strong Foundations for Academic Success
                    </h1>

                    <p className="mt-4 text-lg text-white/90">
                    Woodstone Tuition helps students gain confidence, clarity, and
                    results through structured and personalised lessons.
                    </p>

                    <div className="mt-6 flex gap-4">
                        <Button size="lg" asChild className="bg-green-500">
                            <a
                            href={WhatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            WhatsApp Us
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-gray-500 border-0  text-white hover:bg-white hover:text-black"
                            asChild
                        >
                            <a href="/about">Learn More</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
