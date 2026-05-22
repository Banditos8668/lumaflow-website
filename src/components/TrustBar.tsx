const trustStatements = [
  {
    heading: "Jede Behandlung individuell",
    body: "Ich nehme mir Zeit für Sie. Kein Fliessband.",
  },
  {
    heading: "Geprüfte Qualität",
    body: "Nur dermatologisch getestete Produkte.",
  },
  {
    heading: "Gut erreichbar",
    body: "Tram 2 bis Grimselstrasse. Parkplätze vorhanden.",
  },
]

const secondaryStats = [
  { number: "100%", label: "Individuelle Betreuung" },
  { number: "6",    label: "Behandlungen" },
  { number: "Mo–Sa", label: "Termine möglich" },
]

export default function TrustBar() {
  return (
    <section className="bg-white px-5 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.4fr] items-center gap-12 md:gap-0">

          {/* ── Hero stat ── */}
          <div className="text-center md:text-left md:pr-20">
            <p
              className="text-[#2A2523] font-normal leading-none mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                fontSize: "clamp(6rem, 11vw, 9.5rem)",
              }}
            >
              20+
            </p>
            <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest">
              Jahre Erfahrung
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px bg-[#EAE0D9] self-stretch" />

          {/* ── Trust statements ── */}
          <div className="md:pl-20">
            {trustStatements.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 ${i > 0 ? 'mt-9 pt-9 border-t border-[#EAE0D9]' : ''}`}
              >
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#B77979] mt-[9px]" />
                <div>
                  <p
                    className="text-[#2A2523] text-lg font-normal mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.heading}
                  </p>
                  <p className="text-[#7A6E6B] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}

            {/* Secondary stats */}
            <div className="mt-10 pt-8 border-t border-[#EAE0D9] grid grid-cols-3 gap-4">
              {secondaryStats.map((s, i) => (
                <div key={i}>
                  <p
                    className="text-[#2A2523] text-2xl font-normal mb-1 leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.number}
                  </p>
                  <p className="text-[#7A6E6B] text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
