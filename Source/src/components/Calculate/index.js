const calculateWinner =  (squares, winLine) => {
    
    const index = squares[squares.length-1];
    const size = Math.sqrt(squares.length - 1 ); 
   
    let col_row_index = indexToColRow(index,size);
    let curRow = col_row_index[1];
    let curCol = col_row_index[0];
    let countWin = 0;
    //horizontal 
    while (curRow < size){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curRow++   
    }
    curRow = col_row_index[1]-1;
    while (curRow >= 0){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curRow--;
    }
  
    if (countWin >=5){
      return  squares[index];
    }
    else{
      countWin = 0;
      curRow = col_row_index[1]
      winLine.splice(0,winLine.length)
    }
    //vertical
    while (curCol < size){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol++
    }
    curCol = col_row_index[0]-1;
    while (curCol >= 0){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol--;
    }
    if (countWin >=5){
      return  squares[index];
    }
    else{
      countWin = 0;
      curCol = col_row_index[0];
      winLine.splice(0,winLine.length)
    }
    //primary diagonal
    while (curCol < size && curRow < size){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol++
      curRow++
    }
    curCol = col_row_index[0]-1;
    curRow = col_row_index[1]-1;
    while (curCol >= 0 && curRow >=0){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol--;
      curRow--;
    }
    if (countWin >=5){
      return  squares[index];
    }
    else{
      countWin = 0;
      curCol = col_row_index[0];
      curRow = col_row_index[1];
      winLine.splice(0,winLine.length)
    }
    //secondary diagonal
   while (curCol < size && curRow >= 0){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol++
      curRow--
    }
    curCol = col_row_index[0] - 1;
    curRow = col_row_index[1] + 1;
    while (curCol >= 0 && curRow < size){
      let curIndex = rowColToIndex([curCol,curRow],size)
      if (squares[index] == squares[curIndex] && squares[index]){
        countWin++;
        winLine.push(curIndex);
      }
      else{
        break
      }
      curCol--;
      curRow++;
    }
    if (countWin >=5){
      return  squares[index];
    } else{
      winLine.splice(0,winLine.length)
    }
   
    if (squares.indexOf(null) == -1){
      return 'Draw'
    }
    return null;
  }

  
  function indexToColRow(index,size){
    return [index % size , Math.floor(index / size) ]
  }
  
  function rowColToIndex(ColRow, size){
    
    return ColRow[0] + ColRow[1]*size ;
}

export default calculateWinner