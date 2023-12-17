import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const countdown = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts or when timeRemaining changes
    return () => clearTimeout(countdown);

  }, [timeRemaining]);

  useEffect(() => {
    // Check if timeRemaining has reached 0
    if (timeRemaining === 0) {
      // Reset timeRemaining to 10 seconds
      setTimeRemaining(10);
      
      // Trigger the onAnswered callback with a value of false
      onAnswered(false);
}})







  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
