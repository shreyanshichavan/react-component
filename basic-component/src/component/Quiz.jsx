import { useState } from "react";
import { questions } from "../assets/data/question";
import Question from "./question";
import Result from "./result";
import "../style/quiz.css";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function nextQuestion() {
    if (selectedOption === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  }

  function restartQuiz() {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsFinished(false);
  }

  return (
    <div className="quiz-container">
      {isFinished ? (
        <Result
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <>
          <p>Question {currentIndex + 1} of {questions.length}</p>

          <Question
            question={questions[currentIndex]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <button
            onClick={nextQuestion}
            disabled={selectedOption === null}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default Quiz;
