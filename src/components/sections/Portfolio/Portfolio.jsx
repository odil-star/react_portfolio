import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Portfolio.scss'

function Portfolio() {
  const { language } = useLanguage()
  const t = translations[language].portfolio

  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-kicker">{t.kicker}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.text}</p>
        </div>

        <div className="portfolio-grid">
          {t.items.map((item, index) => (
            <article className="portfolio-card" key={item.title}>
              <div className="portfolio-card__preview">
                <span className="portfolio-card__badge">{item.type}</span>
                <div className={`portfolio-card__screen portfolio-card__screen--${index + 1}`}>
                  <span className="portfolio-card__line" />
                  <span className="portfolio-card__line portfolio-card__line--short" />
                  <div className="portfolio-card__widgets">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="portfolio-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
