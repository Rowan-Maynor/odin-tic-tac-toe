let currentPlayer = "X";
const gridCells = document.querySelectorAll(".grid-cell");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];

console.log(winConditions);

gridCells.forEach((cell) => {
    cell.addEventListener("click", ()=>{
        cell.textContent = currentPlayer;
        changePlayerTurn();
    }, {once:true});
});

function changePlayerTurn() {
    currentPlayer == "X" ? currentPlayer = "O" : currentPlayer = "X";
}

function checkForWinner() {
    winConditions.forEach((condition) =>{
        const cellA = gridCells[condition[0]].textContent;
        const cellB = gridCells[condition[1]].textContent;
        const cellC = gridCells[condition[2]].textContent;

        if (cellA == cellB == cellC) {
            changePlayerTurn();
            console.log(`Winner is ${currentPlayer}!`);
        }
    })
}