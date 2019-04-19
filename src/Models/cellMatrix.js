import Cell from "./cell";
import utils from "./utils";

class CellMatrix {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.value = this.createGrid(cols, rows);
        this.setUp(bombs)
    }

    createCellRow(colIndex, rows) {
        return Array.from(Array(rows).keys()).map((rowIndex) => new Cell(colIndex, rowIndex));
    }

    createGrid(cols, rows) {
        return Array.from(Array(cols).keys()).map((colIndex) => this.createCellRow(colIndex, rows));
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

    isValidIndex(index) {
        return index.col > -1 && index.col < this.cols && index.row > -1 && index.row < this.rows;
    }

    getSurroundingCellIndexes(cell) {
        let cellIndex = cell.getIndex();
        let surroundingCellIndexes = [];
        for (let colIndexDelta = -1; colIndexDelta < 2; colIndexDelta++) {
            for (let rowIndexDelta = -1; rowIndexDelta < 2; rowIndexDelta++) {
                let isSameCell = colIndexDelta === 0 && rowIndexDelta === 0;
                if (!isSameCell) {
                    let surroundingCellIndex = {
                        col: cellIndex.col + colIndexDelta,
                        row: cellIndex.row + rowIndexDelta
                    };
                    surroundingCellIndexes.push(surroundingCellIndex);
                }
            }
        }
        return surroundingCellIndexes.filter((index) => {
            return this.isValidIndex(index)
        })
    }

    getBombsAroundCount(cell) {
        let surroundingCellIndexes = this.getSurroundingCellIndexes(cell);

    }

    setUp(bombs) {
        this.setBombs(bombs);
        // this.setBombsAroundCount();
        console.log(this.getSurroundingCellIndexes(this.value[0][0]));
    }
}

export default CellMatrix