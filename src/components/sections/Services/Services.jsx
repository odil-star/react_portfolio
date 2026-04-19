import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Services.scss'

function Services() {
  const { language } = useLanguage()
  const t = translations[language].services

  return (
    <section className="content-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
        </div>

        <div className="services-grid">
          {t.items.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__glow" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
