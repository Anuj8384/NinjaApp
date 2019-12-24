import React, {Component} from 'react';

class AddTodo extends Component {
    state = { 
        content :''
     }

     handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
     }
handleSubmit = (e ) => {
e.preventDefault();
this.props.addTodo(this.state);
this.setState({
    content : ''
})
}
    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo:</label>
                    <input value={this.state.content} type="text" onChange={this.handleChange} ></input>
                </form>
            </div>
          );
    }
}
 
export default AddTodo;