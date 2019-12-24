import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(theme => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: 200
//     }
//   }
// }));
// const classes = useStyles();

const initialState = {
  roll: 0,
  name: '',
  class: ''
};

class AddNinja extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  componentDidMount(){
    this.setRoll();
  }
  setRoll =() => {
    let data = [];
     data = JSON.parse(localStorage.getItem('ninjas'));
    if(data && data.length>0){
      const max = data.reduce((prev, current) => {
        return (prev.roll > current.roll) ? prev : current
     });
     if(max){
       let rol = JSON.parse(max.roll)+1;
      this.setState({
        roll: rol
      })
     }
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
    const roll = JSON.parse(this.state.roll)+1;
   this.setState({
     roll: roll,
     name: '',
     class: ''
   });
  
  };
  //   onSubmit={}
  render() {
    return (
      <form  noValidate autoComplete="off">
        <div>
          <TextField
            className="add-field"
            required
            label="Roll"
            type="number"
            id="roll"
            value={this.state.roll}
            onChange={this.handleChange}
          />
            <br></br>
          <TextField
            className="add-field"
            label="Name"
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
<br></br>
          <TextField
            className="add-field"
            label="Class"
            type="text"
            id="class"
            value={this.state.class}
            onChange={this.handleChange}
          />
          <br></br><br></br>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default AddNinja;
