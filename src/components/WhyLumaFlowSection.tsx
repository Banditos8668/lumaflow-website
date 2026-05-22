const strengths = [
  'Not just visual design. Focused on bookings and inquiries.',
  'Mobile-first thinking from the start.',
  'Local business strategy, not generic digital marketing.',
  'Customer journey focused, not feature-focused.',
  'Fast and lean delivery.',
  'Practical implementation with minimal effort from you.',
];

export default function WhyLumaFlowSection() {
  return (
    <section id="about" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <div className="lf-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56,
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <p className="lf-label" style={{ marginBottom: 16 }}>Why work with me</p>
            <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 460 }}>
              Practical, booking-focused design for local businesses
            </h2>
            <p className="lf-body" style={{ marginBottom: 16 }}>
              I combine UX and product design thinking, customer journey strategy, and local business
              knowledge to build websites that recover bookings, not just look good.
            </p>
            <p className="lf-body" style={{ marginBottom: 32 }}>
              LumaFlow is built on 15+ years of senior UX and product design experience, applied
              specifically to the problem local service businesses face online.
            </p>
            <a href="#quick-check" className="btn-secondary" style={{ fontSize: 14 }}>
              Get a free quick check
            </a>
          </div>

          {/* Right */}
          <div>
            {/* About card */}
            <div style={{
              backgroundColor: 'var(--lf-surface)',
              border: '1.5px solid var(--lf-border)',
              borderRadius: 16,
              padding: 28,
              marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  backgroundColor: 'var(--lf-subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 600, color: 'var(--lf-primary)',
                }}>
                  B
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--lf-primary)', margin: 0 }}>
                    Besiana
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--lf-secondary)', margin: 0 }}>
                    Senior UX/UI and Product Design Leader
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: 14, color: 'var(--lf-secondary)', lineHeight: 1.6, margin: 0,
              }}>
                15+ years designing digital products and customer experiences. Now focused on
                helping local businesses in Zürich recover lost bookings through practical,
                well-designed websites and smarter inquiry follow-up.
              </p>
            </div>

            {/* Strengths list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {strengths.map((strength) => (
                <div key={strength} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  padding: '10px 0',
                  borderBottom: '1px solid var(--lf-border)',
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ color: 'var(--lf-success)', flexShrink: 0, marginTop: 3 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 14, color: 'var(--lf-secondary)', lineHeight: 1.5 }}>
                    {strength}
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
