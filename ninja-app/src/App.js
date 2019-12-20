import React, { Component } from "react";
import Ninjas from "./component/Ninjas";
// import logo from './logo.svg';
import './App.css';
import AddNinja from "./component/AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: 'Anuj Kumar', roll: 14, class: 'BCA', id: 1 },
      { name: 'Akash Kumar', roll: 24, class: 'BCA', id: 2 },
      { name: 'Rahul Raj', roll: 44, class: 'MCA', id: 3 },
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (roll) => {
    let ninja = this.state.ninjas.filter(data=> { return roll !== data.roll});
    this.setState({
      ninjas : ninja
    });
  }

  render() {
    return (
      <div align="center"  className="App card">
        <h1>Ninja App</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
       <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
