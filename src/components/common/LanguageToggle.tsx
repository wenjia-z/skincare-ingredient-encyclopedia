import { useLanguage } from '../../i18n/LanguageContext'

export function LanguageToggle() {
  const { t, toggleLang } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLang}
      className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-ink-900 transition hover:bg-surface-alt"
    >
      {t('langToggleLabel')}
    </button>
  )
}
