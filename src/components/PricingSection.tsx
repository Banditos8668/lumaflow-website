import { pricing } from '../data/lumaflow';
import { useLanguage } from '../context/LanguageContext';

// Primary blue from page — matches "Get free audit" hero button exactly
const BLUE = '#1A56DB';

const tierKeyMap: Record<string, string> = {
  'local-presence':    'pricing.tier.localPresence',
  'booking-website':   'pricing.tier.bookingWebsite',
  'booking-recovery':  'pricing.tier.fullRecovery',
};

const taglineKeyMap: Record<string, string> = {
  'local-presence':    'pricing.tagline.localPresence',
  'booking-website':   'pricing.tagline.bookingWebsite',
  'booking-recovery':  'pricing.tagline.fullRecovery',
};

const featurePrefixMap: Record<string, string> = {
  'local-presence':   'lp',
  'booking-website':  'bw',
  'booking-recovery': 'br',
};

const featureCountMap: Record<string, number> = {
  'local-presence':   4,
  'booking-website':  5,
  'booking-recovery': 5,
};

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="lf-section" style={{ backgroundColor: 'var(--lf-bg)' }}>
      {/* Desktop scale for featured card only */}
      <style>{`
        @media (min-width: 769px) {
          .lf-pricing-featured { transform: scale(1.03); }
        }
      `}</style>

      <div className="lf-container">

        <p className="lf-label" style={{ marginBottom: 16 }}>{t('pricing.eyebrow')}</p>
        <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 560 }}>
          {t('pricing.section.headline')}
        </h2>
        <p className="lf-body lf-reading" style={{ marginBottom: 52 }}>
          {t('pricing.section.subline')}
        </p>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(16px, 2vw, 24px)',
          alignItems: 'stretch',
        }}>
          {pricing.map((plan) => {
            const isFeatured = plan.highlight;

            return (
              <div
                key={plan.id}
                className={isFeatured ? 'lf-pricing-featured' : ''}
                style={{
                  borderRadius: 16,
                  backgroundColor: 'var(--lf-surface)',
                  border: isFeatured
                    ? `2px solid ${BLUE}`
                    : '1px solid var(--lf-border)',
                  padding: 28,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: isFeatured
                    ? `0 8px 32px rgba(26, 86, 219, 0.15)`
                    : 'none',
                  transition: 'box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isFeatured) (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={e => {
                  if (!isFeatured) (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >

                {/* Badge row — pill above featured, spacer above others */}
                {isFeatured ? (
                  <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'flex-start' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 500,
                      color: BLUE,
                      backgroundColor: 'var(--lf-surface)',
                      border: `1px solid ${BLUE}`,
                      borderRadius: '999px',
                      padding: '4px 14px',
                      letterSpacing: '0.02em',
                    }}>
                      {t('pricing.badge')}
                    </span>
                  </div>
                ) : (
                  <div style={{ height: 28, marginBottom: 20 }} />
                )}

                {/* Tier name */}
                <p style={{
                  fontSize: 18, fontWeight: 600,
                  color: 'var(--lf-primary)',
                  marginBottom: 8, letterSpacing: '-0.01em',
                }}>
                  {t(tierKeyMap[plan.id] ?? plan.id)}
                </p>

                {/* "from" label */}
                <p style={{
                  fontSize: 12,
                  color: 'var(--lf-secondary)',
                  marginBottom: 4,
                }}>
                  {t('pricing.from')}
                </p>

                {/* Price */}
                <p style={{
                  fontSize: 36, fontWeight: 600, lineHeight: 1,
                  letterSpacing: '-0.03em',
                  color: isFeatured ? BLUE : 'var(--lf-primary)',
                  marginBottom: 14,
                }}>
                  {plan.price.replace('from ', '')}
                </p>

                {/* Money math — featured only */}
                {isFeatured && (
                  <div style={{
                    backgroundColor: `rgba(26, 86, 219, 0.08)`,
                    border: `1px solid rgba(26, 86, 219, 0.20)`,
                    borderRadius: 8,
                    padding: '10px 14px',
                    marginBottom: 14,
                  }}>
                    <p style={{ fontSize: 14, lineHeight: 1.6, color: BLUE, margin: 0 }}>
                      {t('pricing.moneymath')}
                    </p>
                  </div>
                )}

                {/* Tagline */}
                <p style={{
                  fontSize: 14, lineHeight: 1.6,
                  color: 'var(--lf-secondary)',
                  marginBottom: 20,
                }}>
                  {t(taglineKeyMap[plan.id] ?? plan.id)}
                </p>

                {/* Divider */}
                <div style={{
                  borderTop: '1px solid var(--lf-border)',
                  marginBottom: 16,
                }} />

                {/* Features */}
                <ul style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexDirection: 'column', gap: 10,
                  flex: 1,
                  marginBottom: 28,
                }}>
                  {Array.from({ length: featureCountMap[plan.id] ?? plan.features.length }, (_, fi) => {
                    const prefix = featurePrefixMap[plan.id];
                    const featureText = prefix
                      ? t(`pricing.feature.${prefix}.${fi + 1}`)
                      : plan.features[fi];
                    return (
                      <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div style={{
                          width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                          backgroundColor: isFeatured ? BLUE : 'var(--lf-primary)',
                          marginTop: 7,
                        }} />
                        <span style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--lf-secondary)' }}>
                          {featureText}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA button — pinned to bottom */}
                <a href="#contact" className="lf-btn-mobile-full" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginTop: 'auto',
                  height: 50, padding: '0 24px', borderRadius: 12,
                  fontSize: 15, fontWeight: 500, lineHeight: 1,
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                  backgroundColor: isFeatured ? BLUE : 'transparent',
                  color: isFeatured ? '#fff' : 'var(--lf-primary)',
                  border: isFeatured ? 'none' : '1.5px solid var(--lf-border)',
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (isFeatured) {
                      el.style.backgroundColor = '#1648C0';
                    } else {
                      el.style.borderColor = '#B0B0B0';
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    if (isFeatured) {
                      el.style.backgroundColor = BLUE;
                    } else {
                      el.style.borderColor = 'var(--lf-border)';
                    }
                  }}>
                  {t('pricing.cta')}
                </a>
              </div>
            );
          })}
        </div>

        <p style={{
          fontSize: 13, color: 'var(--lf-secondary)', lineHeight: 1.6,
          marginTop: 28, textAlign: 'center',
        }}>
          {t('pricing.careplan')}
        </p>

        <p style={{
          fontSize: 13, color: 'var(--lf-secondary)',
          marginTop: 8, textAlign: 'center',
        }}>
          {t('pricing.allprices')}
        </p>

      </div>
    </section>
  );
}
