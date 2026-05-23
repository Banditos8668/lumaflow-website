import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.css';
import { useLanguage } from '../context/LanguageContext';

const DEMO_URL = 'https://maisonlumiere-demo.online/';

export default function DemoShowcase() {
  const { t, lang } = useLanguage();

  // Step 1C: updated heading and subline — handled inline to stay within DemoShowcase.jsx only
  const demoHeadline = lang === 'de'
    ? 'So sieht ein Geschäft aus, das Buchungen nicht verliert.'
    : 'This is what a business looks like that does not lose bookings.';

  const demoSubline = lang === 'de'
    ? 'Scrolle durch die Demo. Echte Leistungen, echte Buchung, echtes Google-Setup.'
    : 'Scroll through the demo. Real services, real booking flow, real Google structure.';

  return (
    <section id="demo" style={{
      backgroundColor: '#FAF6F0',
      paddingTop: 'clamp(48px, 8vw, 80px)',
      paddingBottom: 'clamp(48px, 8vw, 80px)',
      overflow: 'hidden',
    }}>
      <style>{`
        /* Responsive visibility */
        .lf-demo-laptop { display: block; }
        .lf-demo-phone  { display: none; }
        @media (max-width: 767px) {
          .lf-demo-laptop { display: none; }
          .lf-demo-phone  { display: flex; }
        }
        /* Suppress the library's 500ms load-in transition */
        .lf-demo-laptop .marvel-device { transition: none !important; }
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
            {demoHeadline}
          </h2>
          <p style={{ fontSize: 15, color: '#666666', lineHeight: 1.6, maxWidth: 560 }}>
            {demoSubline}
          </p>
        </div>

        {/* ── DESKTOP: MacBook mockup (PATH B — react-device-frameset) ── */}
        {/*
          MacBook Pro device: 960×600px layout, keyboard base at top:680px (below body).
          zoom={0.895} → visual width ~860px (860/960), visual main body height ~537px.
          Keyboard visual range: ~608–644px from container top (after -32px shift).
          Container: maxWidth 860px, height 648px (body+gap+keyboard with clearance),
                     overflow hidden (clips 50px layout dead-space on each horizontal side).
          Inner flex: justifyContent center (centers 960px layout in 860px), marginTop -32px
                      (removes ~31.5px dead space at top from transform centering).
        */}
        <div className="lf-demo-laptop">
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            overflow: 'hidden',
            height: '648px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-32px' }}>
              <DeviceFrameset device="MacBook Pro" color="silver" zoom={0.895}>
                <iframe
                  src={DEMO_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block' }}
                  title="Maison Lumière Beauty Studio Demo"
                  loading="lazy"
                />
              </DeviceFrameset>
            </div>
          </div>
        </div>

        {/* ── MOBILE: Phone mockup ── */}
        {/*
          Shell: 260px wide, padding 14px 10px → inner screen 240px.
          Scale: 240 / 390 = 0.615 (transformOrigin top left).
          Screen container: 480px tall, overflow hidden → shows top 780px of demo page.
        */}
        <div className="lf-demo-phone" style={{ justifyContent: 'center', padding: '0 24px' }}>
          <div style={{ position: 'relative', width: '260px', flexShrink: 0 }}>

            {/* Outer phone shell */}
            <div style={{
              background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
              borderRadius: '44px',
              padding: '14px 10px',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 25px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(0,0,0,0.5)',
              position: 'relative',
            }}>

              {/* Dynamic Island notch */}
              <div style={{
                width: '90px',
                height: '26px',
                background: '#000',
                borderRadius: '13px',
                margin: '0 auto 10px',
                position: 'relative',
                zIndex: 3,
              }} />

              {/* Screen area */}
              <div style={{
                background: '#fff',
                borderRadius: '32px',
                overflow: 'hidden',
                height: '480px',
                position: 'relative',
              }}>
                {/* iframe at 390px viewport width, scaled to 240px display width */}
                <div style={{
                  width: '390px',
                  height: '844px',
                  transform: 'scale(0.615)',
                  transformOrigin: 'top left',
                  pointerEvents: 'auto',
                }}>
                  <iframe
                    src={DEMO_URL}
                    width="390"
                    height="844"
                    style={{ border: 'none', display: 'block' }}
                    title="Maison Lumière Mobile Demo"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Volume buttons left — decorative */}
              <div style={{ position: 'absolute', left: '-3px', top: '80px', width: '3px', height: '32px', background: '#3a3a3a', borderRadius: '2px 0 0 2px' }} />
              <div style={{ position: 'absolute', left: '-3px', top: '124px', width: '3px', height: '32px', background: '#3a3a3a', borderRadius: '2px 0 0 2px' }} />

              {/* Power button right — decorative */}
              <div style={{ position: 'absolute', right: '-3px', top: '100px', width: '3px', height: '56px', background: '#3a3a3a', borderRadius: '0 2px 2px 0' }} />

            </div>
          </div>
        </div>

        {/* Caption + CTA — outside both mockup wrappers, visible at all breakpoints */}
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
