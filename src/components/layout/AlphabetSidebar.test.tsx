import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AlphabetSidebar } from './AlphabetSidebar'

describe('AlphabetSidebar', () => {
  it('renders all 26 letters plus #', () => {
    render(<AlphabetSidebar activeLetters={new Set(['A'])} selectedLetter={null} onSelect={() => {}} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(27)
  })

  it('only allows clicking active letters', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<AlphabetSidebar activeLetters={new Set(['A'])} selectedLetter={null} onSelect={onSelect} />)

    await user.click(screen.getByText('A'))
    expect(onSelect).toHaveBeenCalledWith('A')

    onSelect.mockClear()
    await user.click(screen.getByText('B'))
    expect(onSelect).not.toHaveBeenCalled()
  })
})
