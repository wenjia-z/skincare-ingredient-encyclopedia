import { useLanguage } from '../../i18n/LanguageContext'

export function LanguageToggle() {
  const { t, toggleLang } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      className="rounded-md border border-navy-700/30 px-3 py-1.5 text-sm font-medium text-navy-900 transition hover:bg-navy-900/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
    >
      {t('langToggleLabel')}
    </button>
  )
}
