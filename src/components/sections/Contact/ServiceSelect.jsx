import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'

function ServiceSelect({ value, onChange }) {
  const { language } = useLanguage()
  const t = translations[language].contact.form

  return (
    <label className="contact-form__field">
      <span>{t.service}</span>
      <select name="service" value={value} onChange={onChange} required>
        <option value="" disabled>
          {t.servicePlaceholder}
        </option>
        {t.services.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default ServiceSelect
