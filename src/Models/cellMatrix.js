import Cell from "./cell";
import utils from "./utils";

class CellMatrix {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.value = this.createGrid(cols, rows, bombs);
        this.setUp(bombs)
    }

    createCellRow(rows) {
        return Array(rows).fill(null).map(() => new Cell());
    }

    createGrid(cols, rows, type) {
        return Array(cols).fill(null).map(() => this.createCellRow(rows, type));
    }

    setBombs(maxBombs) {
        let numberOfBombsSet = 0;
        while (numberOfBombsSet < maxBombs) {
            let randomColIndex = utils.getRandomNumberBelow(this.cols);
            let randomRowIndex = utils.getRandomNumberBelow(this.rows);
            let randomCell = this.value[randomColIndex][randomRowIndex];
            if (!randomCell.isBomb) {
                randomCell.setBomb();
                numberOfBombsSet++;
            }
        }
    }

    setBombsAroundCount() {

    }

    setUp(bombs) {
        this.setBombs(bombs);
        this.setBombsAroundCount();
    }

}

export default CellMatrix