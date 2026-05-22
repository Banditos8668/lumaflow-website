import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type FormState = 'idle' | 'submitting' | 'success';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 14px',
  fontSize: 14,
  color: 'var(--lf-primary)',
  backgroundColor: 'var(--lf-bg)',
  border: '1.5px solid var(--lf-border)',
  borderRadius: 10,
  outline: 'none',
  transition: 'border-color 0.15s',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: '#DC2626',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--lf-primary)',
  marginBottom: 6,
};

export default function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<FormState>('idle');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [otherBusiness, setOtherBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [businessTypeError, setBusinessTypeError] = useState(false);
  const [otherBusinessError, setOtherBusinessError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!phone.trim()) {
      setPhoneError(true);
      hasError = true;
    } else {
      setPhoneError(false);
    }

    if (!businessType) {
      setBusinessTypeError(true);
      hasError = true;
    } else {
      setBusinessTypeError(false);
    }

    if (businessType === 'other' && !otherBusiness.trim()) {
      setOtherBusinessError(true);
      hasError = true;
    } else {
      setOtherBusinessError(false);
    }

    if (hasError) return;

    setFormState('submitting');

    // TODO: replace with real API call
    setTimeout(() => {
      setFormState('success');
    }, 700);
  };

  const trustItems = [
    t('contact.trust.1'),
    t('contact.trust.2'),
    t('contact.trust.3'),
  ];

  return (
    <section
      id="contact"
      className="lf-section"
      style={{
        backgroundColor: '#FAF6F0',
        borderTop: '1px solid var(--lf-border)',
      }}
    >
      <div className="lf-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56,
          alignItems: 'start',
        }}>

          {/* Left: intro */}
          <div>
            <p className="lf-label" style={{ marginBottom: 16 }}>{t('contact.label')}</p>
            <h2 className="lf-h2" style={{ marginBottom: 20, maxWidth: 440 }}>
              {t('contact.headline')}
            </h2>
            <p className="lf-body" style={{ marginBottom: 32, maxWidth: 360 }}>
              {t('contact.subline')}
            </p>

            {/* Besiana photo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '9999px',
                overflow: 'hidden',
                border: '2px solid #e5e7eb',
                flexShrink: 0,
              }}>
                <img
                  src="/images/besiana-photo.jpg"
                  alt={t('contact.besiana.name')}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                  }}
                />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--lf-primary)', margin: 0 }}>
                  {t('contact.besiana.name')}
                </p>
                <p style={{ fontSize: 13, color: 'var(--lf-secondary)', margin: 0 }}>
                  {t('contact.besiana.role')}
                </p>
                <p style={{ fontSize: 12, color: 'var(--lf-secondary)', margin: '4px 0 0', lineHeight: 1.4 }}>
                  {t('contact.besiana.trust')}
                </p>
              </div>
            </div>

            {/* Trust signals */}
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {trustItems.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ color: 'var(--lf-success)', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 13, color: 'var(--lf-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid var(--lf-border)',
            borderRadius: 16,
            padding: 28,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            {formState === 'success' ? (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  backgroundColor: '#D1FAE5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{
                  fontSize: 20, fontWeight: 700, color: 'var(--lf-primary)',
                  marginBottom: 10, letterSpacing: '-0.02em',
                }}>
                  {t('contact.success.title')}
                </p>
                <p style={{ fontSize: 14, color: 'var(--lf-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {t('contact.success.body')}
                </p>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate>
                <p style={{
                  fontSize: 14, fontWeight: 600, color: 'var(--lf-primary)',
                  marginBottom: 22, letterSpacing: '-0.01em',
                }}>
                  {t('contact.form.title')}
                </p>

                {/* Name */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>
                    {t('contact.form.name')}
                    <span style={{ fontWeight: 400, color: 'var(--lf-secondary)', marginLeft: 6 }}>
                      {t('contact.form.name.optional')}
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder={t('contact.form.name.placeholder')}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = '#1A56DB'; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--lf-border)'; }}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>
                    {t('contact.form.phone')}
                    <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+41 79 000 00 00"
                    value={phone}
                    onChange={e => {
                      setPhone(e.target.value);
                      if (e.target.value.trim()) setPhoneError(false);
                    }}
                    style={phoneError ? inputErrorStyle : inputStyle}
                    onFocus={e => {
                      if (!phoneError) (e.target as HTMLInputElement).style.borderColor = '#1A56DB';
                    }}
                    onBlur={e => {
                      if (!phoneError) (e.target as HTMLInputElement).style.borderColor = 'var(--lf-border)';
                    }}
                  />
                  {phoneError && (
                    <p style={{ fontSize: 12, color: '#DC2626', marginTop: 5, marginBottom: 0 }}>
                      {t('contact.form.phone.error')}
                    </p>
                  )}
                </div>

                {/* Business type */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>
                    {t('contact.form.business')}
                    <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
                  </label>
                  <select
                    value={businessType}
                    onChange={e => {
                      setBusinessType(e.target.value);
                      if (e.target.value) setBusinessTypeError(false);
                    }}
                    style={{
                      ...(businessTypeError ? inputErrorStyle : inputStyle),
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 14px center',
                      paddingRight: 36,
                    }}
                    onFocus={e => {
                      if (!businessTypeError) (e.target as HTMLSelectElement).style.borderColor = '#1A56DB';
                    }}
                    onBlur={e => {
                      if (!businessTypeError) (e.target as HTMLSelectElement).style.borderColor = 'var(--lf-border)';
                    }}
                  >
                    <option value="">{t('contact.form.business.placeholder')}</option>
                    <option value="beauty-nail">{t('contact.form.option.beauty-nail')}</option>
                    <option value="massage">{t('contact.form.option.massage')}</option>
                    <option value="physio">{t('contact.form.option.physio')}</option>
                    <option value="wellness">{t('contact.form.option.wellness')}</option>
                    <option value="trades">{t('contact.form.option.trades')}</option>
                    <option value="other">{t('contact.form.option.other')}</option>
                  </select>
                  {businessTypeError && (
                    <p style={{ fontSize: 12, color: '#DC2626', marginTop: 5, marginBottom: 0 }}>
                      {t('contact.form.business.error')}
                    </p>
                  )}
                </div>

                {/* Conditional "other" business field */}
                {businessType === 'other' && (
                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>
                      {t('contact.form.other')}
                      <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t('contact.form.other.placeholder')}
                      value={otherBusiness}
                      onChange={e => {
                        setOtherBusiness(e.target.value);
                        if (e.target.value.trim()) setOtherBusinessError(false);
                      }}
                      style={otherBusinessError ? inputErrorStyle : inputStyle}
                      onFocus={e => {
                        if (!otherBusinessError) (e.target as HTMLInputElement).style.borderColor = '#1A56DB';
                      }}
                      onBlur={e => {
                        if (!otherBusinessError) (e.target as HTMLInputElement).style.borderColor = 'var(--lf-border)';
                      }}
                    />
                    {otherBusinessError && (
                      <p style={{ fontSize: 12, color: '#DC2626', marginTop: 5, marginBottom: 0 }}>
                        {t('contact.form.other.error')}
                      </p>
                    )}
                  </div>
                )}

                {/* Message */}
                <div style={{ marginBottom: 22 }}>
                  <label style={labelStyle}>
                    {t('contact.form.message')}
                    <span style={{ fontWeight: 400, color: 'var(--lf-secondary)', marginLeft: 6 }}>
                      {t('contact.form.name.optional')}
                    </span>
                  </label>
                  <textarea
                    placeholder={t('contact.form.message.placeholder')}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={3}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: 80,
                    }}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = '#1A56DB'; }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--lf-border)'; }}
                  />
                </div>

                {/* Required fields note */}
                <p style={{ fontSize: 12, color: 'var(--lf-secondary)', marginBottom: 12, marginTop: 0 }}>
                  <span style={{ color: '#DC2626' }}>*</span> {t('contact.form.required')}
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    minHeight: 50,
                    backgroundColor: formState === 'submitting' ? '#4B77D4' : '#1A56DB',
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 600,
                    border: 'none',
                    borderRadius: 11,
                    cursor: formState === 'submitting' ? 'default' : 'pointer',
                    transition: 'background-color 0.15s',
                    fontFamily: 'inherit',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => {
                    if (formState !== 'submitting')
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1648C0';
                  }}
                  onMouseLeave={e => {
                    if (formState !== 'submitting')
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1A56DB';
                  }}
                >
                  {formState === 'submitting' ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>

                <p style={{
                  fontSize: 12,
                  color: 'var(--lf-secondary)',
                  textAlign: 'center',
                  marginTop: 12,
                  marginBottom: 0,
                }}>
                  {t('contact.form.disclaimer')}
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
