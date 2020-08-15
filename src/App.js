import React, { Component } from 'react'
import Todos from'./todos'
import Addtodo from './Addforms'
class App extends Component {

  state= {
    todos: [
      
      {id:Date.now(), content:'play age of empires'}
    ]
  }
  deleteTodo =(id) =>
  {
    const todo = this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos: todo
    })
    console.log("deleted element:",id);
  }
  addTodo =(todo)=>{
    todo.id = Date.now();
    let todos= [...this.state.todos, todo]
    console.log("new added",todos);
    this.setState({
      todos:todos
    })
  }
  
  render() {
    return (
      <div className="container">
        <br/>
        <br/>
        <div className="todo-app container w-50 shadow p-3 mb-5 bg-white rounded">
          <h1 className="name-font text-center text-primary">my todo</h1>
          <br/>
          <br/>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <Addtodo addTodo={this.addTodo}/>
        </div>
        <div className="container w-50 text-center text-muted">
          <p className="foot">made with <span className="heart-sym">&hearts;</span> and &#x2615; by ashwani</p>
        </div>
      </div>
    )
  }
}

export default App;
