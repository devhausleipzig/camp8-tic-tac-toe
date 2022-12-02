var _a;
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
var gameState = {};
/*
{
    "0-0": {
        marked: null,
        element: DOMElement
    },
    "0-1": {
        marked: null,
        element: DOMElement
    },
    "0-2": {
        marked: null,
        element: DOMElement
    }
    ...
}
*/
// creating game grid
for (var row = 0; row < gridSize; row++) {
    for (var col = 0; col < gridSize; col++) {
        // create gridCell & add styling
        var gridCell = document.createElement("div");
        (_a = gridCell.classList).add.apply(_a, gridCellStyles);
        // generate ID and store data
        var id = coordToId([row, col]);
        gridCell.id = id;
        gameState[id] = {
            marked: null,
            element: gridCell
        };
        // append gridCell to game gameGrid
        gameGrid.appendChild(gridCell);
    }
}
