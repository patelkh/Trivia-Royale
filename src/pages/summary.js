import React, { useState } from "react";
import "./pageStyles.css";
import { useNavigate } from "react-router-dom";

export default function Summary({ setCategory, setDifficulty, setAmount, setScore, score }) {
  const [triviaData, setTriviaData] = useState(
    JSON.parse(localStorage.getItem("trivia"))
  );
  const navigate = useNavigate()

  function returnHome() {
    localStorage.removeItem("trivia");
    setCategory(11)
    setDifficulty('easy')
    setAmount(5)
    setScore(0)
    navigate('/')
  }

  return (
    <div className="summary-header">
      <h1 className="heading">Summary</h1>
      <div className="summary-container">
        <div>
          <h4>
            Trivia Score: {score}/{triviaData.length}{" "}
          </h4>
        </div>
        <button 
        onClick={returnHome}className="summary-home-button">Home</button>
      </div>
    </div>
  );
}
