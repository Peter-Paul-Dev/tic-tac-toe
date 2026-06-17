const Gameboard = (function gameboard () {
    let board = [];

    for (let i = 1; i < 10; i++) {
        const gridCell = {
            number: i,
            mark: " "
        };
        board.push(gridCell);
    }
    
    return board;
})();

console.log(Gameboard);

const players = [
    {
        name: playerOne,
        mark: "X"
    },

    {
        name: playerTwo,
        mark: "O"
    },
]
console.log(players);
