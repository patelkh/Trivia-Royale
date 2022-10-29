import React from "react";
import { categories, difficulty as diffOptions, amount as amountOptions } from "../triviaSettings";
import "./componentStyles.css";

export default function Settings({
  getQuestions,
  setCategory,
  setDifficulty,
  setAmount,
}) {
  function DisplayCategories() {
    return Object.entries(categories).map((category, index) => {
      return (
        <option key={index} defaultValue={category[0]}>
          {category[1]}
        </option>
      );
    });
  }

  function DisplayDifficulty() {
    return Object.entries(diffOptions).map((option, index) => {
      return (
        <option key={index} defaultValue={option[0]}>
          {option[1]}
        </option>
      );
    });
  }

  function DisplayAmount() {
    return amountOptions.map((option, index) => {
      return (
        <option key={index} defaultValue={option}>
          {option}
        </option>
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let category = Object.keys(categories).find(
      (key) => categories[key] === e.target.category.value
    )
    let difficulty = Object.keys(diffOptions).find(
      (key) => diffOptions[key] === e.target.difficulty.value
    )
    let amount = parseInt(e.target.amount.value) 
    setCategory(category)
    setDifficulty(difficulty)
    setAmount(amount)
    const button = document.querySelector(".setting-form-button");
    button.classList.add("setting-form-button-disable");
    getQuestions(category, difficulty, amount);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="setting-form">
        <label className="setting-form-label">Category:</label>
        <select
          className="setting-form-field"
          id="category"
          name="category"
        >
          <DisplayCategories />
        </select>
        <label className="setting-form-label">Difficulty:</label>
        <select
          className="setting-form-field"
          id="difficulty"
          name="difficulty"
        >
          <DisplayDifficulty />
        </select>
        <label className="setting-form-label">Type:</label>
        <select className="setting-form-field" id="type" name="type">
          <option value="multiple">Multiple Choice</option>
        </select>
        <label className="setting-form-label">No of Questions:</label>
        <select
          className="setting-form-field"
          id="amount"
          name="amount"
        >
          <DisplayAmount />
        </select>
        <button type="submit" className="setting-form-button">
          Start
        </button>
      </form>
    </div>
  );
}
