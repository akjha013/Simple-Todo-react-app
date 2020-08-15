import React from 'react'

const Todos= ({todos, deleteTodo}) =>
{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
                <div className="hove card-body text-center text-primary" key={todo.id}>
                   
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                   
                </div>
            )
        })
    ) : (
        <p className="text-center text-muted" >Yay! No todos left.</p>
    )

    return(
        <div className="todos card">
        {todoList}
        </div>
    )
}
export default Todos;