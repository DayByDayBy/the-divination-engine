import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ArchivedReadingList from '../../components/ArchivedReadingList';
import { UI_TEXT } from '../../constants/index';

describe('Archive Flow Integration Tests', () => {
  const mockReadings = [
    {
      id: 1,
      cardReadings: [
        { position: 0, reversed: false, card: { id: 1, name: 'The Fool' } }
      ]
    }
  ];

  it('should display list of archived readings', () => {
    const mockDelete = vi.fn();
    
    render(
      <ArchivedReadingList 
        readings={mockReadings} 
        handleDeleteReading={mockDelete}
      />
    );

    expect(screen.getByText('Reading 1')).toBeInTheDocument();
  });

  it('should show empty state when no readings exist', () => {
    const mockDelete = vi.fn();
    
    render(
      <ArchivedReadingList 
        readings={[]} 
        handleDeleteReading={mockDelete}
      />
    );

    expect(screen.getByText(UI_TEXT.NO_READINGS)).toBeInTheDocument();
  });

  it('should display view and delete buttons for each reading', () => {
    const mockDelete = vi.fn();
    
    render(
      <MemoryRouter>
        <ArchivedReadingList 
          readings={mockReadings} 
          handleDeleteReading={mockDelete}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(UI_TEXT.VIEW_BUTTON)).toBeInTheDocument();
    expect(screen.getByText(UI_TEXT.DELETE_BUTTON)).toBeInTheDocument();
  });
});
