import React from 'react';
import Square from '../Square';

const Board = ({winLine,squares,onClick}) => {
  const renderSquare = (i) => {
    if (winLine.indexOf(i) == -1){
      return (
        <Square
          winLine = {false}
          value={squares[i]}
          onClick={() => onClick(i)}
        />
      );
    }else{
      return (
        <Square
          winLine = {true}
          value={squares[i]}
          onClick={() =>onClick(i)}
        />
      );
    }
  }
  const renderRow = (startNum, rowNum) => {
    const row = [];
    for (let i =0; i < rowNum; i++){
       row.push(renderSquare(startNum+i));
    }
    return (<div className="board-row">{row}</div>)
  }

  const Board = []
  const size = Math.sqrt( squares.length - 1 );
  for (let i = 0; i < size;i++){
    Board.push(renderRow(i*size,size));
  }
  return (
    <div>
      {Board}
    </div>
  )
}
export default Board;
