import { useMemo, useState } from 'react'
import { languages } from './languages'
import { LanguageContext } from './language-context'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ru')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      languages,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
