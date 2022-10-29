import React from "react";
import { categories, difficulty, amount } from "../triviaSettings";
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
    return Object.entries(difficulty).map((option, index) => {
      return (
        <option key={index} defaultValue={option[0]}>
          {option[1]}
        </option>
      );
    });
  }

  function DisplayAmount() {
    return amount.map((option, index) => {
      return (
        <option key={index} defaultValue={option}>
          {option}
        </option>
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const button = document.querySelector(".setting-form-button");
    button.classList.add("setting-form-button-disable");
    getQuestions();
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="setting-form">
        <label className="setting-form-label">Category:</label>
        <select
          className="setting-form-field"
          name="category"
          onChange={(e) =>
            setCategory(
              Object.keys(categories).find(
                (key) => categories[key] === e.target.value
              )
            )
          }
        >
          <DisplayCategories />
        </select>
        <label className="setting-form-label">Difficulty:</label>
        <select
          className="setting-form-field"
          name="difficulty"
          onChange={(e) =>
            setDifficulty(
              Object.keys(difficulty).find(
                (key) => difficulty[key] === e.target.value
              )
            )
          }
        >
          <DisplayDifficulty />
        </select>
        <label className="setting-form-label">Type:</label>
        <select className="setting-form-field" name="type">
          <option value="multiple">Multiple Choice</option>
        </select>
        <label className="setting-form-label">No of Questions:</label>
        <select
          className="setting-form-field"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        >
          <DisplayAmount />
        </select>
        <button className="setting-form-button">Start</button>
      </form>
    </div>
  );
}
