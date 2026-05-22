import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function StickyMobileCTA() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="lf-mobile-only"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'var(--lf-surface)',
        borderTop: '1px solid var(--lf-border)',
        padding: '12px 16px',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <a
        href="#contact"
        className="btn-primary"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '100%', fontSize: 15, fontWeight: 500,
          padding: '14px 20px', minHeight: 50, borderRadius: 12,
          boxSizing: 'border-box',
        }}
      >
        {t('sticky.cta')}
      </a>
    </div>
  );
}
