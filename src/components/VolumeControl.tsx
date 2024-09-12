import React, { useState } from 'react';
import volumeIcon from '../assets/medium-volume.png';
import muteIcon from '../assets/mute.png';

const VolumeControl = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    e.target.style.background = `linear-gradient(to right, gray ${newValue}%, white ${newValue}%)`;
  };

  return (
    <div className="flex items-center space-x-2 mt-6">
      <img 
        src={value === 0 ? muteIcon : volumeIcon} 
        alt={value === 0 ? "Mute" : "Volume"} 
        className="w-5 h-5" 
      />
      <input
        id="small-range"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-48 p-1 h-2 rounded-lg appearance-none cursor-pointer bg-gray-20 range-sm"
        style={{
          background: `linear-gradient(to right, gray ${value}%, white ${value}%)`,
          border: `1px solid black`
        }}
      />
    </div>
  );
};

export default VolumeControl;
