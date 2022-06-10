import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`

const ButtonsContainer = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  border: none;
  background: none;
`

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`

const RemovedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed }) => (
  <ItemContainer>
    <h3>{todo.text}</h3>
    <ButtonsContainer>
      {!todo.isCompleted ? (
        <CompletedButton onClick={() => onCompletePressed(todo.id)}>
          Finalizar
        </CompletedButton>
      ) : null}
      <RemovedButton onClick={() => onRemovePressed(todo.id)}>
        Apagar
      </RemovedButton>
    </ButtonsContainer>
  </ItemContainer>
)

export default TodoListItem
