// types
type Coordinate = [number, number];

type CellState = {
	markedBy: string | null;
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

const currentPlayerElement = document.querySelector(
	"#current-player"
) as Element;

const resetGameButton = document.querySelector("#reset-game") as Element;

// settings
const gridSize = 3;
const gridCellStyles = ["w-[200px]", "h-[200px]", "border", "border-black"];

// initialize game state
const players: Array<Player> = [
	{ name: "Player1", mark: "X", score: 0 },
	{ name: "Player2", mark: "O", score: 0 }
];

let turn = 0;

let frozen = false;

currentPlayerElement.textContent = `The current player is: ${players[0].name}`;

let gameState: Record<string, CellState> = {};

const winGroups = [
	["0-0", "0-1", "0-2"],
	["1-0", "1-1", "1-2"],
	["2-0", "2-1", "2-2"],
	["0-0", "0-1", "0-2"],
	["1-0", "1-1", "1-2"],
	["2-0", "2-1", "2-2"],
	["0-0", "1-1", "2-2"],
	["2-0", "1-1", "0-2"]
];

function checkIfWin() {
	for (const winGroup of winGroups) {
		const [cell1, cell2, cell3] = winGroup.map((id) => gameState[id]);

		const winner =
			cell1.markedBy != null &&
			cell2.markedBy != null &&
			cell3.markedBy != null &&
			cell1.markedBy == cell2.markedBy &&
			cell2.markedBy == cell3.markedBy &&
			cell3.markedBy == cell1.markedBy;

		console.log("Check win;", cell1, cell2, cell3, `isWinner:${winner}`);

		if (winner) {
			return true;
		}
	}

	return false;
}

function displayWinner() {
	currentPlayerElement.textContent = `
	WINNER WINNER CHICKEN DINNER; Congrats to ${players[turn].name}!
	`;
}

function initializeGrid() {
	// creating game grid
	for (let row = 0; row < gridSize; row++) {
		for (let col = 0; col < gridSize; col++) {
			// create gridCell & add styling
			const gridCell = document.createElement("div");
			gridCell.classList.add(...gridCellStyles);

			// generate ID and initialize cell state
			const id = coordToId([row, col]);
			gridCell.id = id;

			gameState[id] = {
				markedBy: null,
				element: gridCell
			};

			// append gridCell to game gameGrid
			gameGrid.appendChild(gridCell);

			// add eventListener to gridCell
			gridCell.addEventListener("click", (event) => {
				if (!frozen) {
					// need to know which player's turn it is
					const currentPlayer = players[turn];

					// whichever players turn it is, add their mark to the 'markedBy' key for a specific cell in the gameState
					const cellState = gameState[id];

					const isMarked = Boolean(cellState.markedBy);

					if (!isMarked) {
						cellState.markedBy = currentPlayer.name;

						// update this cell so the mark shows visually
						gridCell.innerHTML = `<div class="flex justify-center items-center h-full">
				<p class="text-[80px]">${currentPlayer.mark}</p>
				</div>`;

						// check for winning conditions
						const winner = checkIfWin();

						if (winner) {
							displayWinner();
							frozen = true;
							return;
						}

						// go to next turn, wrap to beginning if too big
						turn = (turn + 1) % players.length;

						const nextPlayer = players[turn];

						currentPlayerElement.textContent = `The current player is: ${nextPlayer.name}`;
					}
				}
			});
		}
	}
}

function resetGrid() {
	while (gameGrid.lastChild) {
		gameGrid.removeChild(gameGrid.lastChild);
	}

	frozen = false;
	turn = 0;
	gameState = {};
	currentPlayerElement.textContent = `The current player is: ${players[0].name}`;

	initializeGrid();
}

resetGameButton.addEventListener("click", resetGrid);

initializeGrid();
