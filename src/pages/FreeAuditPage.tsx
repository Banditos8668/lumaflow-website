import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type FormState = 'idle' | 'submitting' | 'success' | 'error';

// ─── Style tokens (mirrors existing LumaFlow CSS variables) ──────────────────
const s = {
  input: {
    width: '100%',
    padding: '11px 14px',
    fontSize: 16,
    color: 'var(--lf-primary)',
    backgroundColor: 'var(--lf-bg)',
    border: '1.5px solid var(--lf-border)',
    borderRadius: 10,
    outline: 'none',
    transition: 'border-color 0.15s',
    boxSizing: 'border-box' as const,
    fontFamily: 'inherit',
  },
  inputError: {} as React.CSSProperties, // filled below
  label: {
    display: 'block',
    fontSize: 15,
    fontWeight: 600,
    color: 'var(--lf-primary)',
    marginBottom: 6,
  } as React.CSSProperties,
  hint: {
    fontSize: 13,
    color: 'var(--lf-secondary)',
    marginTop: 4,
    marginBottom: 0,
  } as React.CSSProperties,
  errorMsg: {
    fontSize: 12,
    color: '#DC2626',
    marginTop: 5,
    marginBottom: 0,
  } as React.CSSProperties,
  fieldWrap: {
    marginBottom: 20,
  } as React.CSSProperties,
};
s.inputError = { ...s.input, borderColor: '#DC2626' };

// ─── Helpers ─────────────────────────────────────────────────────────────────
const FORM_NAME = 'kostenlose-analyse';

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');
}

// Focus/blur highlight handlers
const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  { e.target.style.borderColor = '#1A56DB'; };
const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  { e.target.style.borderColor = 'var(--lf-border)'; };
const onFocusErr = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
  { e.target.style.borderColor = '#DC2626'; };

