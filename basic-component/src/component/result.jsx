// function Result({ score, total, onRestart }) {
//   return (
//     <div>
//       <h2>Quiz Completed 🎉</h2>
//       <p>Your Score: {score}</p>
//       <p>Total Questions: {total}</p>

//       <button onClick={onRestart}>Restart Quiz</button>
//     </div>
//   );
// }

// export default Result;


function Result({ score, total, restartQuiz }) {
  return (
    <div>
      <h2>Quiz Finished 🎉</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result;

