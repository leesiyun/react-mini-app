import styled from 'styled-components'
import ToDoItemTemplate from './ToDoItemTemplate'

const ToDoItemListStyle = styled.ul`
  margin-top: 30px;
`

const ToDoItemList = ({
  toDos,
  updateToDoChecked,
  updateToDoText,
  deleteToDo,
}) => {
  return (
    <ToDoItemListStyle>
      {toDos.map(toDo => (
        <ToDoItemTemplate
          key={toDo.id}
          toDo={toDo}
          updateToDoChecked={updateToDoChecked}
          updateToDoText={updateToDoText}
          deleteToDo={deleteToDo}
        />
      ))}
    </ToDoItemListStyle>
  )
}

export default ToDoItemList
