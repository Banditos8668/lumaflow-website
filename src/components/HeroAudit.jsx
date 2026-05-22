import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

// ─── Icons (language-independent) ────────────────────────────────────────────

const icons = {
  invisible: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7.5" stroke="#A32D2D" strokeWidth="1.5" />
      <line x1="4" y1="4" x2="14" y2="14" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  broken: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="3" y="1.5" width="12" height="15" rx="2" stroke="#854F0B" strokeWidth="1.5" />
      <line x1="6" y1="6" x2="12" y2="6" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="9" x2="10" y2="9" stroke="#854F0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="13.5" r="2.5" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="1.5" />
      <line x1="12" y1="12" x2="12" y2="13.5" stroke="#EF9F27" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="14.8" r="0.5" fill="#EF9F27" />
    </svg>
  ),
  treatwell: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="6" cy="9" r="3.5" stroke="#185FA5" strokeWidth="1.5" />
      <circle cx="12" cy="9" r="3.5" stroke="#185FA5" strokeWidth="1.5" />
      <path d="M8 9 C8.5 7.5 9.5 7.5 10 9 C9.5 10.5 8.5 10.5 8 9Z" stroke="#185FA5" strokeWidth="1" />
    </svg>
  ),
  calls: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M4.5 2.5h3l1.2 3-2 1.8a9 9 0 003.5 3.5l1.8-2 3 1.2v3a1.2 1.2 0 01-1.2 1.2A12 12 0 013.3 3.7a1.2 1.2 0 011.2-1.2z" stroke="#3B6D11" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="12" y1="1.5" x2="16.5" y2="6" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.5" y1="1.5" x2="12" y2="6" stroke="#A32D2D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const iconColors = {
  invisible: "bg-red-50",
  broken:    "bg-amber-50",
  treatwell: "bg-blue-50",
  calls:     "bg-green-50",
};

// ─── Theme maps ───────────────────────────────────────────────────────────────

const THEMES = {
  red: {
    bg: "bg-red-50",
    eyebrow: "text-red-800",
    number: "text-red-700",
    dot: "bg-red-500",
    cta: "bg-gray-900 hover:bg-black text-white",
  },
  amber: {
    bg: "bg-amber-50",
    eyebrow: "text-amber-800",
    number: "text-amber-700",
    dot: "bg-amber-400",
    cta: "bg-gray-900 hover:bg-black text-white",
  },
  blue: {
    bg: "bg-blue-50",
    eyebrow: "text-blue-800",
    number: "text-blue-700",
    dot: "bg-blue-400",
    cta: "bg-gray-900 hover:bg-black text-white",
  },
  green: {
    bg: "bg-green-50",
    eyebrow: "text-green-800",
    number: "text-green-700",
    dot: "bg-green-600",
    cta: "bg-gray-900 hover:bg-black text-white",
  },
};

const resultThemes = {
  invisible: "red",
  broken:    "amber",
  treatwell: "blue",
  calls:     "green",
};

const lossNumbers = {
  invisible: "CHF 960",
  broken:    "CHF 480",
  treatwell: "15–20%",
  calls:     "CHF 1,440",
};

// ─── Helper: bold certain substrings ─────────────────────────────────────────

function HighlightText({ text, highlights }) {
  if (!highlights?.length) return <span>{text}</span>;
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return (
    <>
      {parts.map((part, i) =>
        highlights.includes(part) ? (
          <strong key={i} className="font-medium text-gray-900">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

const mathHighlightTerms = {
  invisible: ["CHF 1,800 once", "CHF 1.800 einmalig"],
  broken:    ["CHF 120"],
  treatwell: ["CHF 1,800 once", "CHF 1.800 einmalig"],
  calls:     ["CHF 120", "CHF 600 once", "CHF 600 einmalig"],
};

// ─── Result panel ─────────────────────────────────────────────────────────────

function ResultPanel({ resultId, onReset, t }) {
  const theme = resultThemes[resultId];
  const th = THEMES[theme];
  const lossNum = lossNumbers[resultId];
  const prefix = `audit.${resultId}`;
  const mathText = t(`${prefix}.math`);
  const highlights = mathHighlightTerms[resultId] || [];

  const handleCta = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`border-t border-gray-100 ${th.bg}`}
      style={{ animation: "fadeSlideIn 0.25s ease both" }}
    >
      <div className="px-6 py-5">
        <p className={`text-xs font-semibold tracking-widest uppercase mb-2.5 ${th.eyebrow}`}>
          {t(`${prefix}.eyebrow`)}
        </p>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          {t(`${prefix}.diagnosis`)}
        </p>
        <div className="flex items-baseline gap-2 mb-1.5">
          <span className={`text-4xl font-semibold leading-none ${th.number}`}>
            {lossNum}
          </span>
          <span className="text-xs text-gray-500 max-w-[160px] leading-snug">
            {t(`${prefix}.lossUnit`)}
          </span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-5">
          <HighlightText text={mathText} highlights={highlights} />
        </p>
        <div className="space-y-2.5 mb-5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-start gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${th.dot}`} />
              <p className="text-sm text-gray-700 leading-snug">{t(`${prefix}.b${n}`)}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleCta}
          className={`w-full py-3.5 rounded-xl text-sm font-medium transition-colors duration-150 mb-2.5 ${th.cta}`}
        >
          {t('audit.cta.text')}
        </button>
        <p className="text-xs text-gray-400 text-center">
          {t('audit.disclaimer')}
        </p>
      </div>
      <button
        onClick={onReset}
        className="w-full py-3 border-t border-gray-100 text-xs text-gray-400 hover:text-gray-600 hover:bg-white transition-colors duration-150"
      >
        {t('audit.reset')}
      </button>
    </div>
  );
}

// ─── Option row ───────────────────────────────────────────────────────────────

function OptionRow({ optId, selected, onClick, t }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left
        border transition-all duration-150 group
        ${selected
          ? "border-gray-900 bg-gray-50"
          : "border-transparent hover:bg-gray-50 hover:border-gray-200"
        }
      `}
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${iconColors[optId]}`}>
        {icons[optId]}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 leading-snug">
          {t(`audit.opt.${optId}.title`)}
        </p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
          {t(`audit.opt.${optId}.sub`)}
        </p>
      </div>
      <svg
        className={`w-3.5 h-3.5 text-gray-300 flex-shrink-0 transition-opacity duration-150 ${
          selected ? "opacity-100 text-gray-900" : "opacity-0 group-hover:opacity-60"
        }`}
        viewBox="0 0 14 14"
        fill="none"
      >
        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const OPT_IDS = ["invisible", "broken", "treatwell", "calls"];

export default function HeroAudit() {
  const [selected, setSelected] = useState(null);
  const { t } = useLanguage();

  const handleSelect = (id) => {
    setSelected(id);
    setTimeout(() => {
      document.getElementById("lumaflow-result")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleReset = () => {
    setSelected(null);
    document.getElementById("lumaflow-audit")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        id="lumaflow-audit"
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
      >
        <div className="px-6 pt-5 pb-4 border-b border-gray-100">
          <p className="text-[15px] font-medium text-gray-900 leading-snug">
            {t('audit.header')}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {t('audit.subhead')}
          </p>
        </div>

        <div className="px-3 py-3 space-y-1">
          {OPT_IDS.map((id) => (
            <OptionRow
              key={id}
              optId={id}
              selected={selected === id}
              onClick={() => handleSelect(id)}
              t={t}
            />
          ))}
        </div>

        {selected && (
          <div id="lumaflow-result">
            <ResultPanel resultId={selected} onReset={handleReset} t={t} />
          </div>
        )}
      </div>
    </>
  );
}
