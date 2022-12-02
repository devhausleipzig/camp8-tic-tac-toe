var _a;
var gameGrid = document.querySelector("#game-grid");
var gridSize = 3;
var gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];
for (var row = 0; row < gridSize; row++) {
    for (var col = 0; col < gridSize; col++) {
        // create gridCell & add styling
        var gridCell = document.createElement("div");
        (_a = gridCell.classList).add.apply(_a, gridCellStyles);
        gridCell.id = "".concat(row, "-").concat(col);
        // append gridCell to game gameGrid
        gameGrid.appendChild(gridCell);
    }
}
function coordToId(coord) {
    var row = coord[0], col = coord[1];
    return "".concat(row, "-").concat(col);
}
function idToCoord(id) {
    var _a = id.split("-").map(function (elem) { return Number(elem); }), row = _a[0], col = _a[1];
    return [row, col];
}
