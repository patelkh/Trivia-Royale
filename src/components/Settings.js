import React from "react";
import { categories, difficulty, amount } from "../triviaSettings";
import './componentStyles.css'

export default function Settings() {
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

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form className="setting-form">
        <label className="setting-form-label">Category:</label>
        <select className="setting-form-field">
          <DisplayCategories />
        </select>
        <label className="setting-form-label">Difficulty:</label>
        <select className="setting-form-field">
          <DisplayDifficulty />
        </select>
        <label className="setting-form-label">Type:</label>
        <select className="setting-form-field">
          <option value="multiple">Multiple Choice</option>
        </select>
        <label className="setting-form-label">No of Questions:</label>
        <select className="setting-form-field">
          <DisplayAmount />
        </select>
        <button className="setting-form-button">Start</button>
      </form>
    </div>
  );
}
