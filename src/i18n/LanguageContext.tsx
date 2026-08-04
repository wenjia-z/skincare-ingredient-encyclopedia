import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { strings, type StringKey } from './strings'
import type { LocalizedText } from '../schema/ingredient.schema'

export type Lang = 'zh' | 'en'

const STORAGE_KEY = 'lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  /** Look up a UI-chrome string by key in the active language. */
  t: (key: StringKey) => string
  /** Read a bilingual content field in the active language. */
  L: (text: LocalizedText) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'zh'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(() => setLangState((prev) => (prev === 'zh' ? 'en' : 'zh')), [])

  const t = useCallback((key: StringKey) => strings[key][lang], [lang])
  const L = useCallback((text: LocalizedText) => text[lang], [lang])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t, L }),
    [lang, setLang, toggleLang, t, L],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
