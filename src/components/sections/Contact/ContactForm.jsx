import { useState } from 'react'
import { sendLead } from '../../../services/api'
import ServiceSelect from './ServiceSelect'
import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'

const initialState = {
  name: '',
  phone: '',
  service: '',
  message: '',
}

function ContactForm() {
  const { language } = useLanguage()
  const t = translations[language].contact.form
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      await sendLead(form)
      setForm(initialState)
      setStatus({ type: 'success', message: t.success })
    } catch (error) {
      setStatus({ type: 'error', message: error.message || t.error })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>{t.name}</span>
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="contact-form__field">
          <span>{t.phone}</span>
          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <ServiceSelect value={form.service} onChange={handleChange} />

      <label className="contact-form__field">
        <span>{t.message}</span>
        <textarea
          name="message"
          placeholder={t.messagePlaceholder}
          rows="5"
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <div className="contact-form__footer">
        <button className="button button--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? t.submitting : t.submit}
        </button>

        {status.message ? (
          <p className={`contact-form__status contact-form__status--${status.type}`}>{status.message}</p>
        ) : null}
      </div>
    </form>
  )
}

export default ContactForm
