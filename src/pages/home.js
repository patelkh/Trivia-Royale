import React from "react";
import { useNavigate } from "react-router-dom";
import Settings from "../components/Settings";
import './pageStyles.css'


export default function Home({category, difficulty, quizType, amount, setCategory, setDifficulty, setAmount}) {
    const navigate = useNavigate()

    const getQuestions = async () => {
        let openTriviaURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${quizType}`;

        try {
          const response = await fetch(openTriviaURL);
          const data = await response.json();
          const results = await generateTrivia(data);
          localStorage.setItem('trivia', JSON.stringify(results))
          navigate('/trivia')
        } catch (error) {
          console.log(error);
        }
      };
    
      async function generateTrivia(data) {
        let questions = [];
        let correct = [];
        let answers = [];
        for (let key in data) {
          for (let obj in data[key]) {
            questions.push(data[key][obj].question);
            correct.push(data[key][obj].correct_answer);
            let answer = [];
            for (let i in data[key][obj].incorrect_answers) {
              answer.push(data[key][obj].incorrect_answers[i]);
            }
            answer.push(data[key][obj].correct_answer);
            answer = answer.sort(() => Math.random() - 0.5);
            answers.push(answer);
          }
        }
    
        let triviaDictionary = [];
        for (let j = 0; j < questions.length; j++) {
          const triviaNode = [[questions[j]], [answers[j]], [correct[j]]];
          triviaDictionary.push(triviaNode);
        }
        return triviaDictionary;
      }
    return (
        <div className="home-header">
            <h1 className="heading">Trivia Royale</h1>
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