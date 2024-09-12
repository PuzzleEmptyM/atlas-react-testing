import React from 'react';
import PlayListItem from './PlayListItem.tsx';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

interface PlaylistProps {
  playlist: Song[];
  currentSongId: number | null;
  onSongSelect: (id: number) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist, currentSongId, onSongSelect }) => {
  if (!playlist || playlist.length === 0) {
    return <p>No songs available</p>;
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Playlist</h3>
      <div>
        {playlist.map((song) => (
          <div
            key={song.id}
            onClick={() => onSongSelect(song.id)}
            className={`cursor-pointer ${song.id === currentSongId ? 'bg-tertiary' : 'bg-white'} rounded mb-2`}
          >
            <PlayListItem
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              className={song.id === currentSongId ? 'bg-tertiary' : ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
