import React from 'react';

interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{artist}</p>
    </div>
  );
};

export default SongTitle;
