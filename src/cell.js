class Cell {
    constructor() {
        this.value = null;
        this.isBomb = false;
    }

    setBomb() {
        this.isBomb = true;
        this.value = '*';
    }
}

export default Cell;