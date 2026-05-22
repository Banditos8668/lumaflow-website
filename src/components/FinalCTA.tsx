// TODO: replace placeholder with /public/images/besiana-photo.jpg
// TODO: update "Available this week" manually each week or automate

export default function FinalCTA() {
  return (
    <section className="lf-section" style={{
      backgroundColor: 'var(--lf-primary)',
      paddingTop: 'clamp(80px, 10vw, 120px)',
      paddingBottom: 'clamp(80px, 10vw, 120px)',
    }}>
      <div className="lf-container" style={{ textAlign: 'center' }}>

        {/* Headline — 32px minimum per visual brief */}
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 600, lineHeight: 1.1,
          letterSpacing: '-0.02em', color: '#FFFFFF', marginBottom: 20, maxWidth: 560,
          marginLeft: 'auto', marginRight: 'auto',
        }}>
          Find out exactly where your business loses bookings.
        </h2>

        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.7)', marginBottom: 36,
          maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6,
        }}>
          Free 10-minute audit. No commitment.
          I will show you the three things costing you bookings right now.
        </p>

        {/* Primary CTA */}
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#FFFFFF', color: 'var(--lf-primary)',
          fontSize: 15, fontWeight: 600, padding: '14px 32px',
          borderRadius: 12, textDecoration: 'none', minHeight: 50,
          transition: 'opacity 0.15s, transform 0.1s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
          onMouseDown={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(0.99)'; }}
          onMouseUp={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}>
          Get free audit
        </a>

        {/* Besiana intro — 16px below button */}
        {/* TODO: replace placeholder with /public/images/besiana-photo.jpg */}
        <div style={{
          marginTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
            backgroundColor: '#FAF6F0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1.5px solid rgba(255,255,255,0.2)',
          }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#1E3A5F' }}>B</span>
          </div>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>
            {/* TODO: update "Available this week" manually each week or automate */}
            Besiana, Zürich. Available this week.
          </span>
        </div>

        <p style={{
          fontSize: 13, color: 'rgba(255,255,255,0.35)', marginTop: 32,
        }}>
          Based in Zürich. Working with local businesses across Switzerland.
        </p>
      </div>
    </section>
  );
}
