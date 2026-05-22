import { useState, useEffect, Fragment } from 'react';
import { useLanguage, type Lang } from '../context/LanguageContext';

const navKeys = [
  { key: 'nav.home',       href: '#home' },
  { key: 'nav.solutions',  href: '#solutions' },
  { key: 'nav.liveDemo',   href: '#demo' },
  { key: 'nav.pricing',    href: '#pricing' },
  { key: 'nav.faq',        href: '#faq' },
  { key: 'nav.contact',    href: '#contact' },
];

const mobileNavKeys = [
  { key: 'nav.home',       href: '#home' },
  { key: 'nav.solutions',  href: '#solutions' },
  { key: 'nav.liveDemo',   href: '#demo' },
  { key: 'nav.pricing',    href: '#pricing' },
  { key: 'nav.faq',        href: '#faq' },
  { key: 'nav.contact',    href: '#contact' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const { lang, setLang, t }      = useLanguage();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  function closeMenu() { setMenuOpen(false); }

  return (
    <>
      <style>{`
        /* Hamburger visible only on mobile — matches lf-desktop-only breakpoint exactly */
        .lf-hamburger { display: flex; }
        @media (min-width: 768px) {
          .lf-hamburger { display: none !important; }
        }

        /* Mobile overlay menu */
        .lf-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: #fff;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: auto;
          /* Slide + fade in */
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease;
        }
        .lf-mobile-overlay.lf-overlay-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Desktop: hide mobile CTA pill */
        @media (min-width: 769px) {
          .lf-mobile-cta-pill { display: none !important; }
        }
      `}</style>

      {/* ============ HEADER ============ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div className="lf-container" style={{ display: 'flex', alignItems: 'center', height: 64 }}>

          {/* Logo */}
          <a href="#" onClick={closeMenu} style={{ flexShrink: 0, textDecoration: 'none', lineHeight: 0 }}>
            <img
              src="/images/lumaflow-logo.png"
              alt="LumaFlow"
              style={{
                height: 32,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                // Fallback to text if image not found
                const parent = (e.currentTarget as HTMLImageElement).parentElement!;
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const span = document.createElement('span');
                span.textContent = 'LumaFlow';
                span.style.cssText = 'font-weight:600;font-size:18px;color:var(--lf-primary);letter-spacing:-0.02em;';
                parent.appendChild(span);
              }}
            />
          </a>

          {/* Desktop nav links */}
          <nav className="lf-desktop-only" style={{ alignItems: 'center', gap: 2, marginLeft: 32, flex: 1 }}>
            {navKeys.map((link) => (
              <a key={link.key} href={link.href} style={{
                fontSize: 14, fontWeight: 500, color: 'var(--lf-secondary)',
                textDecoration: 'none', padding: '6px 12px', borderRadius: 8,
                transition: 'color 0.15s, background-color 0.15s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--lf-primary)';
                  e.currentTarget.style.backgroundColor = 'var(--lf-subtle)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--lf-secondary)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}>
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Desktop right: lang switcher + CTA */}
          <div className="lf-desktop-only" style={{ marginLeft: 'auto', alignItems: 'center', gap: 24 }}>
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href="#contact" className="btn-primary"
              style={{ fontSize: 14, padding: '10px 18px', minHeight: 40, borderRadius: 10 }}>
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile right: hamburger */}
          <button
            className="lf-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              marginLeft: 'auto',
              width: 40, height: 40, borderRadius: 8,
              background: 'transparent', border: 'none',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 5, cursor: 'pointer', padding: 0, flexShrink: 0,
            }}
          >
            {/* Three bars / X */}
            <span style={{
              display: 'block', width: 22, height: 2,
              backgroundColor: 'var(--lf-primary)', borderRadius: 2,
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              backgroundColor: 'var(--lf-primary)', borderRadius: 2,
              transition: 'opacity 0.15s',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: 22, height: 2,
              backgroundColor: 'var(--lf-primary)', borderRadius: 2,
              transition: 'transform 0.2s, opacity 0.2s',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }} />
          </button>

        </div>
      </header>

      {/* ============ MOBILE OVERLAY ============ */}
      <div
        className={`lf-mobile-overlay${menuOpen ? ' lf-overlay-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64, paddingLeft: 20, paddingRight: 12,
          borderBottom: '1px solid var(--lf-border)',
          flexShrink: 0,
        }}>
          <a href="#" onClick={closeMenu} style={{ textDecoration: 'none', lineHeight: 0 }}>
            <img
              src="/images/lumaflow-logo.png"
              alt="LumaFlow"
              style={{ height: 28, width: 'auto', objectFit: 'contain', display: 'block' }}
              onError={(e) => {
                const parent = (e.currentTarget as HTMLImageElement).parentElement!;
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const span = document.createElement('span');
                span.textContent = 'LumaFlow';
                span.style.cssText = 'font-weight:600;font-size:18px;color:var(--lf-primary);letter-spacing:-0.02em;';
                parent.appendChild(span);
              }}
            />
          </a>
          {/* Close button */}
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            style={{
              width: 40, height: 40, borderRadius: 8,
              background: 'var(--lf-subtle)', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', flexShrink: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="var(--lf-primary)" strokeWidth={2.5}
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 20px' }}>
          {mobileNavKeys.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: 18, fontWeight: 500, color: 'var(--lf-primary)',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid var(--lf-border)',
                display: 'block',
              }}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Bottom area: lang switcher + CTA + email */}
        <div style={{
          padding: '20px 20px',
          paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
          borderTop: '1px solid var(--lf-border)',
          flexShrink: 0,
        }}>
          {/* Language switcher in mobile overlay */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%', backgroundColor: '#1A56DB', color: '#fff',
              fontSize: 16, fontWeight: 600, padding: '15px 20px',
              borderRadius: 12, textDecoration: 'none', minHeight: 52,
              boxSizing: 'border-box', marginBottom: 16,
            }}
          >
            {t('nav.cta')}
          </a>
          <a
            href="mailto:hello@lumaflow.ch"
            style={{
              display: 'block', textAlign: 'center',
              fontSize: 14, color: 'var(--lf-secondary)', textDecoration: 'none',
            }}
          >
            hello@lumaflow.ch
          </a>
        </div>
      </div>
    </>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    }}>
      {(['en', 'de'] as Lang[]).map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span style={{
              color: 'var(--lf-border)',
              fontSize: 12,
              lineHeight: 1,
              userSelect: 'none',
            }}>|</span>
          )}
          <button onClick={() => setLang(l)} style={{
            background: 'none',
            color: lang === l ? 'var(--lf-primary)' : 'var(--lf-secondary)',
            border: 'none',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.04em',
            padding: '4px 6px',
            textTransform: 'uppercase',
            opacity: lang === l ? 1 : 0.5,
            transition: 'color 0.15s, opacity 0.15s',
          }}>
            {l}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
