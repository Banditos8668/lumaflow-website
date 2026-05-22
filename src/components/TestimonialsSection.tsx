interface Testimonial {
  text: string
  author: string
  service: string
  stars: number
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="bewertungen" className="bg-[#F3ECE7] px-5 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-4">
              Kundenstimmen
            </p>
            <h2
              className="text-[#2A2523] text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Was Kundinnen sagen
            </h2>
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#EAE0D9] rounded-full px-4 py-2 shadow-sm">
              <span className="text-[#C9A078] text-sm leading-none">★★★★★</span>
              <span className="text-[#2A2523] text-sm font-semibold leading-none">4.9</span>
              <span className="text-[#7A6E6B] text-xs leading-none">auf Google · 47 Bewertungen</span>
            </div>
          </div>
          <a
            href="#buchen"
            className="hidden sm:inline-flex items-center gap-1.5 text-[#B77979] text-sm font-medium hover:underline shrink-0"
          >
            Termin buchen →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-[#EAE0D9] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <span key={s} className="text-[#C9A078] text-base leading-none">★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#2A2523] text-base leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
              >
                "{t.text}"
              </p>

              {/* Attribution */}
              <div className="border-t border-[#EAE0D9] pt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE5DF] flex items-center justify-center shrink-0">
                    <span className="text-[#B77979] text-xs font-semibold">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <p className="text-[#2A2523] text-sm font-medium">{t.author}</p>
                </div>
                <span className="bg-[#F3EAE4] text-[#B77979] text-[10px] px-2.5 py-1 rounded-full whitespace-nowrap">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <a
            href="#buchen"
            className="inline-flex items-center gap-1.5 text-[#B77979] text-sm font-medium"
          >
            Jetzt Termin buchen →
          </a>
        </div>

      </div>
    </section>
  )
}
