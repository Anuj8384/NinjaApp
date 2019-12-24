import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      
      return (
        <div onClick={() => {deleteTodo(todo.id)}} className="collection-item" style={{backgroundColor:'#03'+(todo.id*98)+'fc',cursor:'pointer'}} key={todo.id}>
          <span >{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
