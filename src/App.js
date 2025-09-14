import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ChallengesPage from './pages/ChallengesPage';
// import DanceCirclePage from './pages/DanceCirclePage';
// import ChallengesProgressPage from './pages/ChallengesProgressPage';
// import TrackProgressPage from './pages/TrackProgressPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/dance-circle" element={<DanceCirclePage />} />
        <Route path="/challenges-progress" element={<ChallengesProgressPage />} />
        <Route path="/track-progress" element={<TrackProgressPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;