// ─── Component ───────────────────────────────────────────────────────────────
export default function FreeAuditPage() {
  // Form fields
  const [geschaeftsname, setGeschaeftsname]   = useState('');
  const [ihrName, setIhrName]                 = useState('');
  const [email, setEmail]                     = useState('');
  const [telefon, setTelefon]                 = useState('');
  const [website, setWebsite]                 = useState('');
  const [googleMaps, setGoogleMaps]           = useState('');
  const [wieBuchen, setWieBuchen]             = useState('');
  const [wasVerbessern, setWasVerbessern]     = useState('');
  const [kontaktmethode, setKontaktmethode]   = useState('');
  const [datenschutz, setDatenschutz]         = useState(false);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Submission state
  const [formState, setFormState] = useState<FormState>('idle');

  const validate = () => {
    const e: Record<string, boolean> = {};
    if (!geschaeftsname.trim()) e.geschaeftsname = true;
    if (!ihrName.trim())        e.ihrName = true;
    if (!email.trim() || !email.includes('@')) e.email = true;
    if (!telefon.trim())        e.telefon = true;
    if (!wieBuchen)             e.wieBuchen = true;
    if (!wasVerbessern.trim())  e.wasVerbessern = true;
    if (!kontaktmethode)        e.kontaktmethode = true;
    if (!datenschutz)           e.datenschutz = true;
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      setTimeout(() => {
        const first = document.querySelector('[data-field-error]');
        if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }
    setErrors({});
    setFormState('submitting');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name':       FORM_NAME,
        'geschaeftsname':  geschaeftsname,
        'ihr-name':        ihrName,
        'email':           email,
        'telefon':         telefon,
        'website':         website,
        'google-maps':     googleMaps,
        'wie-buchen':      wieBuchen,
        'was-verbessern':  wasVerbessern,
        'kontaktmethode':  kontaktmethode,
        'datenschutz':     datenschutz ? 'ja' : 'nein',
        'bot-field':       '',
      }),
    })
      .then(() => setFormState('success'))
      .catch(() => setFormState('error'));
  };

  const clearErr = (field: string) =>
    setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });

  // ─── Success state ──────────────────────────────────────────────────────────
  if (formState === 'success') {
    return (
      <PageShell>
        <div style={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px 24px',
        }}>
          <div style={{
            maxWidth: 480,
            width: '100%',
            textAlign: 'center',
          }}>
            {/* Green checkmark */}
            <div style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: '#D1FAE5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 28px',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
                stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h1 style={{
              fontSize: 'clamp(24px, 4vw, 34px)',
              fontWeight: 700,
              color: 'var(--lf-primary)',
              letterSpacing: '-0.025em',
              marginBottom: 16,
              lineHeight: 1.15,
            }}>
              Analyse-Anfrage erhalten.
            </h1>

            <p style={{
              fontSize: 17,
              color: 'var(--lf-secondary)',
              lineHeight: 1.65,
              marginBottom: 32,
            }}>
              Ich melde mich innerhalb von 24 Stunden mit einem ersten Blick auf Ihren Buchungsweg.
              Kein Verkaufsgespräch. Klare nächste Schritte.
            </p>

            {/* Trust strip */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              backgroundColor: '#F9FAFB',
              border: '1px solid var(--lf-border)',
              borderRadius: 12,
              padding: '20px 24px',
              textAlign: 'left',
              marginBottom: 36,
            }}>
              {[
                'Persönlich geprüft durch Besiana in Zürich',
                'Antwort innerhalb von 24 Stunden',
                'Keine Verpflichtung, kein Verkaufsgespräch',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lf-success)"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: 14, color: 'var(--lf-secondary)' }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--lf-secondary)',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: 10,
              border: '1.5px solid var(--lf-border)',
              transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#B8B8B8'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--lf-border)'; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Zurück zur Hauptseite
            </a>
          </div>
        </div>
      </PageShell>
    );
  }

  // ─── Form ───────────────────────────────────────────────────────────────────
  return (
    <PageShell>
      <style>{`
        .fa-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px !important;
          cursor: pointer;
        }
        .fa-radio-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .fa-radio-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          border: 1.5px solid var(--lf-border);
          border-radius: 10px;
          cursor: pointer;
          transition: border-color 0.15s, background-color 0.15s;
          font-size: 15px;
          color: var(--lf-primary);
          user-select: none;
        }
        .fa-radio-label:hover {
          border-color: #1A56DB;
          background-color: rgba(26,86,219,0.04);
        }
        .fa-radio-label.selected {
          border-color: #1A56DB;
          background-color: rgba(26,86,219,0.06);
          font-weight: 500;
        }
        .fa-radio-label input[type="radio"] {
          accent-color: #1A56DB;
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          cursor: pointer;
        }
        @media (min-width: 640px) {
          .fa-radio-group {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .fa-radio-label {
            flex: 1;
            min-width: 120px;
          }
        }
        .fa-consent-wrap {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 10px;
          border: 1.5px solid var(--lf-border);
          transition: border-color 0.15s;
          cursor: pointer;
        }
        .fa-consent-wrap.error {
          border-color: #DC2626;
          background-color: rgba(220,38,38,0.04);
        }
        .fa-consent-wrap input[type="checkbox"] {
          margin-top: 2px;
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          accent-color: #1A56DB;
          cursor: pointer;
        }
      `}</style>

      <div style={{
        maxWidth: 680,
        margin: '0 auto',
        padding: 'clamp(32px, 6vw, 80px) 24px 80px',
      }}>

        {/* Page header */}
        <div style={{ marginBottom: 40 }}>
          <p style={{
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--lf-secondary)',
            marginBottom: 12,
          }}>
            Kostenlose Analyse
          </p>
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 38px)',
            fontWeight: 700,
            color: 'var(--lf-primary)',
            letterSpacing: '-0.025em',
            lineHeight: 1.12,
            marginBottom: 16,
          }}>
            Herausfinden, wo Ihr Betrieb Buchungen verliert.
          </h1>
          <p style={{
            fontSize: 17,
            color: 'var(--lf-secondary)',
            lineHeight: 1.65,
            maxWidth: 540,
          }}>
            Dauert 5 Minuten. Ich prüfe Ihre Situation persönlich und melde mich innerhalb von 24 Stunden.
            Keine Verpflichtung, kein Verkaufsgespräch.
          </p>
        </div>

        {/* Trust strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '14px 18px',
          backgroundColor: '#F0FDF4',
          border: '1px solid #BBF7D0',
          borderRadius: 12,
          marginBottom: 40,
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #e5e7eb',
            flexShrink: 0,
          }}>
            <img
              src="/images/besiana-photo.jpg"
              alt="Besiana"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--lf-primary)', margin: 0 }}>Besiana</p>
            <p style={{ fontSize: 13, color: 'var(--lf-secondary)', margin: 0, lineHeight: 1.4 }}>
              Aus Zürich. Ich prüfe jeden Buchungsweg persönlich und antworte innerhalb von 24 Stunden.
            </p>
          </div>
        </div>

        {/* ── FORM ── */}
        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Netlify hidden fields */}
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <div hidden aria-hidden="true">
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </div>

          {/* ─ Geschäftsname ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-geschaeftsname">
              Geschäftsname
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <input
              id="fa-geschaeftsname"
              type="text"
              name="geschaeftsname"
              autoComplete="organization"
              placeholder="z.B. Studio Mila"
              value={geschaeftsname}
              onChange={e => { setGeschaeftsname(e.target.value); if (e.target.value.trim()) clearErr('geschaeftsname'); }}
              style={errors.geschaeftsname ? s.inputError : s.input}
              onFocus={errors.geschaeftsname ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.geschaeftsname ? '' : undefined}
            />
            {errors.geschaeftsname && <p style={s.errorMsg}>Bitte geben Sie Ihren Geschäftsnamen ein.</p>}
          </div>

          {/* ─ Ihr Name ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-ihr-name">
              Ihr Name
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <input
              id="fa-ihr-name"
              type="text"
              name="ihr-name"
              autoComplete="name"
              placeholder="Vorname Nachname"
              value={ihrName}
              onChange={e => { setIhrName(e.target.value); if (e.target.value.trim()) clearErr('ihrName'); }}
              style={errors.ihrName ? s.inputError : s.input}
              onFocus={errors.ihrName ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.ihrName ? '' : undefined}
            />
            {errors.ihrName && <p style={s.errorMsg}>Bitte geben Sie Ihren Namen ein.</p>}
          </div>

          {/* ─ E-Mail ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-email">
              E-Mail
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <input
              id="fa-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="name@beispiel.ch"
              value={email}
              onChange={e => { setEmail(e.target.value); if (e.target.value.trim()) clearErr('email'); }}
              style={errors.email ? s.inputError : s.input}
              onFocus={errors.email ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.email ? '' : undefined}
            />
            {errors.email && <p style={s.errorMsg}>Bitte geben Sie eine gültige E-Mail-Adresse ein.</p>}
          </div>

          {/* ─ Telefon / WhatsApp ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-telefon">
              Telefon / WhatsApp
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <input
              id="fa-telefon"
              type="tel"
              name="telefon"
              autoComplete="tel"
              placeholder="+41 79 000 00 00"
              value={telefon}
              onChange={e => { setTelefon(e.target.value); if (e.target.value.trim()) clearErr('telefon'); }}
              style={errors.telefon ? s.inputError : s.input}
              onFocus={errors.telefon ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.telefon ? '' : undefined}
            />
            {errors.telefon && <p style={s.errorMsg}>Bitte geben Sie Ihre Telefonnummer ein.</p>}
          </div>

          {/* ─ Website oder Instagram ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-website">
              Website oder Instagram
              <span style={{ fontWeight: 400, color: 'var(--lf-secondary)', marginLeft: 6 }}>(optional)</span>
            </label>
            <input
              id="fa-website"
              type="text"
              name="website"
              autoComplete="url"
              placeholder="www.ihrebusiness.ch oder @instagramname"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              style={s.input}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>

          {/* ─ Google Maps Profil ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-google-maps">
              Google Maps Profil
              <span style={{ fontWeight: 400, color: 'var(--lf-secondary)', marginLeft: 6 }}>(optional)</span>
            </label>
            <input
              id="fa-google-maps"
              type="text"
              name="google-maps"
              placeholder="Link zu Ihrem Google Business Profil"
              value={googleMaps}
              onChange={e => setGoogleMaps(e.target.value)}
              style={s.input}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <p style={s.hint}>Falls vorhanden. Kein Problem, wenn Sie keines haben.</p>
          </div>

          {/* ─ Wie buchen Kunden aktuell? ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-wie-buchen">
              Wie buchen Ihre Kunden aktuell?
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <select
              id="fa-wie-buchen"
              name="wie-buchen"
              value={wieBuchen}
              onChange={e => { setWieBuchen(e.target.value); if (e.target.value) clearErr('wieBuchen'); }}
              className="fa-select"
              style={errors.wieBuchen ? s.inputError : s.input}
              onFocus={errors.wieBuchen ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.wieBuchen ? '' : undefined}
            >
              <option value="">Bitte auswählen</option>
              <option value="telefon">Per Telefon</option>
              <option value="instagram">Per Instagram DM</option>
              <option value="whatsapp">Per WhatsApp</option>
              <option value="treatwell">Über Treatwell oder Fresha</option>
              <option value="online-formular">Über ein Online-Formular / Website</option>
              <option value="walk-in">Walk-in, keine Buchung nötig</option>
              <option value="anderes">Anderes</option>
            </select>
            {errors.wieBuchen && <p style={s.errorMsg}>Bitte wählen Sie eine Option aus.</p>}
          </div>

          {/* ─ Was möchten Sie verbessern? ─ */}
          <div style={s.fieldWrap}>
            <label style={s.label} htmlFor="fa-was-verbessern">
              Was möchten Sie verbessern?
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <textarea
              id="fa-was-verbessern"
              name="was-verbessern"
              rows={4}
              placeholder="z.B. Mehr Neukunden über Google, weniger verpasste Anrufe, eine klarere Website..."
              value={wasVerbessern}
              onChange={e => { setWasVerbessern(e.target.value); if (e.target.value.trim()) clearErr('wasVerbessern'); }}
              style={{
                ...(errors.wasVerbessern ? s.inputError : s.input),
                resize: 'vertical',
                minHeight: 100,
              }}
              onFocus={errors.wasVerbessern ? onFocusErr : onFocus}
              onBlur={onBlur}
              data-field-error={errors.wasVerbessern ? '' : undefined}
            />
            {errors.wasVerbessern && <p style={s.errorMsg}>Bitte beschreiben Sie, was Sie verbessern möchten.</p>}
          </div>

          {/* ─ Bevorzugte Kontaktmethode ─ */}
          <div style={s.fieldWrap}>
            <label style={{ ...s.label, marginBottom: 12 }}>
              Bevorzugte Kontaktmethode
              <span style={{ color: '#DC2626', marginLeft: 4 }}>*</span>
            </label>
            <div className="fa-radio-group" data-field-error={errors.kontaktmethode ? '' : undefined}>
              {[
                { value: 'anruf',    label: 'Anruf' },
                { value: 'whatsapp', label: 'WhatsApp' },
                { value: 'email',    label: 'E-Mail' },
              ].map(opt => (
                <label
                  key={opt.value}
                  className={`fa-radio-label${kontaktmethode === opt.value ? ' selected' : ''}`}
                  style={errors.kontaktmethode && kontaktmethode !== opt.value
                    ? { borderColor: '#DC2626' }
                    : {}
                  }
                >
                  <input
                    type="radio"
                    name="kontaktmethode"
                    value={opt.value}
                    checked={kontaktmethode === opt.value}
                    onChange={() => { setKontaktmethode(opt.value); clearErr('kontaktmethode'); }}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {errors.kontaktmethode && (
              <p style={{ ...s.errorMsg, marginTop: 8 }}>Bitte wählen Sie Ihre bevorzugte Kontaktmethode.</p>
            )}
          </div>

          {/* ─ Divider ─ */}
          <div style={{
            borderTop: '1px solid var(--lf-border)',
            margin: '8px 0 24px',
          }} />

          {/* ─ Datenschutz ─ */}
          <div style={s.fieldWrap} data-field-error={errors.datenschutz ? '' : undefined}>
            <label className={`fa-consent-wrap${errors.datenschutz ? ' error' : ''}`}>
              <input
                type="checkbox"
                name="datenschutz"
                checked={datenschutz}
                onChange={e => { setDatenschutz(e.target.checked); if (e.target.checked) clearErr('datenschutz'); }}
              />
              <span style={{ fontSize: 14, color: 'var(--lf-secondary)', lineHeight: 1.55 }}>
                Ich bin einverstanden, dass LumaFlow meine Angaben zur Beantwortung dieser Anfrage
                verwendet. Meine Daten werden nicht an Dritte weitergegeben und nur für diesen Zweck
                genutzt.{' '}
                <span style={{ fontWeight: 400, color: 'var(--lf-secondary)' }}>
                  Keine Newsletter, kein Spam.
                </span>
              </span>
            </label>
            {errors.datenschutz && (
              <p style={{ ...s.errorMsg, marginTop: 8 }}>
                Bitte stimmen Sie der Datenschutzerklärung zu, um fortzufahren.
              </p>
            )}
          </div>

          {/* ─ Required note ─ */}
          <p style={{ fontSize: 12, color: 'var(--lf-secondary)', marginBottom: 16, marginTop: 4 }}>
            <span style={{ color: '#DC2626' }}>*</span> Pflichtfelder
          </p>

          {/* ─ Error state ─ */}
          {formState === 'error' && (
            <div style={{
              padding: '14px 18px',
              backgroundColor: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: 10,
              marginBottom: 16,
              fontSize: 14,
              color: '#DC2626',
              lineHeight: 1.55,
            }}>
              Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an{' '}
              <a href="mailto:hello@lumaflow.ch" style={{ color: '#DC2626', fontWeight: 600 }}>
                hello@lumaflow.ch
              </a>
            </div>
          )}

          {/* ─ Submit ─ */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            style={{
              width: '100%',
              padding: '15px 0',
              minHeight: 52,
              backgroundColor: formState === 'submitting' ? '#4B77D4' : '#1A56DB',
              color: '#fff',
              fontSize: 16,
              fontWeight: 600,
              border: 'none',
              borderRadius: 12,
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
            {formState === 'submitting' ? 'Wird gesendet...' : 'Kostenlose Analyse anfordern'}
          </button>

          <p style={{
            fontSize: 13,
            color: 'var(--lf-secondary)',
            textAlign: 'center',
            marginTop: 14,
            marginBottom: 0,
            lineHeight: 1.55,
          }}>
            Ich antworte innerhalb von 24 Stunden. Kein Spam, keine Verpflichtung.
          </p>

        </form>
      </div>
    </PageShell>
  );
}

// ─── Shared page shell: minimal nav + page wrapper ───────────────────────────
function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF6F0' }}>
      {/* Minimal top bar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div className="lf-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}>
          <a href="/" style={{ lineHeight: 0, textDecoration: 'none' }}>
            <img
              src="/images/lumaflow-logo.png"
              alt="LumaFlow"
              style={{ height: 28, width: 'auto', objectFit: 'contain', display: 'block' }}
              onError={e => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const span = document.createElement('span');
                span.textContent = 'LumaFlow';
                span.style.cssText = 'font-weight:600;font-size:17px;color:var(--lf-primary);letter-spacing:-0.02em;display:block;';
                e.currentTarget.parentElement!.appendChild(span);
              }}
            />
          </a>
          <a href="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            fontWeight: 500,
            color: 'var(--lf-secondary)',
            textDecoration: 'none',
            padding: '6px 12px',
            borderRadius: 8,
            transition: 'color 0.15s, background-color 0.15s',
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--lf-primary)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--lf-subtle)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = 'var(--lf-secondary)';
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Zurück
          </a>
        </div>
      </header>

      {children}
    </div>
  );
}
