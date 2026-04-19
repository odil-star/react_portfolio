import { useLanguage } from '../../../context/useLanguage'
import { translations } from '../../../i18n/translations'
import './Header.scss'

function Header() {
    const { language, setLanguage, languages } = useLanguage()
    const t = translations[language].header

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <a className="brand" href="#hero">
                    <span className="brand__badge">OW</span>
                    <span className="brand__text">
                        <strong>OdilWeb</strong>
                        <small>{t.tagline}</small>
                    </span>
                </a>

                <div className="site-header__center">
                    <nav className="site-nav" aria-label={t.navLabel}>
                        <a className="site-nav__link" href="#services">
                            {t.nav.services}
                        </a>
                        <a className="site-nav__link" href="#portfolio">
                            {t.nav.portfolio}
                        </a>
                        <a className="site-nav__link" href="#process">
                            {t.nav.process}
                        </a>
                        <a className="site-nav__link" href="#contact">
                            {t.nav.contact}
                        </a>
                    </nav>

                    <div className="language-switch" aria-label={t.languageLabel} role="group">
                        <span className="language-switch__icon" aria-hidden="true" />
                        {languages.map((item) => (
                            <button
                                key={item.code}
                                type="button"
                                className={`language-switch__button ${language === item.code ? 'is-active' : ''}`}
                                onClick={() => setLanguage(item.code)}
                                aria-pressed={language === item.code}
                                title={item.name}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>

                <a className="button button--small button--ghost" href="#contact">
                    {t.cta}
                </a>
            </div>
        </header>
    )
}

export default Header
