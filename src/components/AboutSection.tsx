interface AboutSectionProps {
  ownerName: string
  paragraphs: string[]
  phone: string
}

export default function AboutSection({ ownerName, paragraphs, phone }: AboutSectionProps) {
  return (
    <section id="ueber-mich" className="bg-white px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — portrait */}
          <div className="relative w-full min-h-[480px] md:min-h-[560px] rounded-3xl overflow-hidden">
            <img
              src="/assets/images/rada-portrait.jpg"
              alt="Rada Altwein – Inhaberin Rada's Beauty Zürich"
              className="absolute inset-0 w-full h-full object-cover object-[50%_15%]"
              loading="lazy"
              decoding="async"
              width={700}
              height={875}
            />
          </div>

          {/* Right — text */}
          <div>
            <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-6">
              Über mich
            </p>

            <h2
              className="text-[#2A2523] text-4xl sm:text-5xl font-normal leading-tight mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {ownerName}
            </h2>

            <p
              className="text-[#B77979] text-lg mb-8"
              style={{ fontFamily: "var(--font-heading)", fontStyle: "italic" }}
            >
              Über 20 Jahre Leidenschaft für Kosmetik
            </p>

            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#7A6E6B] text-base leading-relaxed mb-5 max-w-prose">
                {p}
              </p>
            ))}

            {/* Small trust points */}
            <div className="mt-8 mb-8 space-y-2.5">
              {[
                "Zertifizierte Kosmetikerin",
                "Geprüfte Qualitätsprodukte",
                "Jede Behandlung individuell abgestimmt",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D8B7B0] flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B77979]" />
                  </span>
                  <span className="text-[#2A2523] text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-7 border-t border-[#EAE0D9] flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="#buchen"
                className="text-center sm:text-left text-sm font-medium text-white bg-[#B77979] rounded-lg px-8 py-4 hover:bg-[#A56868] transition-colors duration-150"
              >
                Termin buchen
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#B77979] border border-[#D8B7B0] rounded-lg px-7 py-3.5 hover:bg-[#B77979] hover:text-white hover:border-[#B77979] transition-colors duration-150"
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                {phone} anrufen
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
