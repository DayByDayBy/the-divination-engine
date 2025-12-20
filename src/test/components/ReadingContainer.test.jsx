import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ReadingContainer from '../../containers/ReadingContainer.jsx'
import { readingAPI } from '../../services/api'

// Mock the API service
vi.mock('../../services/api')

// Mock the Card component to avoid image loading issues
vi.mock('../../components/Card.jsx', () => ({
  default: ({ card, cardDescription }) => (
    <div data-testid="card">
      <div className="card-name">{card.card.name}</div>
      <div className="card-description">{cardDescription}</div>
    </div>
  )
}))

describe('ReadingContainer', () => {
  const mockCards = [
    {
      id: 1,
      name: 'The Fool',
      nameShort: 'm00',
      type: 'major',
      meaningUp: 'New beginnings',
      meaningRev: 'Recklessness'
    },
    {
      id: 2,
      name: 'The Magician',
      nameShort: 'm01',
      type: 'major',
      meaningUp: 'Manifestation',
      meaningRev: 'Manipulation'
    },
    {
      id: 3,
      name: 'The High Priestess',
      nameShort: 'm02',
      type: 'major',
      meaningUp: 'Intuition',
      meaningRev: 'Secrets'
    }
  ]

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renders the title', () => {
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    )

    expect(screen.getByText('The DIVINATION ENGINE')).toBeInTheDocument()
  })

  test('displays spread selector', () => {
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    )

    expect(screen.getByText('Select A Spread:')).toBeInTheDocument()
    expect(screen.getByText('Three-Card Spread')).toBeInTheDocument()
    expect(screen.getByText('Celtic Cross Spread')).toBeInTheDocument()
  })

  test('fetches and displays 3 cards when three-card spread is selected', async () => {
    readingAPI.getRandomCards.mockResolvedValue(mockCards)

    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'three-card' } })

    await waitFor(() => {
      expect(readingAPI.getRandomCards).toHaveBeenCalledWith(3)
    })

    expect(screen.getByText('Save This Spread')).toBeInTheDocument()
  })

  test('fetches and displays 10 cards when celtic-cross spread is selected', async () => {
    readingAPI.getRandomCards.mockResolvedValue(mockCards)

    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'celtic-cross' } })

    await waitFor(() => {
      expect(readingAPI.getRandomCards).toHaveBeenCalledWith(10)
    })

    expect(screen.getByText('Save This Spread')).toBeInTheDocument()
  })

  test('saves reading when save button is clicked', async () => {
    readingAPI.getRandomCards.mockResolvedValue(mockCards)
    readingAPI.createReading.mockResolvedValue({ id: 1 })

    // Mock window.location
    delete window.location
    window.location = { assign: vi.fn() }

    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    )

    // Select a spread
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'three-card' } })

    // Wait for cards to load
    await waitFor(() => {
      expect(screen.getByText('Save This Spread')).toBeInTheDocument()
    })

    // Click save button
    const saveButton = screen.getByText('Save This Spread')
    fireEvent.click(saveButton)

    await waitFor(() => {
      expect(readingAPI.createReading).toHaveBeenCalledWith({
        cardReadings: expect.arrayContaining([
          expect.objectContaining({
            card: expect.objectContaining({ id: 1 }),
            position: expect.any(Number),
            reversed: expect.any(Boolean)
          })
        ])
      })
    })
  })
})
