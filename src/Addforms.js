import React, { Component } from 'react'

class Addtodo extends Component {

    state={
        content:""
    }

    handleChange =(e) =>
    {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                 <div class="form-group">
                    <label for="todoitem">Add New Todo</label>
                    <input type="text" class="form-control" id="todoitem" onChange={this.handleChange} value={this.state.content} required/>
                </div>
                </form>
            </div>
        )
    }
}

export default Addtodo;
