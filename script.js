const Gameboard = (function gameboard () {
    let board = [];

    for (let i = 1; i < 10; i++) {
        const gridCell = {
            number: i,
            mark: ""
        };
        board.push(gridCell);
    }

    const getBoard = () => board;

    const markCell = function (gridCell, player) {
        const availableCells = board
                               .filter((gridCell) => gridCell.mark.getValue() === "")
                               .map((gridCell) => gridCell.mark);

        if (!availableCells.length) {
            return;
        }
    }
    
    return board;
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
]
console.log(players);

const gameController = function () {
    let activePlayer = players[0];
}

console.log(gameController());