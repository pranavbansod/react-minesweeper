class Cell {
    constructor() {
        this.value = null;
        this.isBomb = false;
    }

    setBomb() {
        this.isBomb = true;
    }
}

export default Cell;