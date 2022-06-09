import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {!todo.isCompleted ? (
        <button
          className="completed-button"
          onClick={() => onCompletePressed(todo.text)}
        >
          Mark As Completed
        </button>
      ) : null}
      <button
        className="remove-button"
        onClick={() => {
          onRemovePressed(todo.text)
        }}
      >
        Remove
      </button>
    </div>
  </div>
)

export default TodoListItem
