// types
type Coordinate = [number, number];

type CellState = {
	marked: string | null;
	element: Element;
};

type Player = {
	name: string;
	mark: string;
	score: number;
};

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

// initialize game state
const players: Array<Player> = [
	{ name: "Player1", mark: "X", score: 0 },
	{ name: "Player2", mark: "O", score: 0 }
];

const gameState: Record<string, CellState> = {};

// creating game grid
for (let row = 0; row < gridSize; row++) {
	for (let col = 0; col < gridSize; col++) {
		// create gridCell & add styling
		const gridCell = document.createElement("div");
		gridCell.classList.add(...gridCellStyles);

		// generate ID and store data
		const id = coordToId([row, col]);
		gridCell.id = id;

		gameState[id] = {
			marked: null,
			element: gridCell
		};

		// append gridCell to game gameGrid
		gameGrid.appendChild(gridCell);

		// add eventListener to gridCell
		gridCell.addEventListener("click", (event) => {
			// need to know which player's turn it is
			// whichever players turn it is, add their mark to the 'marked' key for a specific cell in the gameState
			const cellState = gameState[id];
			cellState.marked = "marked";
			// update that cell so the mark shows visually
			gridCell.innerText = "marked";
		});
	}
}
