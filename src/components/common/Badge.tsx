import type { ReactNode } from 'react'

type BadgeTone = 'neutral' | 'accent' | 'warning' | 'success'

const TONE_CLASSES: Record<BadgeTone, string> = {
  neutral: 'bg-surface-alt text-ink-700',
  accent: 'bg-accent-400/15 text-accent-500',
  warning: 'bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200',
  success: 'bg-emerald-50 text-emerald-800 ring-1 ring-inset ring-emerald-200',
}

export function Badge({ tone = 'neutral', children }: { tone?: BadgeTone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${TONE_CLASSES[tone]}`}
    >
      {children}
    </span>
  )
}
