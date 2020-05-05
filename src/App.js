import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contador: 0,
  };
  cuenta = (event) => {
    this.setState({
      contador: event.target.value.length
    });
  };
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.cuenta}></textarea>
        <div className="counter">{this.state.contador}</div>
      </div>
    );
  }
}

export default App;
