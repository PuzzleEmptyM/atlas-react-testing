import { render, screen, fireEvent, within } from '@testing-library/react';
import MusicPlayer from '../MusicPlayer';
import { server } from './mocks';
import { beforeAll, afterEach, afterAll } from 'vitest';

// Start server before all tests
beforeAll(() => {
  server.listen();
});

// Reset handlers after each test
afterEach(() => {
  server.resetHandlers();
});

// Close server after all tests
afterAll(() => {
  server.close();
});

describe('MusicPlayer Component', () => {

  it('renders currently playing song', async () => {
    render(<MusicPlayer />);
    const currentlyPlaying = await screen.findByTestId('currently-playing');
    expect(within(currentlyPlaying).getByText('Song 1')).toBeInTheDocument();
  });

  it('toggles play and pause when play button is clicked', async () => {
    render(<MusicPlayer />);
    const playPauseButton = await screen.findByAltText('Play');
    fireEvent.click(playPauseButton);
    expect(await screen.findByAltText('Pause')).toBeInTheDocument();
    fireEvent.click(screen.getByAltText('Pause'));
    expect(await screen.findByAltText('Play')).toBeInTheDocument();
  });
  
  
  it('plays next song when next button is clicked', async () => {
    render(<MusicPlayer />);
    const currentlyPlaying = await screen.findByTestId('currently-playing');
    const nextButton = within(currentlyPlaying).getByAltText('Forward');
    fireEvent.click(nextButton);
    expect(within(currentlyPlaying).getByText('Song 2')).toBeInTheDocument();
  });

  it('plays previous song when previous button is clicked', async () => {
    render(<MusicPlayer />);
    const currentlyPlaying = await screen.findByTestId('currently-playing');
    const nextButton = within(currentlyPlaying).getByAltText('Forward');
    const prevButton = within(currentlyPlaying).getByAltText('Rewind');
    fireEvent.click(nextButton);
    expect(within(currentlyPlaying).getByText('Song 2')).toBeInTheDocument();
    fireEvent.click(prevButton);
    expect(within(currentlyPlaying).getByText('Song 1')).toBeInTheDocument();
  });

  it('toggles shuffle mode when shuffle button is clicked', async () => {
    render(<MusicPlayer />);
    const currentlyPlaying = await screen.findByTestId('currently-playing');
    const shuffleButton = within(currentlyPlaying).getByRole('button', { name: /Shuffle/i });
    expect(shuffleButton).toHaveClass('bg-primary');
    fireEvent.click(shuffleButton);
    expect(shuffleButton).toHaveClass('bg-green-200');
    fireEvent.click(shuffleButton);
    expect(shuffleButton).toHaveClass('bg-primary');
  });

  it('changes volume when volume slider is adjusted', async () => {
    render(<MusicPlayer />);
    const volumeSlider = await screen.findByRole('slider');
    expect(volumeSlider).toHaveValue('50');
    fireEvent.change(volumeSlider, { target: { value: '75' } });
    expect(volumeSlider).toHaveValue('75');
    fireEvent.change(volumeSlider, { target: { value: '25' } });
    expect(volumeSlider).toHaveValue('25');
  });
});
