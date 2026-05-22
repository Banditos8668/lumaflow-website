import { useLanguage } from '../context/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [0,1,2,3].map((i, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title: t(`step.${i}.title`),
    description: t(`step.${i}.desc`),
  }));

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
        <h2 className="lf-h2" style={{ marginBottom: 52, maxWidth: 400 }}>
          {t('how.headline')}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <div key={step.number} style={{ position: 'relative' }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                backgroundColor: i === 0 ? 'var(--lf-primary)' : 'var(--lf-surface)',
                border: i === 0 ? 'none' : '1.5px solid var(--lf-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700,
                color: i === 0 ? '#fff' : 'var(--lf-secondary)',
                flexShrink: 0,
                marginBottom: 14,
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 600, color: 'var(--lf-primary)',
                marginBottom: 8, letterSpacing: '-0.01em',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 15, lineHeight: 1.6, color: 'var(--lf-secondary)', margin: 0,
              }}>
                {step.description}
              </p>
            </div>
          ))}
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
