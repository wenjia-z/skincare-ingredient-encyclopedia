const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#']

interface AlphabetSidebarProps {
  activeLetters: Set<string>
  selectedLetter: string | null
  onSelect: (letter: string | null) => void
}

export function AlphabetSidebar({ activeLetters, selectedLetter, onSelect }: AlphabetSidebarProps) {
  return (
    <nav
      aria-label="Alphabet index"
      className="flex w-14 shrink-0 flex-col items-center gap-0.5 rounded-xl bg-navy-950 py-3 text-white"
    >
      {LETTERS.map((letter) => {
        const isActive = activeLetters.has(letter)
        const isSelected = selectedLetter === letter
        return (
          <button
            key={letter}
            type="button"
            disabled={!isActive}
            onClick={() => onSelect(isSelected ? null : letter)}
            className={[
              'flex h-6 w-10 items-center justify-center rounded text-xs font-medium transition',
              isSelected
                ? 'bg-accent-400 text-navy-950'
                : isActive
                  ? 'text-white/80 hover:bg-white/10 hover:text-white'
                  : 'cursor-default text-white/25',
            ].join(' ')}
          >
            {letter}
          </button>
        )
      })}
    </nav>
  )
}
