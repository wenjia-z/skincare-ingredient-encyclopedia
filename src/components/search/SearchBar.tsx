import { useLanguage } from '../../i18n/LanguageContext'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useLanguage()
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t('searchPlaceholder')}
      aria-label={t('searchPlaceholder')}
      className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-500 shadow-sm focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
    />
  )
}
