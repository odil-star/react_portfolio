import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Process.scss'

function Process() {
  const { language } = useLanguage()
  const t = translations[language].process

  return (
    <section className="content-section content-section--muted" id="process">
      <div className="container process-layout">
        <div className="section-heading section-heading--left">
          <p className="section-kicker">{t.kicker}</p>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
        </div>

        <div className="process-list">
          {t.steps.map((step, index) => (
            <article className="process-item" key={step}>
              <span className="process-item__index">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
