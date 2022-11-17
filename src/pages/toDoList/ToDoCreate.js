import {useState} from 'react'
import styled from 'styled-components'
import * as MdIcons from 'react-icons/md'
import ToDoForm from './ToDoForm'

const ToDoCreateStyle = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 40px;
  }

  .createButton {
    background: ${({open}) => (open ? '#ff6b6b' : '#f6ab00')};
    position: relative;
    bottom: 8px;
    right: 0.5%;
    cursor: pointer;
    width: 60px;
    height: 60px;
    font-size: 40px;
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;
    transform: ${({open}) => open && 'rotate(45deg)'};
    &:hover {
      background: ${({open}) => (open ? '#ff6b6b' : '#f89b10')};
    }
    &:active {
      background: #fa5252;
    }
  }
`

const ToDoCreate = ({toDos, addToDo}) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(current => !current)

  return (
    <ToDoCreateStyle open={open}>
      <div className="container">
        <div className="title">To Do List</div>
        <button className="createButton" onClick={handleToggle}>
          <MdIcons.MdAdd />
        </button>
      </div>
      {open && <ToDoForm toDos={toDos} addToDo={addToDo} />}
    </ToDoCreateStyle>
  )
}

export default ToDoCreate
