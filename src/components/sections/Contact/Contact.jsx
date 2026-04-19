import ContactForm from './ContactForm'
import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Contact.scss'

function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section className="content-section" id="contact">
      <div className="container contact-section">
        <div className="contact-section__info">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.text}</p>

          <div className="contact-section__points">
            {t.points.map((point) => (
              <div key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
