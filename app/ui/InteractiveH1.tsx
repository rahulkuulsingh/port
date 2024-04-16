"use client"
import React, { useState } from 'react';

function InteractiveH1() {
  const [isTypoFixed, setIsTypoFixed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleWordClick = () => {
    if (clickCount < 3) { // Limiting the clicks to 3 as an example
      setIsTypoFixed(true);
      setClickCount(prevCount => prevCount + 1);
    }
  };

  const handleResetClick = () => {
    setIsTypoFixed(false);
    setClickCount(0);
  };

  return (
    <h1 className="text-5xl">
      {isTypoFixed ? (
        <>
          <span>Hi, My name is Rahul, I design, code, and cook, I solve digital problems for humans.</span>
          {/* <button onClick={handleResetClick} className="ml-4 text-blue-500">Reset</button> */}
        </>
      ) : (
        <>
          <span>{`Hi, `}
            <span onClick={handleWordClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>me</span> name is Rahul, 
          </span>
          <span>
          <span onClick={handleWordClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>me</span> design, code, and cook, <span onClick={handleWordClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>me</span> solve digital problems for humans.</span>
        </>
      )}
    </h1>
  );
}

export default InteractiveH1;
