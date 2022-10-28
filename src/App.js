import React, { useEffect, useState } from "react";
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
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.removeItem("trivia");
  });
  return (
    <div className="App">
      <Router>
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
