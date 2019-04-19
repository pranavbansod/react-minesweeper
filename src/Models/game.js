import CellMatrix from "./cellMatrix";

class Game {
    constructor(cols, rows, bombs) {
        this.cols = cols;
        this.rows = rows;
        this.bombs = bombs;
        this.cellMatrix = new CellMatrix(cols, rows, bombs);
    }
}

export default Game;