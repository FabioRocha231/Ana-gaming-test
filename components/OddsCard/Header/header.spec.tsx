import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Bookmaker } from '@/app/api/event-odds/route';
import { OddsCardHeader } from '.';

jest.mock('@/lib/utils', () => ({
  formatDate: jest.fn(() => '15 de maio de 2025 14:00'),
}));

const mockBookmaker: Bookmaker = {
  key: 'bet365',
  title: 'Bet365',
  markets: [
    {
      key: 'h2h',
      last_update: '2025-05-15T14:00:00Z',
      outcomes: [],
    },
  ],
};

describe('OddsCardHeader', () => {
  it('renders bookmaker title and formatted last update', () => {
    render(<OddsCardHeader bookmaker={mockBookmaker} />);

    expect(screen.getByText('Bet365')).toBeInTheDocument();
    expect(screen.getByText(/Última atualização:/)).toHaveTextContent(
      'Última atualização: 15 de maio de 2025 14:00'
    );
  });
});
