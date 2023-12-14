import { useState } from "react";

const Controls = () => {
  const [volume, setVolume] = useState(50);
  return (
    <>
      <div className="slide-container">
        <h2 id="audio-name">Audio</h2>
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          id="volume"
          step="5"
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <h2>volume: {volume}</h2>
    </>
  );
};

export default Controls;
