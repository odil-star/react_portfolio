import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Footer.scss'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="section-kicker">OdilWeb</p>
          <p className="site-footer__title">{t.title}</p>
        </div>

        <div className="site-footer__links">
          <a href="#services">{t.services}</a>
          <a href="#portfolio">{t.portfolio}</a>
          <a href="#contact">{t.contact}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
