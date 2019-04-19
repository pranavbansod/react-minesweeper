class Cell {
    constructor(colIndex,rowIndex) {
        this.index = {
            col:colIndex,
            row:rowIndex
        };
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

    getIndex() {
        return this.index;
    }
}

export default Cell;