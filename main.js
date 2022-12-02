// utils
function coordToId(coord) {
    var row = coord[0], col = coord[1];
    return "".concat(row, "-").concat(col);
}
function idToCoord(id) {
    var _a = id.split("-").map(function (elem) { return Number(elem); }), row = _a[0], col = _a[1];
    return [row, col];
}
// grab DOM elements
var gameGrid = document.querySelector("#game-grid");
// settings
var gridSize = 3;
var gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];
// initialize game state
var players = [
    { name: "Player1", mark: "X", score: 0 },
    { name: "Player2", mark: "O", score: 0 }
];
var turn = 0;
var gameState = {};
// creating game grid
for (var row = 0; row < gridSize; row++) {
    var _loop_1 = function (col) {
        var _a;
        // create gridCell & add styling
        var gridCell = document.createElement("div");
        (_a = gridCell.classList).add.apply(_a, gridCellStyles);
        // generate ID and store data
        var id = coordToId([row, col]);
        gridCell.id = id;
        gameState[id] = {
            markedBy: null,
            element: gridCell
        };
        // append gridCell to game gameGrid
        gameGrid.appendChild(gridCell);
        // add eventListener to gridCell
        gridCell.addEventListener("click", function (event) {
            // need to know which player's turn it is
            // whichever players turn it is, add their mark to the 'marked' key for a specific cell in the gameState
            var cellState = gameState[id];
            var currentPlayer = players[turn];
            cellState.markedBy = currentPlayer.name;
            // update that cell so the mark shows visually
            gridCell.innerText = currentPlayer.mark;
            // go to next turn
            turn = (turn + 1) % players.length;
        });
    };
    for (var col = 0; col < gridSize; col++) {
        _loop_1(col);
    }
}
