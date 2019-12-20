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

class AddNinja extends Component {
  state = {
    roll: null,
    name: null,
    class: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  //   onSubmit={}
  render() {
    return (
      <form noValidate autoComplete="off">
        <div>
          <TextField
            className="add-field"
            required
            label="Roll"
            type="number"
            id="roll"
            onChange={this.handleChange}
          />
            <br></br>
          <TextField
            className="add-field"
            label="Name"
            type="text"
            id="name"
            onChange={this.handleChange}
          />
<br></br>
          <TextField
            className="add-field"
            label="Class"
            type="text"
            id="class"
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
