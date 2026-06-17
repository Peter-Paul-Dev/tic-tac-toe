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
];

const gameController = function () {
    let activePlayer = players[0];

    function playerMarkCell (playerInput) {
        if (playerInput == Gameboard[playerInput - 1].number) {
            if (activePlayer.mark === "X") {
            Gameboard[playerInput - 1].mark = "X";
            activePlayer = players[1];
        } 
            else {
                Gameboard[playerInput-1].mark = "O";
                activePlayer = players[0];
            }
        }
    }
}

console.log(gameController());