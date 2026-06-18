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
        if (activePlayer.mark == "X") {
            Gameboard.board[rowInput][columnInput].mark = "X";
            checkWinner();
            activePlayer = players[1];
            return Gameboard.board;

        } else {
            Gameboard.board[rowInput][columnInput].mark = "O";
            activePlayer = players[0];
            checkWinner();
            return Gameboard.board;
        }
    }

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

            winConditionColumn1 = Gameboard.board.some(
                cell => {
                    Gameboard.board[0][0].mark == activePlayer.mark &&
                    Gameboard.board[1][0].mark == activePlayer.mark &&
                    Gameboard.board[2][0].mark == activePlayer.mark 
                }
            ),

            winConditionColumn2 = Gameboard.board.some(
                cell => {
                    Gameboard.board[0][1].mark == activePlayer.mark &&
                    Gameboard.board[1][1].mark == activePlayer.mark &&
                    Gameboard.board[2][1].mark == activePlayer.mark 
                }
            ),

            winConditionColumn3 = Gameboard.board.some(
                cell => {
                    Gameboard.board[0][2].mark == activePlayer.mark &&
                    Gameboard.board[1][2].mark == activePlayer.mark &&
                    Gameboard.board[2][2].mark == activePlayer.mark 
                }
            ),

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
            console.log(`${activePlayer.name} is the winner!`);

            Gameboard.board.map(outerArr => 
                outerArr.map(innerArr => 
                   innerArr.mark = ""
                )
            )
        }
    }

    return {playerMarkCell, checkWinner};
})();

console.log(gameController.playerMarkCell(0, 0));
console.log(gameController.playerMarkCell(2, 0));
console.log(gameController.playerMarkCell(1, 1));
console.log(gameController.playerMarkCell(2, 1));
console.log(gameController.playerMarkCell(2, 2));
