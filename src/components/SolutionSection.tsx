import { useLanguage } from '../context/LanguageContext';

const CARDS = [
  {
    key: 'solution.card1',
    titleKey: 'solution.card1.title',
    copyKey: 'solution.card1.copy',
    icon: '→',
  },
  {
    key: 'solution.card2',
    titleKey: 'solution.card2.title',
    copyKey: 'solution.card2.copy',
    icon: '◎',
  },
  {
    key: 'solution.card3',
    titleKey: 'solution.card3.title',
    copyKey: 'solution.card3.copy',
    icon: '↺',
  },
];

export default function SolutionSection() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <style>{`
        @media (max-width: 768px) {
          .lf-solution-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .lf-solution-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="lf-container">
        <p className="lf-label" style={{ marginBottom: 16 }}>
          {t('solution.eyebrow')}
        </p>
        <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 600 }}>
          {t('solution.headline')}
        </h2>
        <p className="lf-body" style={{ maxWidth: 600, marginBottom: 48 }}>
          {t('solution.subline')}
        </p>

        <div
          className="lf-solution-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
        >
          {CARDS.map((card) => (
            <div
              key={card.key}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid var(--lf-border)',
                borderRadius: 16,
                padding: 28,
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: 'var(--lf-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                fontSize: 16,
                color: 'var(--lf-primary)',
                flexShrink: 0,
              }}>
                {card.icon}
              </div>

              <h3 style={{
                fontSize: 17,
                fontWeight: 600,
                color: 'var(--lf-primary)',
                marginBottom: 8,
                letterSpacing: '-0.01em',
              }}>
                {t(card.titleKey)}
              </h3>
              <p style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: 'var(--lf-secondary)',
                margin: 0,
              }}>
                {t(card.copyKey)}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#contact" className="btn-primary lf-btn-mobile-full" style={{ fontSize: 15, padding: '14px 24px' }}>
            {t('solution.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
