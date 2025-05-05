import React from 'react';
import './App.css';
import './css/general.css';
import backgroundVideo from './assets/AdobeStock_142803167_Video_HD_Preview.mov';

function App() {
  return (
    <div className="container">
      <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
