import type { ReactNode } from 'react';
import { EyeOff, Smartphone, Link2Off, PhoneMissed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const leakIcons: ReactNode[] = [
  <EyeOff key="1" size={24} strokeWidth={1.5} color="var(--lf-primary)" />,
  <Smartphone key="2" size={24} strokeWidth={1.5} color="var(--lf-primary)" />,
  <Link2Off key="3" size={24} strokeWidth={1.5} color="var(--lf-primary)" />,
  <PhoneMissed key="4" size={24} strokeWidth={1.5} color="var(--lf-primary)" />,
];

function LeakIcon({ children }: { children: ReactNode }) {
  return (
    <div style={{
      width: 38, height: 38, borderRadius: 10,
      backgroundColor: 'var(--lf-subtle)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: 14,
      color: 'var(--lf-primary)',
      flexShrink: 0,
    }}>
      {children}
    </div>
  );
}

const nicheIcons: ReactNode[] = [
  <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>,
  <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
  <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>,
];

export default function ProblemSection() {
  const { t } = useLanguage();

  const problems = [0,1,2,3].map(i => ({
    title: t(`problem.${i}.title`),
    description: t(`problem.${i}.desc`),
  }));

  const niches = [0,1,2].map(i => ({
    title: t(`problem.niche.${i}.title`),
    desc:  t(`problem.niche.${i}.desc`),
  }));

  return (
    <section id="problem" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <div className="lf-container">

        <div style={{ maxWidth: 680, marginBottom: 52 }}>
          <p className="lf-label" style={{ marginBottom: 16 }}>{t('problem.eyebrow')}</p>
          <h2 className="lf-h2" style={{ marginBottom: 20 }}>
            {t('problem.headline.1')}
            <br />
            {t('problem.headline.2')}
          </h2>
          <p className="lf-body" style={{ maxWidth: 560 }}>
            {t('problem.body')}
          </p>
        </div>

        {/* 4 leak cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 12,
          marginBottom: 56,
        }}>
          {problems.map((problem, i) => (
            <div key={i} style={{
              padding: '22px 24px',
              borderRadius: 14,
              border: '1.5px solid var(--lf-border)',
              backgroundColor: 'var(--lf-surface)',
            }}>
              <LeakIcon>{leakIcons[i]}</LeakIcon>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#DC2626', flexShrink: 0 }} />
                <p style={{ fontSize: 10, fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
                  {t('problem.leak.label')} {String(i + 1).padStart(2, '0')}
                </p>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--lf-primary)', marginBottom: 8, letterSpacing: '-0.01em' }}>
                {problem.title}
              </h3>
              <p className="lf-body-sm" style={{ margin: 0 }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Niche list */}
        <div style={{ paddingTop: 40, borderTop: '1px solid var(--lf-border)' }}>
          <p className="lf-label" style={{ marginBottom: 14 }}>{t('problem.niches.label')}</p>
          <h3 style={{
            fontSize: 'clamp(18px, 2.4vw, 24px)', fontWeight: 600,
            letterSpacing: '-0.015em', color: 'var(--lf-primary)',
            marginBottom: 28, maxWidth: 480,
          }}>
            {t('problem.niches.headline')}
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 12,
          }}>
            {niches.map((niche, i) => (
              <div key={i} style={{
                padding: '20px 22px',
                borderRadius: 14,
                border: '1.5px solid var(--lf-border)',
                backgroundColor: 'var(--lf-surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  backgroundColor: 'var(--lf-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--lf-primary)',
                  flexShrink: 0,
                }}>
                  {nicheIcons[i]}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--lf-primary)', margin: '0 0 4px' }}>
                    {niche.title}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {niche.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
