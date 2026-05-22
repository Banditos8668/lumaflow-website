interface Service {
  name: string
  description: string
  treatments: string[]
  startingPrice: string
  duration: string
  imageSlot?: string
  popular?: boolean
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const total = services.length

  return (
    <section id="leistungen" className="bg-[#F8F5F2] px-5 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-4">
            Unsere Leistungen
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-[#2A2523] text-4xl sm:text-5xl font-normal"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Behandlungen
            </h2>
            <a
              href="#buchen"
              className="shrink-0 text-sm font-medium text-[#B77979] border border-[#D8B7B0] rounded-lg px-6 py-3 hover:bg-[#B77979] hover:text-white hover:border-[#B77979] transition-colors duration-150"
            >
              Alle Preise & Online buchen →
            </a>
          </div>
        </div>

        {/* Cards — 3 col desktop, 2 col tablet, 1 col mobile */}
        {/* 7th card: when total%3===1 it's alone — center it with col-start-2 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isLoneLastCard = i === total - 1 && total % 3 === 1
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden border border-[#EAE0D9] hover:border-[#D8B7B0] hover:shadow-md transition-all duration-200 flex flex-col ${
                  isLoneLastCard ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={`/assets/images/${service.imageSlot}.jpg`}
                    alt={service.name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={675}
                  />
                  {service.popular && (
                    <span className="absolute top-3 left-3 bg-[#B77979] text-white text-[10px] font-medium px-2.5 py-1 rounded-full tracking-wide">
                      Beliebt
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Name + price */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="text-[#2A2523] text-lg font-normal leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.name}
                    </h3>
                    <span className="shrink-0 text-[#B77979] text-sm font-semibold whitespace-nowrap mt-0.5">
                      {service.startingPrice}
                    </span>
                  </div>

                  {/* Duration */}
                  <p className="text-[#7A6E6B] text-xs mb-3">{service.duration}</p>

                  {/* Description */}
                  <p className="text-[#7A6E6B] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Treatment pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5 flex-1 content-start">
                    {service.treatments.slice(0, 3).map((t, j) => (
                      <span
                        key={j}
                        className="bg-[#F3EAE4] text-[#B77979] text-[10px] px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Single CTA */}
                  <a
                    href="#buchen"
                    className="block text-center text-xs font-medium text-white bg-[#B77979] rounded-lg py-3 hover:bg-[#A56868] transition-colors duration-150"
                  >
                    Online buchen
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
