import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Summary from "./pages/summary";
import Trivia from "./pages/trivia";
import Background from "./components/Background";

export default function App() {
  const [category, setCategory] = useState(11);
  const [difficulty, setDifficulty] = useState("easy");
  const [quizType, setType] = useState("multiple");
  const [amount, setAmount] = useState(5);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Router>
        <Background/>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                category={category}
                difficulty={difficulty}
                quizType={quizType}
                amount={amount}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
                setAmount={setAmount}
              />
            }
          ></Route>
          <Route
            path="/trivia"
            element={
              <Trivia category={category} score={score} setScore={setScore} />
            }
          ></Route>
          <Route 
            path="/summary"
            element={
              <Summary
                  setCategory={setCategory}
                  setDifficulty={setDifficulty}
                  setAmount={setAmount}
                  setScore={setScore} 
                  score={score}/>
            }
            ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
