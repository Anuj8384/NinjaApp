import React, { Component } from "react";
import Ninja from "./component/Ninja";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    ninjaList: [
      {
        name: "Anuj Kumar",
        roll: 15,
        class: "MCA"
      },
      {
        name: "Akash Kumar",
        roll: 13,
        class: "MCA"
      }
    ]
  };

  render() {
    return (
      <div align="center"  className="App card">
        <header className="App-header">Ninja App</header>
       
        <Ninja  ninja={this.state.ninjaList} />
      
      </div>
    );
  }
}

export default App;
