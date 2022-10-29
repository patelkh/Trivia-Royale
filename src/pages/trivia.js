import React, { useEffect, useState } from "react";
import "./pageStyles.css";
import { categories } from "../triviaSettings";
import TriviaCard from "../components/TriviaCard";
import { useNavigate } from "react-router-dom";

export default function Trivia({ category, score, setScore, resetState}) {
  const [title, setTitle] = useState("");
  const [triviaData, setTrivia] = useState(
    JSON.parse(localStorage.getItem("trivia"))
  );
  const [triviaIndex, setTriviaIndex] = useState(0);
  const [questionNum, setQNum] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    triviaData[triviaIndex]
  );
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(categories[category]);
    if (currentQuestion === undefined) {
      alert("Unable to fetch data from Open Trivia Database");
      navigate("/");
    } else {
      getNextQuestion();
    }
  }, [step]);

  function getNextQuestion() {
    if (triviaIndex === 0) {
      setTriviaIndex(triviaIndex + 1);
    } else {
      setTriviaIndex(triviaIndex + 1);
      setQNum(questionNum + 1);
      setCurrentQuestion(triviaData[triviaIndex]);
    }
  }

  function updateStep() {
    if (questionNum < triviaData.length) {
      setStep(step + 1);
    } else if (questionNum === triviaData.length) {
      showSummary();
    }
  }

  function showSummary() {
    setScore(score);
    navigate("/summary");
  }

  function computeScore(answer, correct_answer) {
    if (answer === correct_answer) {
      setScore(score + 1);
    }
  }

  function goHome() {
    resetState()
    navigate("/");
  }

  return (
    <div className="trivia-header">
      <h1 className="heading">Trivia Topic: {title}</h1>
      <div className="trivia-container">
        <div className="trivia-stats">
          <p>
            <b>Question:</b> {questionNum} of {triviaData.length}
          </p>
          <p>
            <b>Score:</b> {score}
          </p>

          {currentQuestion && (
            <div className="question-container">
              <TriviaCard
                computeScore={computeScore}
                currentQuestion={currentQuestion}
              />
              <button className="trivia-cancel-button" onClick={goHome}>
                Cancel
              </button>
              <button className="trivia-next-button" onClick={updateStep}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
