import React from 'react';
import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import './output.css';

function App() {
  return (
    <div className="h-full bg-primary flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
