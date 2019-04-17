import Cell from './cell';

class Game {
    constructor(cols,rows,bombs){
        this.cols = cols;
        this.rows = rows;
        this.bombs = bombs;
        this.cells = this.createCellTable();
    }

    createCellRow() {
        return Array(this.rows).fill(null).map(()=>new Cell())
    }

    createCellTable() {
        return Array(this.cols).fill(null).map(()=>this.createCellRow());
    }
}

export default Game;
