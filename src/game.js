import Cell from './cell';

class Game {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.bombs = bombs;
        this.cells = this.setUpCells();
    }

    createCellRow() {
        return Array(this.rows).fill(null).map(() => new Cell())
    }

    createCellTable() {
        return Array(this.cols).fill(null).map(() => this.createCellRow());
    }

    getRandomRowIndex() {
        return Math.floor(Math.random() * this.rows);
    }

    getRandomColIndex() {
        return Math.floor(Math.random() * this.cols);
    }

    setBombs(cells) {
        let numberOfBombsSet = 0;
        while (numberOfBombsSet < this.bombs) {
            let randomCell = cells[this.getRandomColIndex()][this.getRandomRowIndex()];
            if (!randomCell.isBomb) {
                randomCell.setBomb();
                numberOfBombsSet++;
            }
        }
        return cells;
    }

    setUpCells() {
        let cells = this.createCellTable();
        cells = this.setBombs(cells);
        // Calculate Number
        return cells
    }
}

export default Game;
