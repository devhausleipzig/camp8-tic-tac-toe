const gameGrid = document.querySelector("#game-grid") as Element;

const gridSize = 3;

const gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];

for (let row = 0; row < gridSize; row++) {
	for (let col = 0; col < gridSize; col++) {
		// create gridCell & add styling
		const gridCell = document.createElement("div");
		gridCell.classList.add(...gridCellStyles);
		gridCell.id = `${row}-${col}`;

		// append gridCell to game gameGrid
		gameGrid.appendChild(gridCell);
	}
}
