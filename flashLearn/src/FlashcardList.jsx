import React from "react";
import { useState } from "react";
import App from "./App";

const FlashcardList = () => {
  const [cards] = useState([
    { question: "What is the capital of France?", answer: "Paris" },
    { question: 'Who wrote "Hamlet"?', answer: "William Shakespeare" },
    { question: "What is the square root of 64?", answer: "8" },
  ]);

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(randomIndex);
  };

  return (
    <div className="flashcard-app">
      <h1>Flashcard Study App</h1>
      <p>A simple app to help you study. Total Cards: {cards.length}</p>
      <Flashcard card={cards[currentCard]} />
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
};

export default FlashcardList;
