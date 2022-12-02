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

type Coordinate = [number, number];

function coordToId(coord: Coordinate): string {
	const [row, col] = coord;

	return `${row}-${col}`;
}

function idToCoord(id: string): Coordinate {
	const [row, col] = id.split("-").map((elem) => Number(elem));

	return [row, col];
}
