import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { LanguageToggle } from '../common/LanguageToggle'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-md px-3 py-1.5 text-sm font-medium transition',
    isActive ? 'bg-accent-400/15 text-accent-500' : 'text-ink-700 hover:bg-surface-alt',
  ].join(' ')

export function Header() {
  const { t } = useLanguage()
  return (
    <header className="border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight text-ink-950">{t('siteTitle')}</span>
          <span className="text-xs text-ink-500">{t('siteTagline')}</span>
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
