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
var currentPlayerElement = document.querySelector("#current-player");
// settings
var gridSize = 3;
var gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];
// initialize game state
var players = [
    { name: "Player1", mark: "X", score: 0 },
    { name: "Player2", mark: "O", score: 0 }
];
var turn = 0;
currentPlayerElement.textContent = "The current player is: ".concat(players[0].name);
var gameState = {};
// creating game grid
for (var row = 0; row < gridSize; row++) {
    var _loop_1 = function (col) {
        var _a;
        // create gridCell & add styling
        var gridCell = document.createElement("div");
        (_a = gridCell.classList).add.apply(_a, gridCellStyles);
        // generate ID and initialize cell state
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
            var currentPlayer = players[turn];
            // whichever players turn it is, add their mark to the 'markedBy' key for a specific cell in the gameState
            var cellState = gameState[id];
            var isMarked = Boolean(cellState.markedBy);
            if (!isMarked) {
                cellState.markedBy = currentPlayer.name;
                // update this cell so the mark shows visually
                gridCell.innerHTML = "<div class=\"flex justify-center items-center h-full\">\n\t\t\t\t<p class=\"text-[80px]\">".concat(currentPlayer.mark, "</p>\n\t\t\t\t</div>");
                // check for winning conditions
                checkIfWin();
                // go to next turn, wrap to beginning if too big
                turn = (turn + 1) % players.length;
                var nextPlayer = players[turn];
                currentPlayerElement.textContent = "The current player is: ".concat(nextPlayer.name);
            }
        });
    };
    for (var col = 0; col < gridSize; col++) {
        _loop_1(col);
    }
}
