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
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400/40 dark:border-white/15 dark:bg-navy-800 dark:text-white dark:placeholder:text-gray-500"
    />
  )
}
