import React, { useState } from 'react'
import questions from '../questions.js'

export default function QuestionBox(props) {

  const [index, setIndex] = useState(0);
  const { darkmode, setDarkMode } = props;
  const [highlight, setHighlight] = useState(false);
  const [score, setScore] = useState(0);


  const bgStyle = darkmode ? { background: "rgb(18, 72, 112)" } : {};
  const textColor = highlight ? { color: "#ff0000" } : {};


  const toggleHighlight = () => {
    setHighlight(true);
  };

  const removeHighlight = () => {
    setHighlight(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };


  const optionClick = (isCorrect) => {
    if (isCorrect) {
      console.log('correct answer')
      props.setScore((prevScore) => prevScore + 1);
      console.log(score)

    }

    setIndex((prevIndex) => {
      if (prevIndex < 4) {
        return prevIndex + 1;
      } else {
        props.pageProp(2);
        return prevIndex;
      }
    });
  };


  return (
    <>
      <div className="main" style={bgStyle}>

        <nav className="nav1">
          <h1 className='kalvium'>KALVIUM</h1>
          <button className="toggle-theme" onClick={toggleDarkMode}>{darkmode ? 'LIGHT' : 'DARK'}</button>
        </nav>

        <div className="q-box">
          <h3 className="qno">Question: {[index + 1]} out of 5</h3>
          <h1 className="question" style={textColor}>{questions[index].text}</h1>


          <div className="option-box">
            {questions[index].options.map((option) => (
              <button
                key={option.id}
                onClick={() => optionClick(option.isCorrect)}
                className={`option`}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="toggle-highlight">
            <button className="highlight" onClick={toggleHighlight}>Highlight</button>
            <button className="remove-highlight" onClick={removeHighlight}>Remove highlight</button>
          </div>
        </div>
      </div>

    </>
  )
}
