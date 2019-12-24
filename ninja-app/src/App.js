import React, { Component } from "react";
import Ninjas from "./component/Ninjas";
// import logo from './logo.svg';
import "./App.css";
import AddNinja from "./component/AddNinja";

const initialState = {
  ninjas: [
    // { name: "Anuj Kumar", roll: 14, class: "BCA", id: 1 },
    // { name: "Akash Kumar", roll: 24, class: "BCA", id: 2 },
    // { name: "Rahul Raj", roll: 44, class: "MCA", id: 3 }
  ]
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    
  }
  componentDidMount(){
    this.localGet();
  }

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    // this.setState({
    //   ninjas: ninjas
    // });
    this.lolcalSet(ninjas);
    this.localGet();
  };

  deleteNinja = roll => {
    let ninjas = this.state.ninjas.filter(data => {
      return roll !== data.roll;
    });
    // this.setState({
    //   ninjas: ninja
    // });
    this.lolcalSet(ninjas);
    this.localGet();
   
  };
  localGet() {
    let ninja =  JSON.parse(localStorage.getItem("ninjas"));
    if(ninja)
      this.setState({
        ninjas :  ninja
      });
    else 
    this.setState({
      ninjas: []
    })
  }

  lolcalSet(ninja){
    localStorage.setItem("ninjas",JSON.stringify(ninja));
    // console.log(JSON.parse(localStorage.getItem("ninjas")))
  }

  render() {
    return (
      <div align="center" className="App card">
        <h1>Ninja App</h1>
         <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />

       
      </div>
    );
  }
}

export default App;
 
        // <div className="panel-body menu-item-body">
        // <div className="card">
        //      <div className="card-body" >

        //      <table style={{width:'100%'}}>
        //                         <tr>
        //      <td style={{width:'70%'}}>
        //      <i className="fa fa-circle text-success"></i>  VEG MINI THALI<br/>
        //      <small><span className="fa fa-inr" style={{padding:'8px',fontSize:'16px'}}>&nbsp;128</span></small><br/>
        //      <small><span className="fa fa-clock-o text-red"></span>&nbsp;10:00-23:00</small></td>
        //      <input type="hidden" name="quantity" id="quantity308916"  value="1" style={{width:'100%'}} />
        //      <input type="hidden" name="hidden_name" id="name308916" value="VEG MINI THALI" />
        //      <input type="hidden" name="hidden_price" id="price308916" value="128" />
        //      <input type="hidden" name="hidden_tax" id="tax308916" value="6" />
        //      <td style={{width:'10%'}} align="right"><input type="button" name="add_to_cart" id="308916" style={{marginTop:'5px'}} class="btn btn-info form-control add_to_cart" value="Add" /></td>
        //      </tr>
        //      <tr>
        //      <td colspan="3"><p style={{fontSize:'13px',padding:'5px'}}><small className="text-muted">CHAPATI (3 PCS), SEASONAL VEG (100G), DAL FRY/DAL TADKA (100 G), PLAIN RICE (200 G), SALAD & PICKLE</small></p></td>
        //      </tr>
        //      </table>
        //      </div>
        //      </div>
        //      </div>