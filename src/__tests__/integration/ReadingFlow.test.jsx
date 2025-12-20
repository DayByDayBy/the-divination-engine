import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ReadingContainer from '../../containers/ReadingContainer';
import { SPREAD_TYPES, UI_TEXT } from '../../constants/index';

vi.mock('../../components/Card.jsx', () => ({
  default: ({ card, cardDescription }) => (
    <div data-testid="card">
      <span>{card.card.name}</span>
      <span>{cardDescription}</span>
    </div>
  )
}));

describe('Reading Flow Integration Tests', () => {
  it('should allow user to select a spread and fetch cards', async () => {
    const user = userEvent.setup();
    
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    await user.selectOptions(select, SPREAD_TYPES.THREE_CARD);

    await waitFor(() => {
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(3);
    });
  });

  it('should display save button after cards are loaded', async () => {
    const user = userEvent.setup();
    
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, SPREAD_TYPES.THREE_CARD);

    await waitFor(() => {
      const saveButton = screen.getByDisplayValue(UI_TEXT.SAVE_SPREAD);
      expect(saveButton).toBeInTheDocument();
    });
  });

  it('should fetch 10 cards for Celtic Cross spread', async () => {
    const user = userEvent.setup();
    
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, SPREAD_TYPES.CELTIC_CROSS);

    await waitFor(() => {
      const cards = screen.getAllByTestId('card');
      expect(cards).toHaveLength(10);
    });
  });

  it('should display card meanings after cards are loaded', async () => {
    const user = userEvent.setup();
    
    render(
      <BrowserRouter>
        <ReadingContainer />
      </BrowserRouter>
    );

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, SPREAD_TYPES.THREE_CARD);

    await waitFor(() => {
      const foolCards = screen.getAllByText(/The Fool/i);
      expect(foolCards.length).toBeGreaterThan(0);
    });
  });
});
