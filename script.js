const Gameboard = (function gameboard () {
    let board = [];
    const rows = 3;
    const columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            gridColumn = {
                mark: ""
            }
            board[i].push(gridColumn);
    }
  }
    return {board};
})();

const players = [
    {
        name: "playerOne",
        mark: "X"
    },

    {
        name: "playerTwo",
        mark: "O"
    },
];

const gameController = (function () {
    let activePlayer = players[0];

    function playerMarkCell (rowInput, columnInput) {
        if (activePlayer.mark == "X") {
            Gameboard.board[rowInput][columnInput].mark = "X";
            activePlayer = players[1];
            return Gameboard.board;

        } else {
            Gameboard.board[rowInput][columnInput].mark = "O";
            activePlayer = players[0];
            return Gameboard.board;
        }
    }

    return {playerMarkCell};
})();

console.log(gameController.playerMarkCell(0, 0));
console.log(gameController.playerMarkCell(0, 1));
