import type { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PhoneOffIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.68 13.31a16 16 0 003.41 2.6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.42 19.42 0 01-3.33-2.67m-2.67-3.34a19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 011.72 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9.91" />
    <line x1="23" y1="1" x2="1" y2="23" />
  </svg>
);
const SmartphoneXIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" />
  </svg>
);
const XCircleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);
const SearchOffIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="8" x2="14" y2="14" />
  </svg>
);
const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const MessageCheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /><polyline points="9 11 11 13 15 9" />
  </svg>
);
const SmartphoneOkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" /><polyline points="9 12 11 14 15 10" />
  </svg>
);
const CalendarCheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><polyline points="9 16 11 18 15 14" />
  </svg>
);
const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const beforeIcons: ReactNode[] = [
  <PhoneOffIcon key="1" />,
  <SearchOffIcon key="2" />,
  <ClockIcon key="3" />,
  <XCircleIcon key="4" />,
  <SmartphoneXIcon key="5" />,
];
const afterIcons: ReactNode[] = [
  <MessageCheckIcon key="1" />,
  <MapPinIcon key="2" />,
  <SmartphoneOkIcon key="3" />,
  <CalendarCheckIcon key="4" />,
  <CheckCircleIcon key="5" />,
];

export default function BeforeAfterSection() {
  const { t } = useLanguage();

  const beforeItems = [1,2,3,4,5].map(n => t(`before.item.${n}`));
  const afterItems  = [1,2,3,4,5].map(n => t(`after.item.${n}`));

  return (
    <section style={{
      backgroundColor: '#FAF6F0',
      paddingTop: 'clamp(72px, 9vw, 112px)',
      paddingBottom: 'clamp(72px, 9vw, 112px)',
      borderTop: '1px solid var(--lf-border)',
      borderBottom: '1px solid var(--lf-border)',
    }}>
      <div className="lf-container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="lf-label" style={{ marginBottom: 14 }}>{t('before.label')}</p>
          <h2 style={{
            fontSize: 'clamp(26px, 3.8vw, 40px)', fontWeight: 600,
            letterSpacing: '-0.02em', color: 'var(--lf-primary)',
            margin: '0 auto', maxWidth: 600, lineHeight: 1.15,
          }}>
            {t('before.headline.1')}{' '}
            <span style={{ color: '#059669' }}>{t('before.headline.2')}</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'start',
          maxWidth: 960,
          marginLeft: 'auto',
          marginRight: 'auto',
        }} className="lf-before-after-grid">
          {/* Before column */}
          <div style={{
            backgroundColor: '#FFF8F8',
            border: '1.5px solid #FECACA',
            borderRadius: '18px 0 0 18px',
            padding: 'clamp(20px, 3vw, 32px)',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#EF4444' }} />
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#DC2626', margin: 0 }}>
                {t('before.col.before')}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {beforeItems.map((text, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 12px', borderRadius: 10,
                  backgroundColor: 'rgba(220,38,38,0.05)',
                  border: '1px solid rgba(220,38,38,0.08)',
                }}>
                  <div style={{ color: '#DC2626', flexShrink: 0, marginTop: 1 }}>{beforeIcons[i]}</div>
                  <span style={{ fontSize: 13, color: '#7F1D1D', lineHeight: 1.55, fontWeight: 500 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Center divider */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', padding: '32px 0',
            position: 'relative', zIndex: 1,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              backgroundColor: 'var(--lf-primary)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '3px solid var(--lf-surface)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </div>

          {/* After column */}
          <div style={{
            backgroundColor: '#F0FDF4',
            border: '1.5px solid #A7F3D0',
            borderRadius: '0 18px 18px 0',
            padding: 'clamp(20px, 3vw, 32px)',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#10B981' }} />
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#059669', margin: 0 }}>
                {t('before.col.after')}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {afterItems.map((text, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 12px', borderRadius: 10,
                  backgroundColor: 'rgba(16,185,129,0.06)',
                  border: '1px solid rgba(16,185,129,0.1)',
                }}>
                  <div style={{ color: '#059669', flexShrink: 0, marginTop: 1 }}>{afterIcons[i]}</div>
                  <span style={{ fontSize: 13, color: '#064E3B', lineHeight: 1.55, fontWeight: 500 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
