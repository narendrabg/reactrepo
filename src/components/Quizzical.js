import React from "react";
import ShowQuestions from "./showQuestions";
export default function Quizzical() {
 const [showQuestions,setShowQuestions] = React.useState(false);
 
 function handleClick() {
  setShowQuestions(true);
 }
 
return (
 showQuestions ? <ShowQuestions /> : (<div className="quizzical--container"> 
 <h2>Quizzical</h2>
 <h4>Test your knowledge</h4>
<button onClick={handleClick}>Start Quiz</button>
</div>)
);
}