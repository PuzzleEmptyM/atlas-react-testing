import React from 'react';

interface PlayListItemProps {
  title: string;
  artist: string;
  duration: string;
  className?: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ title, artist, duration, className }) => {
  return (
    <div className={`w-full max-w-lg mt-2.5 ${className}`}>
      <div className="flex justify-between p-2.5">
        <div className="text-left">
          <p className="text-base font-bold">{title}</p>
          <p className="text-gray-600 font-medium">{artist}</p>
        </div>
        <p className="text-gray-400 font-medium text-lg mt-2">{duration}</p>
      </div>
    </div>
  );
};

export default PlayListItem;
