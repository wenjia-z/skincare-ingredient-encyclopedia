import { HashRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { AppRouter } from './router'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </LanguageProvider>
  )
}

export default App
