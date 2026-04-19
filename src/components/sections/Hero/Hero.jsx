import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Hero.scss'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-section__grid">
        <div className="hero-copy">
          <p className="section-kicker">{t.kicker}</p>
          <h1>{t.title}</h1>
          <p className="hero-copy__text">{t.text}</p>

          <div className="hero-copy__actions">
            <a className="button button--primary" href="#portfolio">
              {t.primary}
            </a>
            <a className="button button--ghost" href="#contact">
              {t.secondary}
            </a>
          </div>

          <ul className="hero-copy__tags" aria-label={t.panelLabel}>
            {t.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="hero-showcase">
          <div className="hero-showcase__panel hero-showcase__panel--primary">
            <span>{t.panelLabel}</span>
            <strong>{t.panelText}</strong>
          </div>

          <div className="hero-showcase__code">
            <div className="hero-showcase__code-head">
              <span />
              <span />
              <span />
            </div>
            <pre>{`const stack = ['HTML', 'SCSS', 'JavaScript', 'React']
const result = 'fast, clear, scalable'

launchProject({
  format: 'landing | portfolio | e-commerce',
  responsive: true,
  conversionFocused: true,
})`}</pre>
          </div>

          <div className="hero-showcase__metrics">
            {t.metrics.map((metric) => (
              <article key={metric.value}>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
