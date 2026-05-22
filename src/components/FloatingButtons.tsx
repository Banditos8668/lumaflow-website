import { useState, useEffect } from 'react';

// TODO: replace with real WhatsApp number e.g. '41791234567'
const WA_NUMBER = '41000000000';
const WA_MESSAGE = encodeURIComponent('Hi, I would like to get a free audit for my business.');
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <style>{`
        .lf-float-wrap {
          position: fixed;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 49;
          /* Desktop: no sticky bar below */
          right: 24px;
          bottom: 32px;
        }
        @media (max-width: 768px) {
          .lf-float-wrap {
            right: 16px;
            /* Above sticky bar: sticky bar ~74px + safe area + 12px gap */
            bottom: max(90px, calc(74px + env(safe-area-inset-bottom) + 12px));
          }
        }

        .lf-float-wa {
          transition: background-color 0.18s;
        }
        .lf-float-wa:hover {
          background-color: #1648C0 !important;
        }

        .lf-float-top:hover {
          border-color: #B8B8B8 !important;
          background-color: var(--lf-subtle) !important;
        }
      `}</style>

      <div className="lf-float-wrap">
        {/* Back to top — fades in after scrolling down */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="lf-float-top"
          style={{
            width: 44, height: 44, borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1.5px solid var(--lf-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
            opacity: showTop ? 1 : 0,
            transform: showTop ? 'translateY(0)' : 'translateY(8px)',
            pointerEvents: showTop ? 'auto' : 'none',
            transition: 'opacity 0.2s, transform 0.2s',
            color: 'var(--lf-secondary)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth={2.5}
            strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* WhatsApp — always visible after page load */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="lf-float-wa"
          style={{
            width: 44, height: 44, borderRadius: '50%',
            backgroundColor: '#1A56DB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(26,86,219,0.35)',
            flexShrink: 0,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.524 5.835L0 24l6.336-1.497A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.875 9.875 0 0 1-5.03-1.376l-.361-.214-3.761.888.936-3.665-.236-.374A9.868 9.868 0 0 1 2.118 12C2.118 6.54 6.54 2.118 12 2.118c5.46 0 9.882 4.422 9.882 9.882 0 5.46-4.422 9.882-9.882 9.882z" />
          </svg>
        </a>
      </div>
    </>
  );
}
