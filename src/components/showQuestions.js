import React from "react";
import axios from "axios";

export default function ShowQuestions() {
 const [apiData, setApiData] = React.useState([]);
 const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [correctAnswers, setCorrectAnswers] = React.useState(0);
 React.useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple')
      .then(response => {
        setApiData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching API:', error);
      });
  }, []);

  const handleAnswerSelection = (selectedOption, correctAnswer) => {
    setSelectedAnswer(selectedOption);

    if (selectedOption === correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleCheckAnswers = () => {
    let count = 0;
    apiData.forEach((question, index) => {
      if (selectedAnswer === question.correct_answer) {
        count++;
      }
    });
    setCorrectAnswers(count);
  };
  let content;
      if (apiData.length !== 0) {
        content = (
          <div>
          {apiData.map((question, index) => (
          
          <div key={index} className="Questions--row">
      <h3 className="">{question.question}</h3>
      <div className="Questions--button">
      {question.incorrect_answers.map((incorrectAnswer, i) => (
        <button key={i} 
        onClick={() => handleAnswerSelection(incorrectAnswer, question.correct_answer)}
              className={`Questions--select--button ${selectedAnswer === incorrectAnswer ? 'selected' : ''}`}
            >{incorrectAnswer}</button>
      ))}      
      <button key={index} onClick={() => handleAnswerSelection(question.correct_answer, question.correct_answer)}
            className={`Questions--select--button ${selectedAnswer === question.correct_answer ? 'selected' : ''}`}
          >{question.correct_answer}</button>
      </div>
      </div>))};
      <div className="checkAnswersBtn">
      <button onClick={handleCheckAnswers}>Check Answers</button>
      <p>Selected Answer: {selectedAnswer}</p>
      <p>Correct Answers: {correctAnswers}</p>
      </div>
      </div>)}
 return (
    <div className="Questions--container">
      {content}    
    </div>);
}