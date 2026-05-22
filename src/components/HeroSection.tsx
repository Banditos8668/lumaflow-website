import { useLanguage } from '../context/LanguageContext';
import HeroAudit from './HeroAudit';


export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .lf-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .lf-hero-audit-col {
            width: 100% !important;
          }
          .lf-hero-ctas {
            flex-direction: column !important;
          }
          .lf-hero-ctas a {
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>

      <section id="home" style={{
        paddingTop: 'clamp(96px, 12vw, 148px)',
        paddingBottom: 'clamp(64px, 8vw, 112px)',
        backgroundColor: 'var(--lf-bg)',
        overflow: 'hidden',
      }}>
        <div className="lf-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 'clamp(40px, 6vw, 72px)',
            alignItems: 'start',
          }} className="lf-hero-grid">

            {/* Left: text */}
            <div>
              {/* Top badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {[t('hero.badge.1'), t('hero.badge.2'), t('hero.badge.3')].map((badge) => (
                  <span key={badge} style={{
                    fontSize: 11, fontWeight: 500, color: 'var(--lf-secondary)',
                    backgroundColor: 'var(--lf-surface)', border: '1px solid var(--lf-border)',
                    borderRadius: 100, padding: '4px 11px', letterSpacing: '0.02em',
                  }}>
                    {badge}
                  </span>
                ))}
              </div>

              {/* Headline */}
              <h1 className="lf-h1" style={{ marginBottom: 20 }}>
                {t('hero.headline')}
              </h1>

              {/* Subline */}
              <p style={{
                fontSize: 18, lineHeight: 1.65, color: 'var(--lf-secondary)',
                marginBottom: 36, maxWidth: 520,
              }}>
                {t('hero.subline')}
              </p>

              {/* CTA buttons */}
              <div className="lf-hero-ctas" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: '#1A56DB', color: '#fff',
                  fontSize: 15, fontWeight: 500, padding: '14px 24px',
                  borderRadius: 12, textDecoration: 'none', minHeight: 50,
                  transition: 'background-color 0.15s, transform 0.1s',
                  border: 'none', cursor: 'pointer',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1648C0'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1A56DB'; }}
                  onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.99)'; }}
                  onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
                  {t('hero.cta.primary')}
                </a>
                <a href="#demo" className="btn-secondary"
                  style={{ fontSize: 15, padding: '14px 24px', minHeight: 50 }}>
                  {t('hero.cta.secondary')}
                </a>
              </div>

              {/* Besiana intro */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '9999px', flexShrink: 0,
                  overflow: 'hidden',
                  border: '2px solid #e5e7eb',
                }}>
                  <img
                    src="/images/besiana-photo.jpg"
                    alt="Besiana, local booking specialist, Zürich"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--lf-primary)', lineHeight: 1.4 }}>
                    {t('contact.besiana.name')}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--lf-secondary)', lineHeight: 1.4 }}>
                    {t('contact.besiana.role')}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--lf-secondary)', lineHeight: 1.4 }}>
                    {t('contact.besiana.trust')}
                  </span>
                </div>
              </div>

              {/* 3-column callouts */}
              <div style={{
                paddingTop: 24, borderTop: '1px solid var(--lf-border)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
              }} className="lf-hero-callouts">
                {[t('hero.callout.1'), t('hero.callout.2'), t('hero.callout.3')].map((text) => (
                  <p key={text} style={{
                    fontSize: 13, color: 'var(--lf-secondary)',
                    lineHeight: 1.5, margin: 0,
                  }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: HeroAudit widget */}
            <div className="lf-hero-audit-col" style={{
              paddingTop: 8,
            }}>
              <HeroAudit />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
