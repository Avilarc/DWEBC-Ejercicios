class PuzzleGame {
    constructor() {
        this.rows = 0;
        this.columns = 0;
        this.emptySpaces = 0;
        this.movements = 0;
        this.timer = null;
        this.startTime = null;
        this.endTime = null;
    }

    startGame() {
        this.rows = parseInt(document.getElementById('rows').value);
        this.columns = parseInt(document.getElementById('columns').value);
        this.emptySpaces = parseInt(document.getElementById('emptySpaces').value);
        this.movements = 0;
        this.updateMovements();

        clearInterval(this.timer);
        this.startTime = new Date().getTime();
        this.updateTimer();

        this.initializeBoard();
        this.renderBoard();
    }

    restartGame() {
        this.movements = 0;
        this.updateMovements();

        clearInterval(this.timer);
        this.startTime = new Date().getTime();
        this.updateTimer();

        this.initializeBoard();
        this.renderBoard();
    }

    initializeBoard() {
        const numbers = Array.from({ length: this.rows * this.columns - this.emptySpaces }, (_, i) => i + 1);
        const emptyTiles = Array(this.emptySpaces).fill(null);

        const allTiles = numbers.concat(emptyTiles);
        this.shuffleArray(allTiles);

        const gameBoard = document.getElementById('gameBoard');
        gameBoard.innerHTML = '';

        for (let i = 0; i < allTiles.length; i++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.textContent = allTiles[i];
            tile.onclick = () => this.moveTile(i);

            gameBoard.appendChild(tile);
        }
    }

    renderBoard() {
        const tiles = document.getElementsByClassName('tile');
        for (let i = 0; i < tiles.length; i++) {
            tiles[i].textContent = tiles[i].textContent === '0' ? '' : tiles[i].textContent;
        }
    }

    moveTile(index) {
        const tiles = document.getElementsByClassName('tile');
        const emptyTileIndex = Array.from(tiles).findIndex(tile => tile.textContent === '');

        if (this.isAdjacent(index, emptyTileIndex)) {
            const temp = tiles[index].textContent;
            tiles[index].textContent = tiles[emptyTileIndex].textContent;
            tiles[emptyTileIndex].textContent = temp;

            this.movements++;
            this.updateMovements();

            this.checkWin();
        }
    }

    isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / this.columns);
        const col1 = index1 % this.columns;
        const row2 = Math.floor(index2 / this.columns);
        const col2 = index2 % this.columns;

        return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
    }

    updateMovements() {
        document.getElementById('movements').textContent = `Movements: ${this.movements}`;
    }

    updateTimer() {
        this.timer = setInterval(() => {
            this.endTime = new Date().getTime();
            const elapsedTime = new Date(this.endTime - this.startTime);
            const minutes = elapsedTime.getMinutes().toString().padStart(2, '0');
            const seconds = elapsedTime.getSeconds().toString().padStart(2, '0');
            document.getElementById('timer').textContent = `Time: ${minutes}:${seconds}`;
        }, 1000);
    }

    checkWin() {
        const tiles = document.getElementsByClassName('tile');
        const values = Array.from(tiles).map(tile => tile.textContent);
        if (values.every((value, index) => index + 1 === parseInt(value) || value === '')) {
            clearInterval(this.timer);
            alert('Congratulations! You solved the puzzle!');
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

const puzzleGame = new PuzzleGame();