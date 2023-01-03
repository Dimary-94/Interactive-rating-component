import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FeedbackPage from './pages/FeedbackPage';
import RatingPage from './pages/RatingPage';

import { HeroWrapper } from './components/Rating/styled';

function App() {
  return (
    <div className="App">
      <HeroWrapper>
        <Router>
          <Routes>
            <Route path='/' element={<RatingPage />} />
            <Route path='/feedback' element={<FeedbackPage />} />
          </Routes>
        </Router>
      </HeroWrapper>
    </div>
  );
}

export default App;
