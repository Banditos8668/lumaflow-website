import { industries } from '../data/lumaflow';

export default function IndustrySection() {
  return (
    <section id="industries" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      <div className="lf-container">
        <p className="lf-label" style={{ marginBottom: 16 }}>Who this is for</p>
        <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 560 }}>
          Built for appointment-based local businesses
        </h2>
        <p className="lf-body lf-reading" style={{ marginBottom: 56 }}>
          If customers book appointments to visit you, these problems likely apply to your business.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {industries.map((industry) => (
            <div key={industry.name} style={{
              padding: '24px',
              borderRadius: 14,
              backgroundColor: 'var(--lf-surface)',
              border: '1.5px solid var(--lf-border)',
            }}>
              <h3 style={{
                fontSize: 16, fontWeight: 600, color: 'var(--lf-primary)',
                marginBottom: 12,
              }}>
                {industry.name}
              </h3>

              <div style={{ marginBottom: 12 }}>
                <p style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: '#DC2626', marginBottom: 4,
                }}>
                  Where bookings are lost
                </p>
                <p style={{ fontSize: 13, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {industry.problem}
                </p>
              </div>

              <div style={{
                paddingTop: 12, borderTop: '1px solid var(--lf-border)',
              }}>
                <p style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: 'var(--lf-success)', marginBottom: 4,
                }}>
                  How LumaFlow helps
                </p>
                <p style={{ fontSize: 13, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {industry.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
