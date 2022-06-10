import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import './TodoList.css'
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks'
import { useEffect } from 'react'

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  startLoadingTodos,
  isLoading
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])
  const loading = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, i) => (
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
  isLoading: state.isLoading,
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletePressed: id => dispatch(updateTodoRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
