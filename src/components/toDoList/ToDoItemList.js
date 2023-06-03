import styled from 'styled-components'
import ToDoItemTemplate from './ToDoItemTemplate'

const ToDoItemList = ({
  toDos,
  deleteToDo,
  updateToDoChecked,
  updateToDoText,
}) => (
  <ToDoItemListStyle>
    {toDos.map(toDo => (
      <ToDoItemTemplate
        key={toDo.id}
        toDo={toDo}
        deleteToDo={deleteToDo}
        updateToDoChecked={updateToDoChecked}
        updateToDoText={updateToDoText}
      />
    ))}
  </ToDoItemListStyle>
)

export default ToDoItemList

const ToDoItemListStyle = styled.ul`
  margin-top: 30px;
`
