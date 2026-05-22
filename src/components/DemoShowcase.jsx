import { useLanguage } from '../context/LanguageContext';

const DEMO_URL = 'https://maisonlumiere-demo.online/';

export default function DemoShowcase() {
  const { t } = useLanguage();

  return (
    <section id="demo" style={{
      backgroundColor: '#FAF6F0',
      paddingTop: 'clamp(48px, 8vw, 80px)',
      paddingBottom: 'clamp(48px, 8vw, 80px)',
      overflow: 'hidden',
    }}>
      <style>{`
        .lf-browser-outer {
          max-width: 960px;
          margin: 0 auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 20px 80px rgba(0,0,0,0.12),
            0 0 0 1px rgba(0,0,0,0.08);
        }
        .lf-browser-chrome {
          background: #f0f0f0;
          height: 44px;
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 10px;
          border-bottom: 1px solid #ddd;
          flex-shrink: 0;
        }
        .lf-browser-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .lf-browser-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .lf-browser-urlbar {
          background: white;
          border-radius: 6px;
          padding: 5px 14px;
          font-size: 12px;
          color: #555;
          flex: 1;
          max-width: 360px;
          margin: 0 auto;
          text-align: center;
          font-family: inherit;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.4;
        }
        .lf-browser-screen {
          background: white;
          height: 540px;
          overflow: hidden;
          display: block;
        }
        .lf-browser-screen iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        @media (max-width: 768px) {
          .lf-browser-chrome  { height: 36px; padding: 0 12px; gap: 8px; }
          .lf-browser-dot     { width: 10px; height: 10px; }
          .lf-browser-screen  { height: 360px; }
          .lf-browser-urlbar  { font-size: 11px; padding: 4px 10px; }
        }
        @media (max-width: 480px) {
          .lf-browser-screen { height: 280px; }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 clamp(16px, 5vw, 40px)' }}>

        {/* Section header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: '#999',
            marginBottom: 12,
          }}>
            {t('demo.eyebrow')}
          </p>
          <h2 style={{
            fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 600,
            color: '#171717', lineHeight: 1.15, letterSpacing: '-0.02em',
            marginBottom: 12, maxWidth: 560,
          }}>
            {t('demo.headline')}
          </h2>
          <p style={{ fontSize: 15, color: '#666666', lineHeight: 1.6, maxWidth: 560 }}>
            {t('demo.subline')}
          </p>
        </div>

        {/* Browser chrome mockup */}
        <div className="lf-browser-outer">
          {/* Chrome bar */}
          <div className="lf-browser-chrome">
            <div className="lf-browser-dots">
              <div className="lf-browser-dot" style={{ backgroundColor: '#FF5F57' }} />
              <div className="lf-browser-dot" style={{ backgroundColor: '#FFBD2E' }} />
              <div className="lf-browser-dot" style={{ backgroundColor: '#28C840' }} />
            </div>
            <div className="lf-browser-urlbar">
              🔒 maisonlumiere-demo.online
            </div>
          </div>
          {/* Screen */}
          <div className="lf-browser-screen">
            <iframe
              src={DEMO_URL}
              title="Maison Lumière Beauty Studio Demo"
              loading="lazy"
            />
          </div>
        </div>

        {/* Caption + CTA */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{
            fontSize: 12, color: '#aaaaaa', margin: 0, lineHeight: 1.6,
            maxWidth: 600, marginLeft: 'auto', marginRight: 'auto',
          }}>
            {t('demo.caption')}
          </p>
          <div style={{ marginTop: 20 }}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lf-btn-mobile-full"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                backgroundColor: 'transparent',
                color: '#171717',
                fontSize: 14,
                fontWeight: 500,
                padding: '11px 20px',
                borderRadius: 10,
                border: '1.5px solid #E7E7E7',
                textDecoration: 'none',
                transition: 'border-color 0.15s, background-color 0.15s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#B8B8B8';
                e.currentTarget.style.backgroundColor = '#F4F4F4';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E7E7E7';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {t('demo.cta')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
