import React from 'react';

const Square = ({winLine, onClick, value}) =>
(
    <button 
        className={`square  ${winLine ? 'winLine' : null}`} 
        onClick={onClick}
    >
        {value}
    </button>
);

export default Square;