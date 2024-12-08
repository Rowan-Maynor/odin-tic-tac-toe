let currentPlayer = "X";
const gridCells = document.querySelectorAll(".grid-cell");
const statusMessage = document.querySelector("#game-status");
const resetBtn = document.querySelector("#reset-btn");

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

gridCells.forEach((cell) => {
    cell.addEventListener("click", ()=>{
        if (statusMessage.textContent != `Player ${currentPlayer} Wins!` ||
            statusMessage.textContent != "Draw!"
        ) {
            cell.textContent = currentPlayer;
            changePlayerTurn();
            checkForWinner();
        }
    }, {once:true});
});

resetBtn.addEventListener("click", resetGame);

function changePlayerTurn() {
    currentPlayer == "X" ? (currentPlayer = "O", 
        statusMessage.textContent = `Player ${currentPlayer}'s Turn`) 
    : (currentPlayer = "X",
        statusMessage.textContent = `Player ${currentPlayer}'s Turn`);
}

function checkForWinner() {
    let isDraw = true;

    for (let i = 0; i < winConditions.length; i++){
        const cellA = gridCells[winConditions[i][0]].textContent;
        const cellB = gridCells[winConditions[i][1]].textContent;
        const cellC = gridCells[winConditions[i][2]].textContent;

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        } else if (cellA == cellB && cellA == cellC) {
            changePlayerTurn();
            statusMessage.textContent = `Player ${currentPlayer} Wins!`;
            return;
        }  
    }
    
    gridCells.forEach(cell => {
        if(cell.textContent == "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        statusMessage.textContent = "Draw!"
    }
}

function resetGame() {
    location.reload();
}