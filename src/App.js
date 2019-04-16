import React, { Component } from 'react';
import Minefield from './Minefield';
import Game from './game';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols : 8,
      rows : 8,
      bombs : 10
    }
  }

  render() {
    let state = this.state;
    return (
      <div className="App">
        <Minefield game={new Game(state.cols,state.rows,state.bombs)}></Minefield>
      </div>
    );
  }
}

export default App;
