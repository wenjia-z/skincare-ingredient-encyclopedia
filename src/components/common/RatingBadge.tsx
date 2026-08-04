import { useLanguage } from '../../i18n/LanguageContext'
import type { RatingLevel } from '../../schema/ingredient.schema'
import { Badge } from './Badge'

const RATING_KEY: Record<RatingLevel, 'ratingLow' | 'ratingMedium' | 'ratingHigh' | 'ratingUnknown'> = {
  low: 'ratingLow',
  medium: 'ratingMedium',
  high: 'ratingHigh',
  unknown: 'ratingUnknown',
}

const RATING_TONE: Record<RatingLevel, 'neutral' | 'accent' | 'warning'> = {
  low: 'neutral',
  medium: 'accent',
  high: 'accent',
  unknown: 'warning',
}

export function RatingBadge({ level }: { level: RatingLevel }) {
  const { t } = useLanguage()
  return <Badge tone={RATING_TONE[level]}>{t(RATING_KEY[level])}</Badge>
}
