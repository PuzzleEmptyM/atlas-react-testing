import React, { useState } from 'react';
import back from '../assets/rewind.png';
import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';
import forward from '../assets/fast-forward.png';
import shuffle from '../assets/loop.png';

interface PlayControlsProps {
  currentSongIndex: number;
  totalSongs: number;
  onPrevSong: () => void;
  onNextSong: () => void;
  onShuffleToggle: () => void;
  isShuffling: boolean;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  currentSongIndex,
  totalSongs,
  onPrevSong,
  onNextSong,
  onShuffleToggle,
  isShuffling,
}) => {
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeedChange = () => {
    const newSpeed = speed === 3 ? 1 : speed + 1;
    setSpeed(newSpeed);
    console.log('Speed changed:', newSpeed);
  };

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    console.log('Playing:', !isPlaying);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button className="p-2 bg-primary rounded" onClick={handleSpeedChange}>
        {speed}x
      </button>

      <button className="p-2 bg-primary rounded" onClick={onPrevSong} disabled={currentSongIndex === 0}>
        <img src={back} alt="Rewind" className="w-4 h-4" />
      </button>

      <button className="p-2 bg-primary rounded border-2 border-gray-500" onClick={handlePlayPause}>
        <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? 'Pause' : 'Play'} className="w-4 h-4" />
      </button>

      <button
        className="p-2 bg-primary rounded"
        onClick={onNextSong}
        disabled={currentSongIndex === totalSongs - 1 && !isShuffling}
      >
        <img src={forward} alt="Forward" className="w-4 h-4" />
      </button>

      <button className={`p-2 rounded ${isShuffling ? 'bg-green-200' : 'bg-primary'}`} onClick={onShuffleToggle}>
        <img src={shuffle} alt="Shuffle" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PlayControls;
