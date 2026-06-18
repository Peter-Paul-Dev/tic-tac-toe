const Gameboard = (function gameboard () {
    let board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            gridCell = {
                mark: ""
            }
            board[i].push(gridCell);
    }
  }
    return {board};
})();

const players = [
    {
        name: "Player One",
        mark: "X"
    },

    {
        name: "Player Two",
        mark: "O"
    },
];

const gameController = (function () {
    let activePlayer = players[0];

    function playerMarkCell (rowInput, columnInput) {
        const selectedCell = Gameboard.board[rowInput][columnInput];

        if (selectedCell.mark !== "") {
            console.log("This cell is already marked");
            return;
        }

        if (activePlayer == players [0]) {
            selectedCell.mark = activePlayer.mark;
            checkWinner();
            console.log(Gameboard.board);
            
            
        } else if (activePlayer == players[1]) {
            selectedCell.mark = "O";
            checkWinner();
            console.log(Gameboard.board);
            
        }
    }

    function changeActivePlayer () {
        if (activePlayer == players[0]) {
            activePlayer = players [1];
            return activePlayer;
        }

        if (activePlayer == players[1]) {
            activePlayer = players[0];
            return activePlayer;
        }
    }

    let roundResult = "";

    function checkWinner() {
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

            activePlayer = players[0];

            Gameboard.board.map(outerArr => 
                outerArr.map(innerArr => 
                   innerArr.mark = ""
                )
            )

            roundResult = `${activePlayer.name} is the winner!`;
            console.log(roundResult);
            return roundResult;

        } else {
            changeActivePlayer();
        }
    }

    return {playerMarkCell, checkWinner};
})();

console.log(gameController.playerMarkCell(0, 0));
console.log(gameController.playerMarkCell(2, 0));
console.log(gameController.playerMarkCell(1, 1));
console.log(gameController.playerMarkCell(2, 1));
console.log(gameController.playerMarkCell(2, 2));

