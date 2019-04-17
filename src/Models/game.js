import Minefield from './minefield'

class Game {
    constructor(cols,rows,bombs){
        this.cols = cols;
        this.rows = rows;
        this.grid = new Minefield(cols,rows,bombs);
    }
}

export default Game;