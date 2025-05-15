import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { EventOddsType } from '@/app/api/event-odds/route';
import { OddsInfoHeader } from '.';

jest.mock('@/lib/utils', () => ({
  formatDate: jest.fn(() => '15 de maio de 2025'),
}));

const mockEventOdds: EventOddsType = {
  id: '1',
  sport_key: 'soccer_epl',
  sport_title: 'Premier League',
  commence_time: '2025-05-15T18:00:00Z',
  home_team: 'Manchester United',
  away_team: 'Chelsea',
  bookmakers: [],
};

describe('OddsInfoHeader', () => {
  it('renders the title and formatted event info', () => {
    render(<OddsInfoHeader eventOdds={mockEventOdds} />);

    expect(screen.getByText('Odds de Apostas Esportivas')).toBeInTheDocument();
    expect(
      screen.getByText('Premier League • 15 de maio de 2025')
    ).toBeInTheDocument();
    expect(screen.getByText('Time Visitante')).toBeInTheDocument();
    expect(screen.getByText('Time da Casa')).toBeInTheDocument();
    expect(screen.getByText('Chelsea')).toBeInTheDocument();
    expect(screen.getByText('Manchester United')).toBeInTheDocument();
    expect(screen.getByText('Che')).toBeInTheDocument();
    expect(screen.getByText('Man')).toBeInTheDocument();
    expect(screen.getByText('@')).toBeInTheDocument();
  });
});
