import {useState} from 'react'
import styled from 'styled-components'
import * as MdIcons from 'react-icons/md'
import EditToDoItem from './EditToDoItem'
import ToDoItem from './ToDoItem'

const ToDoItemStyle = styled.li`
  text-decoration: ${({checked}) => (checked ? 'line-through' : null)};
  color: ${({checked}) => (checked ? '#a2a2a2' : '#2c2c2c')};
  display: flex;
  position: relative;

  label {
    height: 55px;
  }
  &:hover {
    button {
      visibility: visible;
    }
  }

  .checkIcon {
    position: relative;
    left: 5px;
    bottom: 40px;
    font-size: 24px;
    color: #f6ab00;
  }

  [type='checkbox'] {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #dddddd;
    appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 20px;
    @media (max-width: 768px) {
      margin-right: 16px;
    }

    &:checked {
      border: 2px solid #f6ab00;
      margin-right: 0;
    }
  }
`

const ToDoItemTemplate = ({
  toDo: {id, text, completed},
  updateToDoChecked,
  updateToDoText,
  deleteToDo,
}) => {
  const [isEditing, setEditing] = useState(false)

  const handleChecked = e => {
    const updatedToDo = {
      id,
      completed: e.target.checked,
    }
    updateToDoChecked(updatedToDo)
  }

  const showEdit = () => setEditing(current => !current)

  return (
    <ToDoItemStyle checked={completed}>
      <label>
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={handleChecked}
        />
        {completed && <MdIcons.MdDone className="checkIcon" />}
      </label>
      {isEditing ? (
        <EditToDoItem
          toDo={(id, text, completed)}
          showEdit={showEdit}
          updateToDoText={updateToDoText}
        />
      ) : (
        <ToDoItem
          id={id}
          text={text} /*  */
          completed={completed}
          showEdit={showEdit}
          deleteToDo={deleteToDo}
        />
      )}
    </ToDoItemStyle>
  )
}

export default ToDoItemTemplate
