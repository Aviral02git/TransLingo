import React, { useState } from 'react';
import './Quiz.css';

const quizData = [
  {
    question: "What is the Spanish translation of 'Hello'?",
    options: ["Hola", "Bonjour", "Ciao", "Hallo"],
    answer: "Hola"
  },
  {
    question: "What is the meaning of 'Gracias'?",
    options: ["Goodbye", "Thank you", "Please", "Sorry"],
    answer: "Thank you"
  },
  {
    question: "Translate 'Good night' to Spanish.",
    options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hasta luego"],
    answer: "Buenas noches"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-title"> Quick Language Quiz</h3>

      {showResult ? (
        <div className="text-center">
          <p className="result-text">Your Score: {score}/{quizData.length}</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowResult(false);
            }}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div>
          <p className="quiz-question">{quizData[currentQuestion].question}</p>
          <div className="options-grid">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option-button ${
                  selected === option
                    ? option === quizData[currentQuestion].answer
                      ? 'correct'
                      : 'wrong'
                    : ''
                }`}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
