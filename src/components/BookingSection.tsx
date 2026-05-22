import { useState } from 'react'

interface BookingServiceItem {
  name: string
  duration: string
  price: string
}

interface BookingCategoryItem {
  id: string
  name: string
  services: BookingServiceItem[]
}

interface BookingSectionProps {
  bookingCategories: BookingCategoryItem[]
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
]

function getNextDays(count: number) {
  const days: Array<{ iso: string; dayShort: string; dayNum: string; monthShort: string }> = []
  const today = new Date()
  let offset = 1
  while (days.length < count) {
    const d = new Date(today)
    d.setDate(today.getDate() + offset)
    offset++
    if (d.getDay() === 0) continue // skip Sundays — studio is Mo–Sa
    days.push({
      iso: d.toISOString().split("T")[0],
      dayShort: d.toLocaleDateString("de-CH", { weekday: "short" }),
      dayNum: d.toLocaleDateString("de-CH", { day: "numeric" }),
      monthShort: d.toLocaleDateString("de-CH", { month: "short" }),
    })
  }
  return days
}

function CheckCircleIcon() {
  return (
    <svg className="w-7 h-7 text-[#3D7A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function BookingSection({ bookingCategories }: BookingSectionProps) {
  const [activeCat, setActiveCat] = useState(0)
  const [selectedService, setSelectedService] = useState<BookingServiceItem | null>(null)
  const [selectedDay, setSelectedDay] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [step, setStep] = useState<"browse" | "book">("browse")
  const [submitted, setSubmitted] = useState(false)

  const days = getNextDays(21)
  const currentCategory = bookingCategories[activeCat]

  function handleSelect(service: BookingServiceItem) {
    setSelectedService(service)
    setSelectedDay(null)
    setSelectedTime(null)
    setSubmitted(false)
    setStep("book")
  }

  function handleBack() {
    setStep("browse")
    setSelectedService(null)
    setSubmitted(false)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="buchen" className="bg-[#F6F1EC] px-5 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-4">
            Terminbuchung
          </p>
          <h2
            className="text-[#2A2523] text-4xl sm:text-5xl font-normal"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Preise &amp; Online buchen
          </h2>
          <p className="text-[#7A6E6B] text-sm mt-3">
            Wählen Sie eine Behandlung und Ihren Wunschtermin. Kein Login erforderlich.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">

          {/* ── Category sidebar ── */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {bookingCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCat(i); setStep("browse"); setSelectedService(null); setSubmitted(false) }}
                className={`shrink-0 text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 whitespace-nowrap lg:whitespace-normal ${
                  activeCat === i
                    ? "bg-[#B77979] text-white"
                    : "bg-white text-[#7A6E6B] border border-[#EAE0D9] hover:border-[#D8B7B0] hover:text-[#2A2523]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* ── Main panel ── */}
          <div className="bg-white rounded-2xl border border-[#EAE0D9] overflow-hidden">

            {step === "browse" && (
              <div>
                {/* Category header */}
                <div className="px-6 py-5 border-b border-[#EAE0D9]">
                  <p
                    className="text-[#2A2523] text-xl font-normal"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {currentCategory.name}
                  </p>
                </div>

                {/* Service rows */}
                <div className="divide-y divide-[#EAE0D9]">
                  {currentCategory.services.map((svc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-6 py-5 gap-4 hover:bg-[#FBF8F6] transition-colors cursor-default"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[#2A2523] text-base font-medium truncate">
                          {svc.name}
                        </p>
                        <p className="text-[#7A6E6B] text-xs mt-1">{svc.duration}</p>
                      </div>
                      <p className="text-[#B77979] text-base font-semibold shrink-0">
                        {svc.price}
                      </p>
                      <button
                        onClick={() => handleSelect(svc)}
                        className="shrink-0 bg-[#B77979] text-white text-xs font-medium px-5 py-2.5 rounded-lg hover:bg-[#A56868] transition-colors duration-150"
                      >
                        Auswählen
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === "book" && selectedService && (

              submitted ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center text-center px-8 py-16">
                  <div className="w-14 h-14 rounded-full bg-[#F0FAF1] border border-[#C3E6CB] flex items-center justify-center mb-5">
                    <CheckCircleIcon />
                  </div>
                  <h3
                    className="text-[#2A2523] text-2xl font-normal mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Anfrage gesendet!
                  </h3>
                  <p className="text-[#7A6E6B] text-sm mb-1">
                    Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                  </p>
                  <p
                    className="text-[#B77979] text-sm italic mb-8"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    – Rada Altwein
                  </p>

                  {/* Booking summary */}
                  <div className="bg-[#F8F5F2] rounded-xl px-5 py-4 mb-8 text-sm text-left w-full max-w-xs space-y-1.5">
                    <p className="text-[#2A2523] font-medium">{selectedService.name}</p>
                    <p className="text-[#7A6E6B]">{selectedService.duration} · {selectedService.price}</p>
                    {selectedDay && selectedTime && (
                      <p className="text-[#7A6E6B]">
                        {days.find(d => d.iso === selectedDay)?.dayShort},{" "}
                        {days.find(d => d.iso === selectedDay)?.dayNum}.{" "}
                        {days.find(d => d.iso === selectedDay)?.monthShort} · {selectedTime} Uhr
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleBack}
                    className="text-[#B77979] text-sm font-medium border border-[#D8B7B0] rounded-lg px-7 py-3 hover:bg-[#B77979] hover:text-white hover:border-[#B77979] transition-colors duration-150"
                  >
                    Weitere Anfrage stellen
                  </button>
                </div>

              ) : (
                /* ── Booking flow ── */
                <div>
                  {/* Back + selected service */}
                  <div className="px-6 py-5 border-b border-[#EAE0D9] flex items-center justify-between gap-4">
                    <button
                      onClick={handleBack}
                      className="text-[#7A6E6B] text-sm hover:text-[#2A2523] transition-colors flex items-center gap-1.5"
                    >
                      ← Zurück
                    </button>
                    <div className="text-right">
                      <p className="text-[#2A2523] text-base font-medium">{selectedService.name}</p>
                      <p className="text-[#7A6E6B] text-xs">{selectedService.duration} · {selectedService.price}</p>
                    </div>
                  </div>

                  <div className="p-6">

                    {/* Day selector */}
                    <p className="text-[#2A2523] text-xs font-medium mb-3 uppercase tracking-wider">
                      Datum wählen
                    </p>
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5 mb-6">
                      {days.map((d) => (
                        <button
                          key={d.iso}
                          onClick={() => { setSelectedDay(d.iso); setSelectedTime(null) }}
                          className={`flex flex-col items-center py-3 rounded-xl text-center transition-colors duration-150 ${
                            selectedDay === d.iso
                              ? "bg-[#B77979] text-white"
                              : "bg-[#F8F5F2] text-[#2A2523] hover:bg-[#F3EAE4]"
                          }`}
                        >
                          <span className={`text-[10px] font-medium uppercase ${selectedDay === d.iso ? "text-white/70" : "text-[#7A6E6B]"}`}>
                            {d.dayShort}
                          </span>
                          <span className="text-base font-semibold leading-tight">{d.dayNum}</span>
                          <span className={`text-[10px] ${selectedDay === d.iso ? "text-white/70" : "text-[#7A6E6B]"}`}>
                            {d.monthShort}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Time slots */}
                    {selectedDay && (
                      <>
                        <p className="text-[#2A2523] text-xs font-medium mb-3 uppercase tracking-wider">
                          Uhrzeit wählen
                        </p>
                        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-7">
                          {timeSlots.map((t) => (
                            <button
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`py-2.5 rounded-lg text-xs font-medium text-center transition-colors duration-150 ${
                                selectedTime === t
                                  ? "bg-[#B77979] text-white"
                                  : "bg-[#F8F5F2] text-[#2A2523] hover:bg-[#F3EAE4]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Booking form — appears when time is picked */}
                    {selectedDay && selectedTime && (
                      <div className="border-t border-[#EAE0D9] pt-6">
                        <div className="bg-[#F8F5F2] rounded-xl px-4 py-3 mb-5 flex flex-wrap gap-4 text-sm">
                          <span className="text-[#2A2523] font-medium">{selectedService.name}</span>
                          <span className="text-[#7A6E6B]">{selectedService.duration}</span>
                          <span className="text-[#B77979] font-medium">{selectedService.price}</span>
                          <span className="text-[#7A6E6B]">
                            {days.find(d => d.iso === selectedDay)?.dayShort}{" "}
                            {days.find(d => d.iso === selectedDay)?.dayNum}.{" "}
                            {days.find(d => d.iso === selectedDay)?.monthShort}
                          </span>
                          <span className="text-[#7A6E6B]">{selectedTime} Uhr</span>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                              <label className="block text-[#2A2523] text-xs font-medium mb-1.5 uppercase tracking-wider">
                                Name
                              </label>
                              <input
                                type="text"
                                placeholder="Ihr Name"
                                className="w-full border border-[#E8DFD8] rounded-lg px-4 py-3 text-sm text-[#2A2523] bg-white placeholder:text-[#C4B8B3] focus:outline-none focus:border-[#B77979] transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-[#2A2523] text-xs font-medium mb-1.5 uppercase tracking-wider">
                                Telefon
                              </label>
                              <input
                                type="tel"
                                placeholder="+41"
                                className="w-full border border-[#E8DFD8] rounded-lg px-4 py-3 text-sm text-[#2A2523] bg-white placeholder:text-[#C4B8B3] focus:outline-none focus:border-[#B77979] transition-colors"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                            <button
                              type="submit"
                              className="w-full sm:w-auto bg-[#B77979] text-white text-sm font-medium px-10 py-4 rounded-lg hover:bg-[#A56868] transition-colors duration-150"
                            >
                              Termin buchen
                            </button>
                            <p className="text-[#7A6E6B] text-xs">
                              Antwort innerhalb von 24h. Kein Login erforderlich.
                            </p>
                          </div>
                        </form>
                      </div>
                    )}

                  </div>
                </div>
              )
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
