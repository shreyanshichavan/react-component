// function Question({ data, selectedOption, onSelect }) {
//   return (
//     <div>
//       <h2>{data.question}</h2>

//       {data.options.map((option, index) => (
//         <div key={index}>
//           <input
//             type="radio"
//             name="option"
//             checked={selectedOption === index}
//             onChange={() => onSelect(index)}
//           />
//           <label>{option}</label>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Question;




// export const questions = [
//   {
//     question: "What does HTML stand for?",
//     options: [
//       "Hyper Tool Markup Language",
//       "Hyper Text Markup Language",
//       "High Text Markup Language",
//       "Hyperlinks Text Mark Language"
//     ],
//     correctAnswer: 1
//   },
//   {
//     question: "What does CSS stand for?",
//     options: [
//       "Creative Style Sheets",
//       "Cascading Style Sheets",
//       "Computer Style Sheets",
//       "Colorful Style Sheets"
//     ],
//     correctAnswer: 1
//   }
// ];




function Question({ question, selectedOption, setSelectedOption }) {

  // 🛑 Safety check (blank screen se bachata hai)
  if (!question) {
    return <p>Loading question...</p>;
  }

  return (
    <div>
      <h2>{question.question}</h2>

      {question.options.map((option, index) => (
        <label key={index} style={{ display: "block" }}>
          <input
            type="radio"
            name="option"
            value={index}
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;
