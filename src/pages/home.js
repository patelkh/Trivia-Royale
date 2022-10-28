import React from "react";
import Settings from "../components/Settings";
import './pageStyles.css'


export default function Home({getQuestions, setCategory, setDifficulty, setAmount}) {
    return (
        <div className="home-header">
            <h1>Trivia Royale</h1>
        <div className="home-container">
            <Settings 
                getQuestions={getQuestions}
                setCategory={setCategory}
                setDifficulty={setDifficulty}
                setAmount={setAmount}
            />
        </div>
        </div>
    )
}