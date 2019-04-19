import Cell from "./cell";
import utils from "./utils";

class CellMatrix {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.value = this.createGrid(cols, rows);
        this.setUp(bombs)
    }

    createCellRow(colIndex,rows) {
        return Array.from(Array(rows).keys()).map((rowIndex)=>new Cell(colIndex,rowIndex));
    }

    createGrid(cols,rows) {
        return Array.from(Array(cols).keys()).map((colIndex) => this.createCellRow(colIndex,rows));
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

    setUp(bombs) {
        this.setBombs(bombs);
    }

}

export default CellMatrix