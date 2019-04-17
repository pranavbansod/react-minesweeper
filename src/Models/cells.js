import Cell from './cell'

class Cells {
    constructor(cols,rows,bombs){
        this.cols = cols;
        this.rows = rows;
        this.cells = this.createCellTable();
        this.setUp(bombs)
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

    setBombs(maxNumberOfBombs) {
        let numberOfBombsSet = 0;
        while (numberOfBombsSet < maxNumberOfBombs) {
            let randomCell = this.cells[this.getRandomColIndex()][this.getRandomRowIndex()];
            if (!randomCell.isBomb) {
                randomCell.setBomb();
                numberOfBombsSet++;
            }
        }
    }

    setBombsAroundCount() {

    }

    setUp(numOfBombs) {
        this.setBombs(numOfBombs);
        this.setBombsAroundCount();
    }
}

export default Cells;