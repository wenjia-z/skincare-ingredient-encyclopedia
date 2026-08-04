import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext'

function Probe() {
  const { t, toggleLang } = useLanguage()
  return (
    <div>
      <span data-testid="label">{t('navHome')}</span>
      <button onClick={toggleLang}>toggle</button>
    </div>
  )
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('defaults to Chinese and toggles to English, persisting the choice', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    )

    expect(screen.getByTestId('label')).toHaveTextContent('首页')

    await user.click(screen.getByText('toggle'))

    expect(screen.getByTestId('label')).toHaveTextContent('Home')
    expect(window.localStorage.getItem('lang')).toBe('en')
  })
})
