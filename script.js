const gameboard = (function gameboard () {
    let board = [];

    for (let i = 1; i < 10; i++) {
        const gridCell = {
            number: i,
            mark: "none"
        };
        board.push(gridCell);
        
    }

    return board;
})();

console.log(gameboard);
