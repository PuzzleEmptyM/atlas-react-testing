import React from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
import SongTitle from './SongTitle';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  cover: string;
}

interface CurrentlyPlayingProps {
  song: Song;
  currentSongIndex: number;
  totalSongs: number;
  onPrevSong: () => void;
  onNextSong: () => void;
  onShuffleToggle: () => void;
  isShuffling: boolean;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  song,
  currentSongIndex,
  totalSongs,
  onPrevSong,
  onNextSong,
  onShuffleToggle,
  isShuffling,
}) => {
  return (
    <div className="flex flex-col justify-center p-4">
      {/* Pass cover art from song prop */}
      <CoverArt src={song.cover} alt={song.title} />
      <div className="mt-4">
        {/* Dynamically pass song title and artist */}
        <SongTitle title={song.title} artist={song.artist} />
      </div>
      <div className="mt-6">
        <PlayControls
          currentSongIndex={currentSongIndex}
          totalSongs={totalSongs}
          onPrevSong={onPrevSong}
          onNextSong={onNextSong}
          onShuffleToggle={onShuffleToggle}
          isShuffling={isShuffling}
        />
      </div>
      <div className="mt-4 w-full flex justify-center">
        <VolumeControl />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
