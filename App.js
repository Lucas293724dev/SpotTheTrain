import React from 'react';
import Header from './components/Header';
import TikTokStats from './components/TikTokStats';
import Gallery from './components/Gallery';
import TrainModal from './components/TrainModal';
import AnimatedTrainBackground from './components/AnimatedTrainBackground';

function App() {
  return (
    <div className="App">
      <AnimatedTrainBackground />
      <Header />
      <TikTokStats />
      <Gallery />
      <TrainModal />
    </div>
  );
}

export default App;