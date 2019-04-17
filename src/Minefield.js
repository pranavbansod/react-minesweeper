import React, {Component} from 'react';
import Square from './Square';
import './Minefield.css';

class Minefield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameConfig: props.gameConfig,
            cells:props.cells
        };
        console.log(this.state.cells);
    };

    createMinefieldRow(col) {
        let gameConfig = this.state.gameConfig;
        let rowArray = Array.from(Array(gameConfig.rows).keys());
        return rowArray.map((row)=><Square
            key={`${col}${row}`}
            onClick={()=>this.handleClick({colIndex:col,rowIndex:row})}
        ></Square>);
    }

    createMinefieldTable() {
        let gameConfig = this.state.gameConfig;
        let colArray = Array.from(Array(gameConfig.cols).keys());
        return colArray.map((col)=><div className={'mine-row'} key={col}>{this.createMinefieldRow(col)}</div>);
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