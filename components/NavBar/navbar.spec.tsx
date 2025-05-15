import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { signOut } from 'next-auth/react';
import { Navbar } from '.';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn(),
}));

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('Ana Gaming')).toBeInTheDocument();
  });

  it('renders the avatar image', () => {
    render(<Navbar />);
    const avatar = screen.getByAltText('Tailwind CSS Navbar component');
    expect(avatar).toBeInTheDocument();
  });

  it('calls signOut when Logout is clicked', () => {
    render(<Navbar />);

    const avatarButton = screen.getByRole('button');
    fireEvent.click(avatarButton);

    const logoutItem = screen.getByText('Logout');
    fireEvent.click(logoutItem);

    expect(signOut).toHaveBeenCalled();
  });
});
