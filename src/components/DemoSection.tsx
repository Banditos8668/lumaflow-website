import { useState } from 'react';

const tabs = [
  {
    id: 'beauty',
    label: 'Beauty studio',
    url: 'radasbeauty.ch',
    floatingLabel: '✦ Beauty studio demo',
    name: "Rada's Beauty",
    location: 'Zürich Altstetten · Kosmetik',
    cta: 'Termin buchen',
  },
  {
    id: 'physio',
    label: 'Physio practice',
    url: 'physio-oerlikon.ch',
    floatingLabel: '✦ Physio practice demo',
    name: 'PhysioZentrum Oerlikon',
    location: 'Zürich Oerlikon · Physiotherapie',
    cta: 'Termin buchen',
  },
  {
    id: 'massage',
    label: 'Massage studio',
    url: 'massage-zuerich.ch',
    floatingLabel: '✦ Massage studio demo',
    name: 'Studio Mila',
    location: 'Zürich Wiedikon · Massage',
    cta: 'Termin buchen',
  },
  {
    id: 'wellness',
    label: 'Wellness / Clinic',
    url: 'zentrum-wohlbefinden.ch',
    floatingLabel: '✦ Wellness clinic demo',
    name: 'Zentrum für Wohlbefinden',
    location: 'Zürich · Wellness & Coaching',
    cta: 'Termin buchen',
  },
] as const;

type TabId = typeof tabs[number]['id'];

export default function DemoSection() {
  const [activeTab, setActiveTab] = useState<TabId>('beauty');
  const demo = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="demo" className="lf-section" style={{ backgroundColor: 'var(--lf-surface)' }}>
      <div className="lf-container">
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <p className="lf-label" style={{ marginBottom: 14 }}>Live example</p>
          <h2 className="lf-h2" style={{ maxWidth: 520, marginBottom: 16 }}>
            See what a booking-ready business could look like
          </h2>
          <p className="lf-body" style={{ maxWidth: 520 }}>
            A clear website, direct booking path, and mobile-first design. Built for any appointment-based local business.
          </p>
        </div>

        {/* Industry tabs */}
        <div style={{
          display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 32,
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', transition: 'all 0.15s',
                border: activeTab === tab.id ? '1.5px solid var(--lf-primary)' : '1.5px solid var(--lf-border)',
                backgroundColor: activeTab === tab.id ? 'var(--lf-primary)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--lf-secondary)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Mockup area */}
        <div style={{ position: 'relative', marginBottom: 48 }}>
          {/* Desktop browser frame */}
          <div style={{
            borderRadius: 18,
            border: '1.5px solid var(--lf-border)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)',
            marginRight: 'clamp(0px, 6vw, 80px)',
          }}>
            {/* Browser chrome */}
            <div style={{
              backgroundColor: '#F5F5F5',
              padding: '12px 16px',
              borderBottom: '1px solid var(--lf-border)',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ display: 'flex', gap: 7 }}>
                {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
                  <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: c }} />
                ))}
              </div>
              <div style={{
                flex: 1, maxWidth: 320, backgroundColor: 'var(--lf-surface)',
                borderRadius: 7, height: 28,
                border: '1px solid var(--lf-border)',
                display: 'flex', alignItems: 'center', paddingLeft: 10, gap: 6,
                transition: 'all 0.15s',
              }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span style={{ fontSize: 12, color: '#666' }}>{demo.url}</span>
              </div>
            </div>

            {/* Website screenshot */}
            <div style={{ position: 'relative', paddingTop: '52%', overflow: 'hidden', backgroundColor: '#F8F5F2' }}>
              <img
                src="/assets/images/hero-beauty.jpg"
                alt="Booking-ready website demo"
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
                  transition: 'opacity 0.2s',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                height: '35%',
              }} />
              {/* Business name overlay */}
              <div style={{
                position: 'absolute', bottom: 20, left: 24,
              }}>
                <p style={{
                  fontSize: 14, fontWeight: 700, color: 'var(--lf-primary)',
                  margin: '0 0 2px', letterSpacing: '-0.01em',
                }}>
                  {demo.name}
                </p>
                <p style={{ fontSize: 12, color: 'var(--lf-secondary)', margin: 0 }}>
                  {demo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Overlapping mobile mockup */}
          <div style={{
            position: 'absolute',
            bottom: -20,
            right: 0,
            width: 'clamp(100px, 14vw, 160px)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
            borderRadius: 24,
            overflow: 'hidden',
            border: '6px solid #1a1a1a',
            backgroundColor: '#1a1a1a',
          }}>
            <div style={{
              backgroundColor: '#1a1a1a', height: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: 36, height: 4, backgroundColor: '#333', borderRadius: 2 }} />
            </div>
            <div style={{ position: 'relative', paddingTop: '180%', overflow: 'hidden', backgroundColor: '#F8F5F2' }}>
              <img
                src="/assets/images/service-gesicht.jpg"
                alt="Mobile preview"
                style={{
                  position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center',
                }}
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src = '/assets/images/hero-beauty.jpg';
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(183,121,121,0.95) 0%, transparent 60%)',
                padding: '20px 8px 8px',
                display: 'flex', justifyContent: 'center',
              }}>
                <span style={{
                  backgroundColor: '#fff', color: '#2A2523',
                  fontSize: 8, fontWeight: 700, padding: '4px 8px', borderRadius: 5,
                }}>
                  {demo.cta} →
                </span>
              </div>
            </div>
            <div style={{ backgroundColor: '#1a1a1a', height: 14 }} />
          </div>

          {/* Floating label */}
          <div style={{
            position: 'absolute',
            top: 20, right: 'clamp(100px, 15vw, 180px)',
            backgroundColor: 'var(--lf-primary)',
            color: '#fff',
            borderRadius: 10,
            padding: '7px 13px',
            fontSize: 12, fontWeight: 500,
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            transition: 'all 0.15s',
          }}>
            {demo.floatingLabel}
          </div>
        </div>

        {/* Caption */}
        <p style={{
          fontSize: 13, color: 'var(--lf-secondary)', lineHeight: 1.5,
          marginBottom: 28,
        }}>
          Demo built for a real beauty studio in Zürich Altstetten. Built in 4 hours. Live the same day.
        </p>

        {/* CTA + feature list */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 24,
          alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 28, borderTop: '1px solid var(--lf-border)',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(12px, 2vw, 28px)' }}>
            {[
              'Mobile-first design',
              'Clear service overview',
              'Direct booking path',
              'Google-ready structure',
              'Trust signals built in',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ color: 'var(--lf-success)', flexShrink: 0 }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontSize: 13, color: 'var(--lf-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
          {/* TODO: replace DEMO_URL_PLACEHOLDER with real Vercel URL */}
          <div style={{ flexShrink: 0 }}>
            <a href="DEMO_URL_PLACEHOLDER" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: '#1A56DB', color: '#fff',
              fontSize: 15, fontWeight: 500, padding: '14px 26px',
              borderRadius: 12, textDecoration: 'none', minHeight: 50,
              transition: 'background-color 0.15s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1648C0'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '#1A56DB'; }}>
              See the live demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
