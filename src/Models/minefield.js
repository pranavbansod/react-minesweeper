import Cell from "./cell";
import utils from './utils'

class Minefield {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.value = this.createCellTable(cols, rows);
        this.setUp(bombs);
    }

    createCellRow(rows) {
        return Array(rows).fill(null).map(() => new Cell());
    }

    createCellTable(cols, rows) {
        return Array(cols).fill(null).map(() => this.createCellRow(rows));
    }

    setBombs(maxNumberOfBombs) {
        let numberOfBombsSet = 0;
        while (numberOfBombsSet < maxNumberOfBombs) {
            let randomColIndex = utils.getRandomNumberBelow(this.cols);
            let randomRowIndex = utils.getRandomNumberBelow(this.rows);
            let randomCell = this.value[randomColIndex][randomRowIndex];
            if (!randomCell.isBomb) {
                randomCell.setBomb();
                numberOfBombsSet++;
            }
        }
    }

    getBombsAroundCount(cell) {
        return undefined;
    }

    setBombsAroundCount() {
        let minefieldRef = this;
        this.value.forEach((row) => {
            row.forEach((cell) => {
                let bombsAroundCount = minefieldRef.getBombsAroundCount(cell);
                cell.setValue(bombsAroundCount);
            })
        })
    }

    setUp(bombs) {
        this.setBombs(bombs);
        this.setBombsAroundCount();
    }
}

export default Minefield;