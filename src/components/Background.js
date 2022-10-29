import React from "react";
import './componentStyles.css';
import '../App.css';
import Ocean from '../assets/images/ocean.jpg'
import Balloons from '../assets/images/balloons.jpg'
import Fields from '../assets/images/fields.jpg'
import Yosemite from '../assets/images/yosemite.jpg'


export default function Background() {
    function handleBackground(e, path) {
        e.preventDefault()
        let background = document.querySelector('.App')
        background.style.backgroundImage = `url(${path})`
    }
    return (
        <div className="background-header">
        <div className="background-container">
            <div className="background">
                <img onClick={(e) => handleBackground(e, Ocean)} className="background-image" alt="Ocean" src={Ocean}></img>
                <img onClick={(e) => handleBackground(e, Balloons)} className="background-image" alt="Balloons" src={Balloons}></img>
                <img onClick={(e) => handleBackground(e, Fields)} className="background-image" alt="Fields" src={Fields}></img>
                <img onClick={(e) => handleBackground(e, Yosemite)} className="background-image" alt="Yosemite" src={Yosemite}></img>
            </div>
        </div>
        </div>
    )
}