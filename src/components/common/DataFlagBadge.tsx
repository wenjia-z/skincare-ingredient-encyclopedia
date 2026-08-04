import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import { Badge } from './Badge'

const CONFIG = {
  verified: { key: 'dataVerified', tone: 'success' },
  partial: { key: 'dataPartial', tone: 'warning' },
  'unverified-flagged': { key: 'dataUnverifiedFlagged', tone: 'warning' },
} as const

export function DataFlagBadge({ dataCompleteness }: { dataCompleteness: Ingredient['dataCompleteness'] }) {
  const { t } = useLanguage()
  const config = CONFIG[dataCompleteness]
  return <Badge tone={config.tone}>{t(config.key)}</Badge>
}
