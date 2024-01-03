import React from 'react';

function Home(props) {
    
  const pageup = () => {
    props.pageProp(1);
  };

  return (
    <>
      <div className='start'>
        <h1 className='title'>THE REACT QUIZ</h1>
        <button className="play" onClick={pageup}>PLAY</button>
      </div>
    </>
  );
}

export default Home;
