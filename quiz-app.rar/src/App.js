import './App.css';
import Login from './components/Authentication';
import Quiz  from './components/Questions';
import Home from './components/home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login route (exact path to ensure only the root path matches) */}
        <Route exact path="/" element={<Login />} />
        {/* Home route */}
        <Route exact path ="/home" element={<Home />} />
        <Route exact path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};


export default App;
