import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Home from "./pages/home";

export default function App() {
  const [category, setCategory] = useState(11)
  const [difficulty, setDifficulty] = useState('easy')
  const [quizType, setType] = useState('multiple')
  const [amount, setAmount] = useState(5)
  const [finalScore, setFinalScore] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}


