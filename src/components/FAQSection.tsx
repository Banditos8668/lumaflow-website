import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ_COUNT = 9;

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: t(`faq.${i}.q`),
    answer:   t(`faq.${i}.a`),
  }));

  return (
    <section id="faq" className="lf-section" style={{ backgroundColor: '#FAF6F0' }}>
      <div className="lf-container">
        <p className="lf-label" style={{ marginBottom: 16 }}>{t('faq.eyebrow')}</p>
        <h2 className="lf-h2" style={{ marginBottom: 52, maxWidth: 480 }}>
          {t('faq.headline')}
        </h2>

        <div className="lf-reading" style={{ maxWidth: 720 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--lf-border)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none',
                  cursor: 'pointer', padding: '20px 0',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 16,
                }}
                aria-expanded={openIndex === i}
              >
                <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--lf-primary)', lineHeight: 1.4 }}>
                  {faq.question}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    color: 'var(--lf-secondary)', flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: openIndex === i ? 'rotate(180deg)' : 'none',
                  }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openIndex === i && (
                <div style={{ paddingBottom: 20 }}>
                  <p style={{ fontSize: 15, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.65 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
