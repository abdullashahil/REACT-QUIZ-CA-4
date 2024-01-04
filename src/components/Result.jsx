import React, { useState } from 'react'

export default function Result(props) {

  const { darkmode: initialdarkmode } = props;
  const [darkmode, setDarkMode] = useState(initialdarkmode);
  const bgStyle = darkmode ? { background: "rgb(18, 72, 112)" } : {};

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const pageup = () => {
    props.pageProp(0);
    props.setScore(0);
  }

  const scorePercentage = (props.score / 5) * 100;


  return (
    <>
      <div className="main2" style={bgStyle}>

        <nav className="nav1">
          <h1 className='kalvium'>KALVIUM</h1>
          <button className="toggle-theme" onClick={toggleDarkMode}>{darkmode ? 'LIGHT' : 'DARK'}</button>
        </nav>

        <div className="result-box">
          <h1 className="result-title">Final Results</h1>
          <h3 className="score">{props.score} out of 5 correct - {scorePercentage}%</h3>

          <button className="reset-game" onClick={pageup}>Reset Game</button>
        </div>
      </div>

    </>
  )
}
