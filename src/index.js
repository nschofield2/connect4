import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

function Cell({value, onClick}) {
  return (
      <Button onClick={onClick}>
        {value}
      </Button>
  )
}

function GameBoard () {
  const[cells, setCell] = useState(Array(42).fill(null));
  const[isBlueTurn, setBlueTurn] = useState(true);
  const winner = calculateWinner(cells);

  //renders the connect-4 game board
    return (
      <div> 
        <div>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
          {renderCell(6)}
        </div>
        <div>
          {renderCell(7)}
          {renderCell(8)}
          {renderCell(9)}
          {renderCell(10)}
          {renderCell(11)}
          {renderCell(12)}
          {renderCell(13)}
        </div>
        <div>
          {renderCell(14)}
          {renderCell(15)}
          {renderCell(16)}
          {renderCell(17)}
          {renderCell(18)}
          {renderCell(19)}
          {renderCell(20)}
        </div>
        <div>
          {renderCell(21)}
          {renderCell(22)}
          {renderCell(23)}
          {renderCell(24)}
          {renderCell(25)}
          {renderCell(26)}
          {renderCell(27)}
        </div>
        <div>
          {renderCell(28)}
          {renderCell(29)}
          {renderCell(30)}
          {renderCell(31)}
          {renderCell(32)}
          {renderCell(33)}
          {renderCell(34)}
        </div>
        <div>
          {renderCell(35)}
          {renderCell(36)}
          {renderCell(37)}
          {renderCell(38)}
          {renderCell(39)}
          {renderCell(40)}
          {renderCell(41)}
        </div>
        <div>{isGameWon()}</div>
      </div>
    )

    function renderCell(val) {
      return (
        <Cell value = {cells[val]} onClick={() => {
          const duplicateCells = cells.slice(0, 41);

          if (duplicateCells[val] === null && winner === null) { //checks if the cell has not been clicked and that no one has won yet
            duplicateCells[val] = isBlueTurn ? 'X' : 'O'; //sets the value of a duplicate cell to either 'X' or 'O' depending on who's turn it is
            setCell(duplicateCells); //sets the value of the actual cell
            setBlueTurn(!isBlueTurn) //changes turns
          }

        }}/>
      )
    }

    function isGameWon() {
      if (winner != null) { //if someone won the game
        return "Winner: " + winner; //output the winner
      }
    }
}

ReactDOM.render(
    <GameBoard/>,
  document.getElementById('root')
);

function calculateWinner(cells) {
  //all possible winning combos in an array
  const posCombos = [
    
    [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
    
    [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
    
    [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
    
    [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
    
    [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
    
    [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],
    
    [0,7,14,21],[7,14,21,28],[14,21,28,35],
   
    [1,8,15,22],[8,15,22,29],[15,22,29,36],
    
    [2,9,16,23],[9,16,23,30],[16,23,30,37],
    
    [3,10,17,24],[10,17,24,31],[17,24,31,38],
    
    [4,11,18,25],[11,18,25,32],[18,25,32,39],
    
    [5,12,19,26],[12,19,26,33],[19,26,33,40],
    
    [6,13,20,27],[13,20,27,34],[20,27,34,41]
  ];

  for (let x = 0; x < posCombos.length; x++) { //scans through entire possible win combination array
    const [a, b, c, d] = posCombos[x]; //creates an array out of an element of the possible win combination 
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c] && cells[a] === cells[d]) { //if all cells belong to the same team-
      return cells[a]; //return the winning team's name-
    }
  }
  return null; //return null if there is no winner yet
}
