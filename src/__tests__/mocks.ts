import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist', () => {
    return HttpResponse.json([
      { id: 1, title: 'Song 1', artist: 'Artist 1', duration: '3:45', cover: 'cover1.jpg' },
      { id: 2, title: 'Song 2', artist: 'Artist 2', duration: '4:23', cover: 'cover2.jpg' },
      { id: 3, title: 'Song 3', artist: 'Artist 3', duration: '2:43', cover: 'cover3.jpg' },
      { id: 4, title: 'Song 4', artist: 'Artist 4', duration: '3:31', cover: 'cover4.jpg' },
      { id: 5, title: 'Song 5', artist: 'Artist 5', duration: '3:53', cover: 'cover5.jpg' },
    ]);
  }),
];

export const server = setupServer(...handlers);
