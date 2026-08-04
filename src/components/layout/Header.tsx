import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { LanguageToggle } from '../common/LanguageToggle'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-1.5 text-sm font-medium transition',
    isActive
      ? 'bg-accent-400/20 text-accent-500 dark:text-accent-400'
      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10',
  ].join(' ')

export function Header() {
  const { t } = useLanguage()
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-navy-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold text-navy-950 dark:text-white">{t('siteTitle')}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{t('siteTagline')}</span>
        </NavLink>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={navLinkClass}>
            {t('navHome')}
          </NavLink>
          <NavLink to="/emulsifiers" className={navLinkClass}>
            {t('navEmulsifiers')}
          </NavLink>
          <NavLink to="/polymers" className={navLinkClass}>
            {t('navPolymers')}
          </NavLink>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
