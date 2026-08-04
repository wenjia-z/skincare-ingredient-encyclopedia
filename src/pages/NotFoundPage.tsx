import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col items-center gap-3 py-24 text-center">
      <h1 className="text-2xl font-bold text-ink-950">{t('notFoundTitle')}</h1>
      <p className="text-ink-500">{t('notFoundBody')}</p>
      <Link to="/" className="mt-2 text-accent-500 hover:underline">
        {t('backToList')}
      </Link>
    </div>
  )
}
