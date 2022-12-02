// types
type Coordinate = [number, number];

// utils
function coordToId(coord: Coordinate): string {
	const [row, col] = coord;

	return `${row}-${col}`;
}

function idToCoord(id: string): Coordinate {
	const [row, col] = id.split("-").map((elem) => Number(elem));

	return [row, col];
}

// grab DOM elements
const gameGrid = document.querySelector("#game-grid") as Element;

// settings
const gridSize = 3;
const gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];

// creating game grid
for (let row = 0; row < gridSize; row++) {
	for (let col = 0; col < gridSize; col++) {
		// create gridCell & add styling
		const gridCell = document.createElement("div");
		gridCell.classList.add(...gridCellStyles);
		gridCell.id = coordToId([row, col]);

		// append gridCell to game gameGrid
		gameGrid.appendChild(gridCell);
	}
}
