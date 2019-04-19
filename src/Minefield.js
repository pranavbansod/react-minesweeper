import React, {Component} from 'react';
import Square from './Square';
import './Minefield.css';

class Minefield extends Component {
    constructor(props) {
        super(props);
        let game = props.game;
        this.state = {
            rows: game.rows,
            cols: game.cols,
            cellMatrix: game.cellMatrix
        };
        console.log(this.state.cellMatrix);
    };

    createMinefieldRow(col) {
        let state = this.state;
        let rowArray = Array.from(Array(state.rows).keys());
        return rowArray.map((row) => <Square
            key={`${col}${row}`}
            onClick={() => this.handleClick({colIndex: col, rowIndex: row})}
        ></Square>);
    }

    createMinefieldTable() {
        let state = this.state;
        let colArray = Array.from(Array(state.cols).keys());
        return colArray.map((col) => <div className={'mine-row'} key={col}>{this.createMinefieldRow(col)}</div>);
    }

    handleClick(clickedCellIndexes) {
        console.log(clickedCellIndexes)
    }

    render() {
        return <div className={"minefield"}>
            {this.createMinefieldTable()}
        </div>
    }
}

export default Minefield;