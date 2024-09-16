import { render, screen, fireEvent, within } from '@testing-library/react';
import MusicPlayer from '../MusicPlayer';
import { vi } from 'vitest';

// Mock the usePlaylistData hook
vi.mock('../hooks/usePlaylistData', () => ({
  default: () => ({
    data: [
      { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45', cover: 'cover1.jpg' },
      { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:20', cover: 'cover2.jpg' },
    ],
    loading: false,
  }),
}));

describe('MusicPlayer Component', () => {
  it('renders the currently playing song', () => {
    render(<MusicPlayer />);
    const currentlyPlaying = screen.getByTestId('currently-playing');
    expect(within(currentlyPlaying).getByText('Song 1')).toBeInTheDocument();
  });

  it('changes song when next button is clicked', () => {
    render(<MusicPlayer />);
    const currentlyPlaying = screen.getByTestId('currently-playing');
    const nextButton = within(currentlyPlaying).getByAltText('Forward');
    fireEvent.click(nextButton);
    expect(within(currentlyPlaying).getByText('Song 2')).toBeInTheDocument();
  });
});
