import { useLanguage } from '../context/LanguageContext';

export default function QuickCheckSection() {
  const { t } = useLanguage();

  const leakItems = [1,2,3,4,5,6].map(n => t(`quickcheck.item.${n}`));

  return (
    <section id="quick-check" className="lf-section" style={{ backgroundColor: '#FAF6F0' }}>
      <div className="lf-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56,
          alignItems: 'start',
        }}>

          {/* Left: intro */}
          <div>
            <p className="lf-label" style={{ marginBottom: 16 }}>{t('quickcheck.eyebrow')}</p>
            <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 420 }}>
              {t('quickcheck.headline')}
            </h2>
            <p className="lf-body" style={{ marginBottom: 32 }}>
              {t('quickcheck.body')}
            </p>
          </div>

          {/* Right: checklist */}
          <div style={{
            backgroundColor: 'var(--lf-surface)',
            border: '1.5px solid var(--lf-border)',
            borderRadius: 18,
            overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            <div style={{
              padding: '16px 24px',
              borderBottom: '1px solid var(--lf-border)',
              backgroundColor: 'var(--lf-subtle)',
            }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--lf-primary)', margin: 0 }}>
                {t('quickcheck.card.title')}
              </p>
            </div>

            <div style={{ padding: '8px 0' }}>
              {leakItems.map((item, i) => (
                <div key={i} style={{
                  padding: '13px 24px',
                  borderBottom: i < leakItems.length - 1 ? '1px solid var(--lf-border)' : 'none',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: 5,
                    border: '1.5px solid var(--lf-border)',
                    backgroundColor: 'var(--lf-bg)',
                    flexShrink: 0, marginTop: 1,
                  }} />
                  <p style={{
                    fontSize: 13, fontWeight: 500, color: 'var(--lf-primary)',
                    margin: 0, lineHeight: 1.5,
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              padding: '20px 24px',
              borderTop: '1px solid var(--lf-border)',
              backgroundColor: 'var(--lf-subtle)',
            }}>
              <a href="#contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#1A56DB', color: '#fff',
                fontSize: 15, fontWeight: 600, padding: '12px 0',
                borderRadius: 10, textDecoration: 'none', minHeight: 46,
                transition: 'background-color 0.15s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1648C0'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1A56DB'; }}>
                {t('quickcheck.cta')}
              </a>
              <p style={{
                fontSize: 12, color: 'var(--lf-secondary)',
                textAlign: 'center', marginTop: 10, marginBottom: 0,
              }}>
                {t('quickcheck.microcopy')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
