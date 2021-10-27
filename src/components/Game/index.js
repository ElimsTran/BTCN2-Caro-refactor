import React, { useState } from 'react';
import Board from '../Board';
import calculateWinner from '../Calculate';

const CONST_SIZE = 10;
const CONST_POW  = 2;

const Game = () => {
    const [history, setHistory] = useState( [ 
        {
          squares: Array(Math.pow(CONST_SIZE, CONST_POW)+1).fill(null),
        }
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [winLine, setWinLine] = useState([]);
    const [xIsNext, setXIsNext] = useState(true);
    const [orderFlag, setOrderFlag] = useState(false);
    const handleClick = (i)=> {
        setWinLine([]) 
        const History = history.slice(0, stepNumber + 1);
        const Current = History[History.length - 1];
        const Squares = Current.squares.slice();
        if (calculateWinner(Squares, winLine) || Squares[i]) {
          return;
        }
        Squares[i] = xIsNext ? "X" : "O";
        Squares[Squares.length-1] = i;
        setHistory(History.concat([
            {
              squares: Squares,
            }
        ]))
        setStepNumber(History.length)
        setXIsNext(!xIsNext)
    }
    
    const jumpTo = (step) => {
        setWinLine([]) 
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
      }
      
    const changeOrder = (input)=>{
        setWinLine([]) 
        setOrderFlag(!input)
    }
    
    const History = history;
    const Current = History[stepNumber];
    
    const winner = calculateWinner(Current.squares, winLine);

    
    var moves = History.map((step, move) => {
        const index = step.squares[step.squares.length-1];
        const size = Math.sqrt(step.squares.length - 1 );
        const desc = move ?
        'Go to move step: ' + move + " - [" + Math.floor(index / size)  + " - " + index % size +"]":
        'Go to game start ' ;
        if (stepNumber === move){
            return (
                <li key={move} className="CurrentStep" >
                    <button onClick={() => jumpTo(move)}>{desc}</button>
                </li>
            );
        }else{
            return (
            <li key={move} >
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
            );
        }
    });
    let status;
    if (winner === 'Draw') {
        status = "This match draw";
    } else if(winner){
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    console.log(winLine)
    return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={Current.squares}
              winLine= {winLine}
              onClick={i => handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
           <button
            onClick={ () => changeOrder(orderFlag)}
            >
            {orderFlag ? "Order Move Step By Descending" : "Order Move Step By Acsending"}
            </button>
            <ol>{orderFlag ? moves : moves.reverse()}</ol>
          </div>
        </div>
    );
}

export default Game;