import { useState } from 'react'

const treatmentOptions = [
  "Manicure",
  "Pedicure",
  "Haarentfernung",
  "Gesichtsbehandlung",
  "Bodyforming (DiViNiA)",
  "Augenbrauen & Wimpern",
]

function ChevronDown() {
  return (
    <svg className="w-4 h-4 text-[#7A6E6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
]

interface MissedCallSectionProps {
  phone: string
}

export default function MissedCallSection({ phone }: MissedCallSectionProps) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-[#F3ECE7] px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — message */}
          <div className="border-l-[3px] border-[#D8B7B0] pl-8">
            <p className="text-[#B77979] text-xs font-medium uppercase tracking-widest mb-5">
              Erreichbarkeit
            </p>

            <h2
              className="text-[#2A2523] text-3xl sm:text-4xl font-normal leading-snug mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}
            >
              Falls Sie mich nicht erreichen, melde ich mich bei Ihnen.
            </h2>

            <p className="text-[#7A6E6B] text-base leading-relaxed mb-4 max-w-md">
              Wenn ich gerade in einer Behandlung bin und Ihren Anruf verpasse,
              können Sie direkt eine Anfrage senden. Ich melde mich innerhalb von
              24 Stunden zurück.
            </p>

            <p className="text-[#7A6E6B] text-sm leading-relaxed mb-8 max-w-md">
              Kein Anliegen geht verloren. Ich beantworte jede Anfrage persönlich.
            </p>

            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-[#B77979] text-sm font-medium border border-[#D8B7B0] rounded-lg px-7 py-3.5 hover:bg-[#B77979] hover:text-white hover:border-[#B77979] transition-colors duration-150"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              {phone} anrufen
            </a>
          </div>

          {/* Right — request widget */}
          <div className="bg-white rounded-2xl border border-[#EAE0D9] px-6 py-7 shadow-sm">
            <p
              className="text-[#2A2523] text-lg font-normal mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Anfrage senden
            </p>

            {submitted ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center text-center py-10 px-4">
                <div className="w-12 h-12 rounded-full bg-[#F0FAF1] border border-[#C3E6CB] flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#3D7A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p
                  className="text-[#2A2523] text-lg font-normal mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Anfrage gesendet!
                </p>
                <p className="text-[#7A6E6B] text-sm mb-1">
                  Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                </p>
                <p
                  className="text-[#B77979] text-sm italic mb-6"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  – Rada Altwein
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#7A6E6B] text-xs font-medium hover:text-[#2A2523] transition-colors"
                >
                  Neue Anfrage stellen
                </button>
              </div>
            ) : (
              /* ── Request form ── */
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="space-y-4">
                <div>
                  <label className="block text-[#7A6E6B] text-[10px] font-medium mb-2 uppercase tracking-widest">
                    Behandlung
                  </label>
                  <div className="relative">
                    <select
                      className="w-full border border-[#E8DFD8] rounded-lg pl-4 pr-14 py-3.5 text-sm text-[#2A2523] bg-[#F8F5F2] focus:outline-none focus:border-[#B77979] transition-colors appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Bitte wählen</option>
                      {treatmentOptions.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                      <ChevronDown />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#7A6E6B] text-[10px] font-medium mb-2 uppercase tracking-widest">
                      Wunschdatum
                    </label>
                    <input
                      type="date"
                      className="w-full border border-[#E8DFD8] rounded-lg pl-4 pr-10 py-3.5 text-sm text-[#2A2523] bg-[#F8F5F2] focus:outline-none focus:border-[#B77979] transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-[#7A6E6B] text-[10px] font-medium mb-2 uppercase tracking-widest">
                      Wunschzeit
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-[#E8DFD8] rounded-lg pl-4 pr-14 py-3.5 text-sm text-[#2A2523] bg-[#F8F5F2] focus:outline-none focus:border-[#B77979] transition-colors appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Zeit wählen</option>
                        {timeSlots.map(t => (
                          <option key={t} value={t}>{t} Uhr</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                        <ChevronDown />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#7A6E6B] text-[10px] font-medium mb-2 uppercase tracking-widest">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+41"
                    className="w-full border border-[#E8DFD8] rounded-lg px-4 py-3.5 text-sm text-[#2A2523] bg-[#F8F5F2] placeholder:text-[#C4B8B3] focus:outline-none focus:border-[#B77979] transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1 border-t border-[#EAE0D9]">
                  <p className="text-[#7A6E6B] text-xs">Antwort innerhalb von 24h</p>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#B77979] text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-[#A56868] transition-colors duration-150"
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
