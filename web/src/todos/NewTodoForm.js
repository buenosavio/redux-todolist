import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodoRequest } from './thunks'
import { getTodos } from './selectors'

import './NewTodoForm.css'

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Informe sua tarefa!"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const duplicatedText = todos.some(todo => todo.text === inputValue)
          if (!duplicatedText) {
            onCreatePressed(inputValue)
            setInputValue('')
          }
        }}
      >
        Salvar
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  todos: getTodos(state)
})

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(addTodoRequest(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)
