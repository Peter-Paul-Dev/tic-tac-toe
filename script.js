const Gameboard = (function gameboard () {
    let board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
           let gridCell = {
                mark: "",
                rowCoordinate: `${i}`,
                columnCoordinate: `${j}`
            }
            board[i].push(gridCell);
        }
    }

    return {board};
})();

const players = [
    {
        name: "Player One",
        mark: "X",
    },

    {
        name: "Player Two",
        mark: "O",
    },
];

const gameController = (function () {
    let activePlayer = players[0];
    let roundResult = "";

    function playerMarkCell (rowInput, columnInput) {
        const selectedCell = Gameboard.board[rowInput][columnInput];

        if (selectedCell.mark !== "") {
            alert("This cell is already marked");
            return;
        }

        if (activePlayer == players[0]) {
            selectedCell.mark = activePlayer.mark;
                    
        } else if (activePlayer == players[1]) {
            selectedCell.mark = "O";
        }
    }

    function changeActivePlayer () {
        if (activePlayer == players[0]) {
            activePlayer = players[1];
            return activePlayer;
        }

        if (activePlayer == players[1]) {
            activePlayer = players[0];
            return activePlayer;
        }
    }

    function checkWinner(para) {
        const winningConditions = [
            winConditionRow1 = 
                    Gameboard.board[0][0].mark == activePlayer.mark &&
                    Gameboard.board[0][1].mark == activePlayer.mark &&
                    Gameboard.board[0][2].mark == activePlayer.mark,

            winConditionRow2 = 
                    Gameboard.board[1][0].mark == activePlayer.mark &&
                    Gameboard.board[1][1].mark == activePlayer.mark &&
                    Gameboard.board[1][2].mark == activePlayer.mark,
            
            winConditionRow3 = 
                    Gameboard.board[2][0].mark == activePlayer.mark &&
                    Gameboard.board[2][1].mark == activePlayer.mark &&
                    Gameboard.board[2][2].mark == activePlayer.mark,

            winConditionColumn1 = 
                    Gameboard.board[0][0].mark == activePlayer.mark &&
                    Gameboard.board[1][0].mark == activePlayer.mark &&
                    Gameboard.board[2][0].mark == activePlayer.mark,

            winConditionColumn2 = 
                    Gameboard.board[0][1].mark == activePlayer.mark &&
                    Gameboard.board[1][1].mark == activePlayer.mark &&
                    Gameboard.board[2][1].mark == activePlayer.mark,

            winConditionColumn3 = 
                    Gameboard.board[0][2].mark == activePlayer.mark &&
                    Gameboard.board[1][2].mark == activePlayer.mark &&
                    Gameboard.board[2][2].mark == activePlayer.mark,

            winConditionDiagonal1 = 
                    Gameboard.board[0][0].mark == activePlayer.mark &&
                    Gameboard.board[1][1].mark == activePlayer.mark &&
                    Gameboard.board[2][2].mark == activePlayer.mark,

            winConditionDiagonal2 = 
                    Gameboard.board[0][2].mark == activePlayer.mark &&
                    Gameboard.board[1][1].mark == activePlayer.mark &&
                    Gameboard.board[2][0].mark == activePlayer.mark,
        ]
         
        if (winningConditions.some(value => value == true)) {
            roundResult = `${activePlayer.name} is the winner!`;
            activePlayer = players[0];

            Gameboard.board.forEach(outerArr => outerArr.forEach(innerArr => innerArr.mark = ""));
            para.textContent = roundResult;
        } 
        
        else {
            changeActivePlayer();
        }

        return roundResult;
    }

    return {playerMarkCell, checkWinner, changeActivePlayer, activePlayer, roundResult};
    }
)();

const displayController = (function () {
    const rows = 3;
    const columns = 3;
    const container = document.querySelector(".container");
    const boardTiles = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const tileRowCoordinate = Gameboard.board[i][j].rowCoordinate;
            const tileColumnCoordinate = Gameboard.board[i][j].columnCoordinate;

            const tileOfBoard = document.createElement("div");
            tileOfBoard.classList.add("tile");
            tileOfBoard.dataset.rowCoor = tileRowCoordinate;
            tileOfBoard.dataset.columnCoor = tileColumnCoordinate;
            container.appendChild(tileOfBoard);
            boardTiles.push(tileOfBoard);
        }
    }

    const resultOfGame = document.createElement("p");
    container.appendChild(resultOfGame);


    function clearBoard() {
            Gameboard.board.forEach(outerArr => outerArr.forEach(innerArr => innerArr.mark = ""));
            boardTiles.forEach(tile => tile.textContent = "");
            resultOfGame.textContent = "";
        }

     boardTiles.forEach(tile => tile.addEventListener("click", () => {
        gameController.playerMarkCell(tile.dataset.rowCoor, tile.dataset.columnCoor);
        tile.textContent = Gameboard.board[tile.dataset.rowCoor][tile.dataset.columnCoor].mark
        gameController.checkWinner(resultOfGame);
    }));

    const reset = document.createElement("button");
    reset.textContent = "Clear board";
    reset.addEventListener("click", clearBoard);
    container.appendChild(reset);

    document.getElementById("change-names").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const playerOneName = formData.get("playerOneName");
    const playerTwoName = formData.get("playerTwoName");
        
    players[0].name = playerOneName
    players[1].name = playerTwoName;
    });
})();