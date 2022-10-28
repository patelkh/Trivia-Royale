import React from "react";
import Settings from "../components/Settings";
import './pageStyles.css'


export default function Home() {
    return (
        <div className="home-header">
            <h1>Trivia Royale</h1>
        <div className="home-container">
            <Settings/>
        </div>
        </div>
    )
}