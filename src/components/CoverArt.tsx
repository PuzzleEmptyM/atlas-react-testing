import React from 'react';
import img from '../assets/placeholder.svg';

interface CoverArtProps {
  src?: string;
  alt: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ src = img, alt }) => {
  return (
    <div className="w-image-w h-image-h overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default CoverArt;
