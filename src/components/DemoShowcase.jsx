import { useLanguage } from "../context/LanguageContext";

// TODO: Replace with final demo URL if needed.
const DEMO_URL = "https://maisonlumiere-demo.online/";

// ─── Phone mockup geometry ────────────────────────────────────────────────────
const PHONE_W   = 280;
const PHONE_H   = 575;
const FRAME     = 11;
const SCREEN_W  = PHONE_W - FRAME * 2;   // 258 — visible screen width
const SCREEN_H  = PHONE_H - FRAME * 2;   // 553 — visible screen height
const DI_AREA   = 50;                    // dynamic island reserved height (top)
const VIEWPORT  = 390;                   // iPhone viewport width fed to iframe
const SCALE     = SCREEN_W / VIEWPORT;   // 258/390 ≈ 0.662

// Iframe is rendered at IFRAME_TALL px (unscaled).
// Visual height = IFRAME_TALL × SCALE ≈ 1985 px.
// Scroll distance inside phone ≈ 1985 − 503 = 1482 px — enough for a full page.
const IFRAME_TALL = 3000;

// Layout container height = visual height of the scaled iframe.
// This is what tells the scroll container how much content there is to scroll.
const LAYOUT_H = Math.round(IFRAME_TALL * SCALE);   // ≈ 1985 px
// ─────────────────────────────────────────────────────────────────────────────

export default function DemoShowcase() {
  const { t } = useLanguage();

  return (
    <section id="demo" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <style>{`
        .demo-two-col {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
        }
        .demo-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .demo-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--lf-secondary);
          line-height: 1.5;
        }
        .demo-action-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          background-color: #1A56DB;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          border-radius: 12px;
          text-decoration: none;
          transition: background-color 0.15s, transform 0.1s;
        }
        .demo-action-cta:hover  { background-color: #1648C0; }
        .demo-action-cta:active { transform: scale(0.99); }

        /*
          Scrollable phone screen.
          overflow: hidden on the parent screen glass clips the rounded corners.
          overflow-y: auto here creates an independent scroll context inside.
          Scrollbar is hidden visually but scroll remains functional.
        */
        .demo-screen-scroll {
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .demo-screen-scroll::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .demo-two-col {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .demo-phone-col {
            display: flex;
            justify-content: center;
          }
          .demo-action-cta {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="lf-container">
        <div className="demo-two-col">

          {/* ── Left: text content ── */}
          <div>
            <p className="lf-label" style={{ marginBottom: 16 }}>
              {t('demo.eyebrow')}
            </p>
            <h2 className="lf-h2" style={{ marginBottom: 16, maxWidth: 440 }}>
              {t('demo.headline')}
            </h2>
            <p style={{ fontSize: 15, color: 'var(--lf-secondary)', lineHeight: 1.65, marginBottom: 28, maxWidth: 420 }}>
              {t('demo.subline')}
            </p>

            <ul className="demo-bullets">
              {[1, 2, 3].map((n) => (
                <li key={n}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                    <circle cx="9" cy="9" r="9" fill="#D1FAE5" />
                    <path d="M5.5 9l2.5 2.5 5-5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{t(`demo.bullet.${n}`)}</span>
                </li>
              ))}
            </ul>

            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-action-cta"
            >
              {t('demo.cta')} ↗
            </a>

            <p style={{ fontSize: 12, color: 'var(--lf-secondary)', marginTop: 16, opacity: 0.55, lineHeight: 1.5 }}>
              {t('demo.note')}
            </p>
          </div>

          {/* ── Right: iPhone mockup ── */}
          <div className="demo-phone-col">
            <div style={{
              position: 'relative',
              width: PHONE_W,
              height: PHONE_H,
              background: 'linear-gradient(150deg, #3a3a3c 0%, #1c1c1e 100%)',
              borderRadius: 44,
              padding: FRAME,
              boxSizing: 'border-box',
              boxShadow: [
                '0 0 0 1px rgba(255,255,255,0.10)',
                '0 2px 4px rgba(0,0,0,0.40)',
                '0 20px 60px rgba(0,0,0,0.28)',
              ].join(', '),
              flexShrink: 0,
            }}>

              {/* Volume buttons — left side */}
              {[72, 116].map((top) => (
                <div key={top} style={{
                  position: 'absolute', left: -3, top,
                  width: 3, height: 28,
                  background: 'linear-gradient(180deg, #48484a, #3a3a3c)',
                  borderRadius: '2px 0 0 2px',
                }} />
              ))}

              {/* Power button — right side */}
              <div style={{
                position: 'absolute', right: -3, top: 92,
                width: 3, height: 50,
                background: 'linear-gradient(180deg, #48484a, #3a3a3c)',
                borderRadius: '0 2px 2px 0',
              }} />

              {/* Screen glass — overflow: hidden clips to rounded corners */}
              <div style={{
                width: '100%',
                height: '100%',
                background: '#ffffff',
                borderRadius: 34,
                overflow: 'hidden',
                position: 'relative',
              }}>

                {/*
                  Dynamic Island — decorative only.
                  pointerEvents: none so it does not block scrolling beneath it.
                  zIndex: 10 so it floats above scrolled content.
                */}
                <div style={{
                  position: 'absolute',
                  top: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 110,
                  height: 30,
                  background: '#000',
                  borderRadius: 15,
                  zIndex: 10,
                  pointerEvents: 'none',
                }} />

                {/*
                  Scroll container — this is what the user scrolls.
                  Positioned below the dynamic island area.
                  overflow: hidden on the parent (screen glass) clips the
                  rounded corners; this child can still scroll independently.
                */}
                <div
                  className="demo-screen-scroll"
                  style={{
                    position: 'absolute',
                    top: DI_AREA,
                    left: 0,
                    width: SCREEN_W,
                    height: SCREEN_H - DI_AREA,  // 503 px
                  }}
                >
                  {/*
                    Layout container.
                    Height = IFRAME_TALL × SCALE (the visual height of the scaled
                    iframe). This tells the scroll container the total scrollable
                    distance without relying on the iframe's layout size, which
                    transform: scale() does not change.
                  */}
                  <div style={{
                    position: 'relative',
                    width: SCREEN_W,
                    height: LAYOUT_H,   // ≈ 1985 px
                  }}>
                    {/*
                      iframe is absolutely positioned so it does not contribute
                      to the layout container's height (that is set explicitly
                      above). pointerEvents: none prevents the iframe from
                      capturing scroll events — the scroll container above
                      handles all scrolling instead, which is reliable across
                      all browsers for cross-origin iframes.
                    */}
                    <iframe
                      src={DEMO_URL}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: VIEWPORT,
                        height: IFRAME_TALL,
                        border: 'none',
                        display: 'block',
                        transform: `scale(${SCALE})`,
                        transformOrigin: 'top left',
                        pointerEvents: 'none',
                      }}
                      title="Live demo preview"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
