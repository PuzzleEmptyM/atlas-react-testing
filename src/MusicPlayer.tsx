import { useState, useEffect } from 'react';
import CurrentlyPlaying from './components/CurrentlyPlaying';
import Playlist from './components/Playlist';
import usePlaylistData from './hooks/usePlaylistData';

export default function MusicPlayer() {
  const { data: playlist, loading } = usePlaylistData();
  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    if (!loading && playlist.length > 0 && currentSongId === null) {
      setCurrentSongId(playlist[0].id);
    }
  }, [loading, playlist, currentSongId]);

  const currentSongIndex = playlist.findIndex(song => song.id === currentSongId);

  const handleSongSelect = (id: number) => {
    setCurrentSongId(id);
  };

  const handlePrevSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongId(playlist[currentSongIndex - 1].id);
    }
  };

  const handleNextSong = () => {
    if (isShuffling) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentSongId(playlist[randomIndex].id);
    } else if (currentSongIndex < playlist.length - 1) {
      setCurrentSongId(playlist[currentSongIndex + 1].id);
    }
  };

  const handleShuffleToggle = () => {
    setIsShuffling(prevIsShuffling => !prevIsShuffling);
  };

  const currentSong = playlist.find(song => song.id === currentSongId);

  return (
    <div data-testid="music-player" className="flex bg-secondary self-center mt-12 flex-col md:flex-row shadow-2xl">
      <div className="p-3 flex-1">
        {/* Render loading state when data is being fetched */}
        {loading ? (
          <p>Loading playlist...</p>
        ) : (
          currentSong && (
            <CurrentlyPlaying
              song={currentSong}
              currentSongIndex={currentSongIndex}
              totalSongs={playlist.length}
              onPrevSong={handlePrevSong}
              onNextSong={handleNextSong}
              onShuffleToggle={handleShuffleToggle}
              isShuffling={isShuffling}
              data-testid="currently-playing"
            />
          )
        )}
      </div>
      <div className="p-3 flex-1 relative">
        {/* Pass the playlist, currentSongId, and onSongSelect to the Playlist component */}
        {loading ? (
          <p>Loading playlist...</p>
        ) : (
          <Playlist
            playlist={playlist}
            currentSongId={currentSongId}
            onSongSelect={handleSongSelect}
          />
        )}
        <div className="absolute inset-0 flex md:flex-col">
          <div className="flex-1 border-slate-300 md:border-l border-t md:border-t-0"></div>
        </div>
      </div>
    </div>
  );
}
