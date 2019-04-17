class Cell {
    constructor() {
        this.value = null;
        this.isBomb = false;
    }

    setBomb() {
        this.isBomb = true;
        this.setValue('*');
    }

    setValue(newVal) {
        this.value = newVal;
    }
}

export default Cell;