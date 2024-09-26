import React, { useState } from 'react'
import './Game.css'

const Game = () => {

    const [playerVal, setPlayerVal] = useState(null)
    const [computerVal, setComputerVal] = useState(null)
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    

    const gameLogic = (playerVal, computerVal) => {
        if (playerVal === computerVal) {
            return 0
        } else if (
            (playerVal === 'SCISSORS' && computerVal === 'PAPER') || (playerVal === 'ROCK' && computerVal === 'SCISSORS') || (playerVal === 'PAPER' && computerVal === 'ROCK')
        ) {
            return 1
        } else {
            return -1
        }
    }

    const playerChoice =(playerChoice)=>{
        const choices=['ROCK', 'PAPER', 'SCISSORS']
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        const value = gameLogic(playerChoice, computerChoice)

        setComputerVal(computerChoice)
        setPlayerVal(playerChoice)

        if(value === 1){
            setPlayerScore(playerScore + 1)
        }else if(value === -1){
            setComputerScore(computerScore + 1)
        }


    }

    return (
        <div className='container'>
            <h1>Welcome to Rock, Paper, Scissors</h1>
            <div>
                <button onClick={()=>playerChoice("ROCK")}>
                    <i className="fas fa-hand-rock" /> Rock
                </button>
                <button onClick={()=>playerChoice("PAPER")}>
                    <i className="fas fa-hand-paper" /> Paper
                </button>
                <button onClick={()=>playerChoice("SCISSORS")}>
                    <i className="fas fa-hand-scissors" /> Scissors
                </button>
            </div>
            <div className="content">
                <p>Your choice: {playerVal}</p>
                <p>Computer's choice: {computerVal}</p>
                <h2>Your Score: {playerScore}</h2>
                <h2>Computer Score: {computerScore}</h2>
            </div>
        </div>
    )
}

export default Game