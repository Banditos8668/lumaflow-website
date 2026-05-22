import { objections } from '../data/lumaflow';

export default function ObjectionSection() {
  return (
    <section className="lf-section" style={{ backgroundColor: 'var(--lf-surface)' }}>
      <div className="lf-container">
        <p className="lf-label" style={{ marginBottom: 16 }}>Common questions</p>
        <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 560 }}>
          You may not need more marketing. You may need fewer leaks.
        </h2>
        <p className="lf-body lf-reading" style={{ marginBottom: 56 }}>
          Most local businesses already have some online presence. The issue isn't usually about
          getting more attention. It's about what happens after a customer finds you.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {objections.map((item) => (
            <div key={item.question} style={{
              padding: '24px',
              borderRadius: 14,
              backgroundColor: 'var(--lf-bg)',
              border: '1.5px solid var(--lf-border)',
            }}>
              <p style={{
                fontSize: 14, fontWeight: 600, color: 'var(--lf-primary)',
                marginBottom: 10, lineHeight: 1.4,
              }}>
                "{item.question}"
              </p>
              <p style={{
                fontSize: 14, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.6,
              }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
