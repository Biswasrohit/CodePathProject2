import React from "react";
import { useState } from "react";

const App = ({ card }) => {
  const [isQuestion, setIsQuestion] = useState(true);

  const toggleCard = () => {
    setIsQuestion(!isQuestion);
  };

  return (
    <div className={`flashcard ${card.category}`} onClick={toggleCard}>
      <p>{isQuestion ? card.question : card.answer}</p>
    </div>
  );
};

export default App;
