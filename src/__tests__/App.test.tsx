import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders App component with MusicPlayer and Footer', () => {
    render(<App />);
    expect(screen.getByTestId('music-player')).toBeInTheDocument();
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Atlas School`)).toBeInTheDocument();
  });
});
