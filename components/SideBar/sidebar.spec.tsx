import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SportsResponseData } from '@/app/api/sports/route';
import { SideBar } from '.';
const mockSports: SportsResponseData = {
  sports: {
    Soccer: [
      {
        key: 'soccer_epl',
        group: 'Soccer',
        title: 'Premier League',
        description: 'English Premier League',
        active: true,
        has_outrights: true,
      },
      {
        key: 'soccer_la_liga',
        group: 'Soccer',
        title: 'La Liga',
        description: 'Spanish League',
        active: true,
        has_outrights: true,
      },
    ],
    Basketball: [
      {
        key: 'basketball_nba',
        group: 'Basketball',
        title: 'NBA',
        description: 'National Basketball Association',
        active: true,
        has_outrights: true,
      },
    ],
  },
};

describe('SideBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders sport group headings and games', () => {
    render(<SideBar sports={mockSports} />);

    expect(screen.getByText('Esportes')).toBeInTheDocument();
    expect(screen.getByText('Soccer')).toBeInTheDocument();
    expect(screen.getByText('Basketball')).toBeInTheDocument();
    expect(screen.getByText('Premier League')).toBeInTheDocument();
    expect(screen.getByText('La Liga')).toBeInTheDocument();
    expect(screen.getByText('NBA')).toBeInTheDocument();
  });
});
