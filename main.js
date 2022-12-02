"use strict";
var _a;
exports.__esModule = true;
var utils_1 = require("./utils");
var gameGrid = document.querySelector("#game-grid");
var gridSize = 3;
var gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];
for (var row = 0; row < gridSize; row++) {
	for (var col = 0; col < gridSize; col++) {
		// create gridCell & add styling
		var gridCell = document.createElement("div");
		(_a = gridCell.classList).add.apply(_a, gridCellStyles);
		gridCell.id = (0, utils_1.coordToId)([row, col]);
		// append gridCell to game gameGrid
		gameGrid.appendChild(gridCell);
	}
}
