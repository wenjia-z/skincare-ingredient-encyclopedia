import { useMemo, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { ingredients } from '../data'
import { useSearch } from '../hooks/useSearch'
import { groupByIndexLetter } from '../utils/pinyinIndex'
import { AlphabetSidebar } from '../components/layout/AlphabetSidebar'
import { SearchBar } from '../components/search/SearchBar'
import { SectionGroup } from '../components/cards/SectionGroup'

export function HomePage() {
  const { t, lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  const results = useSearch(ingredients, query)
  const grouped = useMemo(() => groupByIndexLetter(results, lang), [results, lang])
  const activeLetters = useMemo(() => new Set(grouped.keys()), [grouped])

  const visibleGroups = selectedLetter
    ? new Map([[selectedLetter, grouped.get(selectedLetter) ?? []]])
    : grouped

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <AlphabetSidebar activeLetters={activeLetters} selectedLetter={selectedLetter} onSelect={setSelectedLetter} />
      <div className="flex-1 space-y-6">
        <SearchBar value={query} onChange={setQuery} />
        {results.length === 0 ? (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">{t('searchNoResults')}</p>
        ) : (
          [...visibleGroups.entries()].map(([letter, items]) => (
            <SectionGroup key={letter} letter={letter} ingredients={items} />
          ))
        )}
      </div>
    </div>
  )
}
