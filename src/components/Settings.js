import React from "react";
import { categories, difficulty, amount } from "../triviaSettings";
import "./componentStyles.css";
import { useNavigate } from "react-router-dom";

export default function Settings({getQuestions, setCategory, setDifficulty, setAmount }) {

  const navigate = useNavigate();

  function DisplayCategories() {
    return Object.entries(categories).map((category, index) => {
      return (
        <option key={index} value={category[0]}>
          {category[1]}
        </option>
      );
    });
  }

  function DisplayDifficulty() {
    return Object.entries(difficulty).map((option, index) => {
      return (
        <option key={index} value={option[0]}>
          {option[1]}
        </option>
      );
    });
  }

  function DisplayAmount() {
    return amount.map((option, index) => {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(e.target.category.value)
    setDifficulty(e.target.difficulty.value)
    setAmount(e.target.amount.value)
    getQuestions();
    navigate('/trivia')

  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={e => handleSubmit(e)} className="setting-form">
        <label className="setting-form-label">Category:</label>
        <select className="setting-form-field" name="category">
          <DisplayCategories />
        </select>
        <label className="setting-form-label">Difficulty:</label>
        <select className="setting-form-field" name="difficulty">
          <DisplayDifficulty />
        </select>
        <label className="setting-form-label">Type:</label>
        <select className="setting-form-field" name="type">
          <option value="multiple">Multiple Choice</option>
        </select>
        <label className="setting-form-label">No of Questions:</label>
        <select className="setting-form-field" name="amount">
          <DisplayAmount />
        </select>
        <button className="setting-form-button">Start</button>
      </form>
    </div>
  );
}
