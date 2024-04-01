import React from 'react';

import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/quiz'); 
  };

  return (
    <div className="home-container">
      <div className="background-animation"></div>
      <div className="content">
        <h1>Welcome to the Quiz Master!</h1>
        <p>Test your knowledge and challenge your friends with engaging quizzes.</p>
        <button onClick={handleStartQuiz}>Start the Quiz</button>
      </div>
    </div>
  );
};

export default Home;


