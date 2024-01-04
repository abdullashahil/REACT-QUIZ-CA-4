import React, { useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import Home from './components/Home';

function App() {
  const [page, setPage] = useState(0);
  const [score, setScore] = useState(0);
  const [darkmode, setDarkMode] = useState(false);

  const pageUp = (pageNo) => {
    setPage(pageNo);
  };

  if (page === 0) {
    return <Home pageProp={pageUp} />;
  } else if (page === 1) {
    return <QuestionBox darkmode={darkmode} setDarkMode={setDarkMode} pageProp={pageUp} setScore={setScore} />;
  } else if (page === 2) {
    return <Result darkmode={darkmode} pageProp={pageUp} score={score} setScore={setScore} />;
  }
}

export default App;
