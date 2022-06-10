import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import './TodoList.css'
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks'
import {
  getTodos,
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos
} from './selectors'
import { useEffect } from 'react'

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  startLoadingTodos,
  getCompletedTodos,
  getIncompleteTodos,
  completeTodos,
  incompleteTodos,
  isLoading
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])
  const loading = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Pendentes</h3>
      {incompleteTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
      <h3>Finalizados:</h3>
      {completeTodos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  )

  return isLoading ? loading : content
}

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  todos: getTodos(state),
  completeTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletePressed: id => dispatch(updateTodoRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
