import React from 'react'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks'
import {
  getTodos,
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos
} from './selectors'
import { useEffect } from 'react'

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const TodoList = ({
  onRemovePressed,
  onCompletePressed,
  startLoadingTodos,
  completeTodos,
  incompleteTodos,
  isLoading
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loading = <div>Loading todos...</div>
  const content = (
    <ListWrapper>
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
    </ListWrapper>
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
