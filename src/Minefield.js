import React, {Component} from 'react';
import Square from './Square';
import './Minefield.css';

class Minefield extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: props.game
        };
    };

    render() {
        return <div className={"minefield"}>
            {this.createMinefieldTable()}
        </div>
    }

    createMinefieldTable() {
        let game = this.state.game;
        let colArray = Array.from(Array(game.cols).keys());
        return colArray.map((col)=><div className={'mine-row'} key={col}>{this.createMinefieldRow(col)}</div>);
    }

    handleClick(clickedCellIndexes) {
        console.log(clickedCellIndexes)
    }

    createMinefieldRow(col) {
        let game = this.state.game;
        let rowArray = Array.from(Array(game.rows).keys());
        return rowArray.map((row)=><Square
            key={`${row}`}
            indexes={`${col}${row}`}
            onClick={()=>this.handleClick({colIndex:col,rowIndex:row})}
        ></Square>);
    }
}

export default Minefield;