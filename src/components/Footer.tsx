import { Fragment } from 'react';
import { useLanguage, type Lang } from '../context/LanguageContext';

const footerLinks = [
  { key: 'footer.link.home',      href: '#home' },
  { key: 'footer.link.solutions', href: '#solutions' },
  { key: 'footer.link.liveDemo',  href: '#demo' },
  { key: 'footer.link.pricing',   href: '#pricing' },
  { key: 'footer.link.faq',       href: '#faq' },
  { key: 'footer.link.contact',   href: '#contact' },
];

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      {(['en', 'de'] as Lang[]).map((l, i) => (
        <Fragment key={l}>
          {i > 0 && (
            <span style={{ color: 'var(--lf-border)', fontSize: 12, lineHeight: 1, userSelect: 'none' }}>|</span>
          )}
          <button onClick={() => setLang(l)} style={{
            background: 'none',
            color: lang === l ? 'var(--lf-primary)' : 'var(--lf-secondary)',
            border: 'none', cursor: 'pointer',
            fontSize: 13, fontWeight: 600, letterSpacing: '0.04em',
            padding: '4px 6px', textTransform: 'uppercase',
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

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
    <style>{`
      @media (max-width: 768px) {
        .lf-footer-cta {
          width: 100% !important;
          box-sizing: border-box !important;
          text-align: center !important;
        }
      }
    `}</style>
    <footer style={{
      backgroundColor: 'var(--lf-bg)',
      borderTop: '1px solid var(--lf-border)',
      padding: '48px 0',
    }}>
      <div className="lf-container">
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 32,
          justifyContent: 'space-between', alignItems: 'flex-start',
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <a href="#" style={{ display: 'inline-block', lineHeight: 0, marginBottom: 10 }}>
              <img
                src="/images/lumaflow-logo.png"
                alt="LumaFlow"
                style={{ height: 28, width: 'auto', objectFit: 'contain', display: 'block' }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = 'none';
                  const span = document.createElement('span');
                  span.textContent = 'LumaFlow';
                  span.style.cssText = 'font-weight:600;font-size:17px;color:var(--lf-primary);letter-spacing:-0.02em;display:block;';
                  el.parentElement!.appendChild(span);
                }}
              />
            </a>
            <p style={{ fontSize: 15, color: 'var(--lf-secondary)', lineHeight: 1.6, margin: 0 }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} style={{
                fontSize: 15, color: 'var(--lf-secondary)', textDecoration: 'none',
                padding: '4px 10px', borderRadius: 6, transition: 'color 0.15s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--lf-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--lf-secondary)'; }}>
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--lf-secondary)', marginBottom: 10 }}>
              {t('footer.contact.label')}
            </p>
            <a href="mailto:hello@lumaflow.ch" style={{
              fontSize: 14, color: 'var(--lf-primary)', textDecoration: 'none', display: 'block', marginBottom: 6,
            }}>
              hello@lumaflow.ch
            </a>
            <a href="#quick-check" className="btn-primary lf-footer-cta"
              style={{ fontSize: 13, padding: '9px 16px', minHeight: 38, marginTop: 12, borderRadius: 8 }}>
              {t('footer.cta')}
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--lf-border)', paddingTop: 24,
          display: 'flex', flexWrap: 'wrap', gap: 16,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <p style={{ fontSize: 14, color: 'var(--lf-secondary)', margin: 0 }}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <LangSwitcher lang={lang} setLang={setLang} />
          <p style={{ fontSize: 14, color: 'var(--lf-secondary)', margin: 0 }}>
            {t('footer.byline')}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
