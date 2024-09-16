import { renderHook, waitFor } from '@testing-library/react';
import usePlaylistData from '../hooks/usePlaylistData';
import { vi } from 'vitest';

describe('usePlaylistData Hook', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and returns playlist data', async () => {
    (fetch as vi.Mock).mockResolvedValueOnce({
      json: async () => ([
        { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45', cover: 'cover1.jpg' },
        { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:20', cover: 'cover2.jpg' },
      ]),
    });

    const { result } = renderHook(() => usePlaylistData());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual([
      { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45', cover: 'cover1.jpg' },
      { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:20', cover: 'cover2.jpg' },
    ]);
  });
});
