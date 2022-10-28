import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Trivia from "./pages/trivia";

export default function App() {
  const [category, setCategory] = useState(11);
  const [difficulty, setDifficulty] = useState("easy");
  const [quizType, setType] = useState("multiple");
  const [amount, setAmount] = useState(5);
  const [trivia, setTrivia] = useState([]);
  const [finalScore, setFinalScore] = useState(0);

  const getQuestions = async () => {
    let openTriviaURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${quizType}`;

    try {
      const response = await fetch(openTriviaURL);
      const data = await response.json();
      const results = await generateTrivia(data);
      setTrivia(results);
      console.log(`API data: ${trivia}`)
    } catch (error) {
      console.log(error);
    }
  };

  async function generateTrivia(data) {
    let questions = [];
    let correct = [];
    let answers = [];
    for (let key in data) {
      for (let obj in data[key]) {
        questions.push(data[key][obj].question);
        correct.push(data[key][obj].correct_answer);
        let answer = [];
        for (let i in data[key][obj].incorrect_answers) {
          answer.push(data[key][obj].incorrect_answers[i]);
        }
        answer.push(data[key][obj].correct_answer);
        answer = answer.sort(() => Math.random() - 0.5);
        answers.push(answer);
      }
    }

    let triviaDictionary = [];
    for (let j = 0; j < questions.length; j++) {
      const triviaNode = [[questions[j]], [answers[j]], [correct[j]]];
      triviaDictionary.push(triviaNode);
    }
    return triviaDictionary;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getQuestions={getQuestions}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
                setAmount={setAmount}
              />
            }
          ></Route>
          <Route
            path="/trivia"
            element={
              <Trivia />
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
