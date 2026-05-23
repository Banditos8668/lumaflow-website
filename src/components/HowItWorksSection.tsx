import { useLanguage } from '../context/LanguageContext';

const steps = [1, 2, 3, 4, 5, 6] as const;
const isLast = (i: number) => i === 6;

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <style>{`
        @media (max-width: 768px) {
          .lf-hiw-cta-wrap {
            text-align: left !important;
          }
          .lf-hiw-cta-link {
            width: 100% !important;
            display: flex !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
      <div className="lf-container">
        <p className="lf-label" style={{ marginBottom: 16 }}>{t('how.eyebrow')}</p>
        <h2 className="lf-h2" style={{ marginBottom: 48, maxWidth: 400 }}>
          {t('how.headline')}
        </h2>

        {/* Vertical timeline */}
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {steps.map((num) => {
            const last = isLast(num);
            const accentColor = last ? '#059669' : 'var(--lf-primary)';
            const bgColor = last ? '#D1FAE5' : 'var(--lf-surface)';
            const borderColor = last ? '#6EE7B7' : 'var(--lf-border)';
            const textColor = last ? '#059669' : 'var(--lf-primary)';

            return (
              <div key={num} style={{ display: 'flex', gap: 20, position: 'relative' }}>
                {/* Left: number bubble + vertical connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    backgroundColor: bgColor,
                    border: `1.5px solid ${borderColor}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    color: accentColor,
                    flexShrink: 0,
                  }}>
                    {String(num).padStart(2, '0')}
                  </div>
                  {/* Connector line — hidden on last step */}
                  {!last && (
                    <div style={{
                      width: 1,
                      flex: 1,
                      minHeight: 24,
                      backgroundColor: 'var(--lf-border)',
                      margin: '4px 0',
                    }} />
                  )}
                </div>

                {/* Right: step content */}
                <div style={{ paddingBottom: last ? 0 : 28, paddingTop: 6 }}>
                  <p style={{
                    fontSize: 15, fontWeight: 600,
                    color: textColor,
                    margin: '0 0 4px',
                    letterSpacing: '-0.01em',
                  }}>
                    {t(`journey.${num}.name`)}
                  </p>
                  <p style={{
                    fontSize: 14, lineHeight: 1.55,
                    color: 'var(--lf-secondary)',
                    margin: 0,
                  }}>
                    {t(`journey.${num}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lf-hiw-cta-wrap" style={{ marginTop: 48, paddingTop: 36, borderTop: '1px solid var(--lf-border)', textAlign: 'center' }}>
          <a href="#contact" className="lf-hiw-cta-link lf-btn-mobile-full" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#1A56DB', color: '#fff',
            fontSize: 15, fontWeight: 500, padding: '14px 24px',
            borderRadius: 12, textDecoration: 'none', minHeight: 50,
            transition: 'background-color 0.15s, transform 0.1s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1648C0'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1A56DB'; }}
            onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.99)'; }}
            onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
            {t('how.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
