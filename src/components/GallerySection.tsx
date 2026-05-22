const slots = [
  { src: "/assets/images/service-gesicht.jpg",     label: "Studio",         span: "md:row-span-2" },
  { src: "/assets/images/service-manicure.jpg",    label: "Nägel",          span: "" },
  { src: "/assets/images/service-pedicure.jpg",    label: "Behandlung",     span: "" },
  { src: "/assets/images/service-bodyforming.jpg", label: "Körperpflege",   span: "" },
  { src: "/assets/images/service-waxing.jpg",      label: "Hände",          span: "" },
  { src: "/assets/images/service-augenbrauen.jpg", label: "Augen & Wimpern", span: "md:col-span-2" },
]

export default function GallerySection() {
  return (
    <section className="bg-[#F8F5F2] px-5 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-4">
            Einblicke
          </p>
          <h2
            className="text-[#2A2523] text-4xl sm:text-5xl font-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Studio &amp; Eindrücke
          </h2>
        </div>

        {/*
          Grid: 3 cols on desktop, 2 cols on mobile.
          First slot spans 2 rows (tall portrait).
          Last slot spans 2 cols (wide landscape).
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:auto-rows-[220px]">
          {slots.map((slot, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden ${slot.span} group`}
              style={{ minHeight: i === 0 ? 220 : undefined }}
            >
              <img
                src={slot.src}
                alt={slot.label}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={900}
                height={675}
              />

              {/* Label overlay on hover */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end px-4 pb-3">
                <span className="text-white text-xs font-medium tracking-wide">
                  {slot.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
