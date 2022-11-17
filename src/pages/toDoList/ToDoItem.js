import styled from 'styled-components'
import * as MdIcons from 'react-icons/md'

const ToDoItemStyle = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  justify-content: space-between;
  vertical-align: middle;

  label {
    flex-basis: 85%;
  }

  button {
    border: none;
    background-color: #fff;
    vertical-align: middle;
    color: #f6ab00;
    font-size: 24px;
    margin-right: 15px;
    visibility: hidden;
    text-align: right;
    flex-basis: 5%;
  }

  @media (max-width: 650px) {
    label {
      flex-basis: 70%;
    }
  }
`

const ToDoItem = ({id, text, completed, showEdit, deleteToDo}) => {
  const handleDelete = () => deleteToDo(id)
  return (
    <ToDoItemStyle>
      <label>{text}</label>
      <div className="buttons">
        {!completed && (
          <button onClick={showEdit}>
            <MdIcons.MdOutlineModeEdit />
          </button>
        )}
        <button onClick={handleDelete}>
          <MdIcons.MdOutlineDeleteForever />
        </button>
      </div>
    </ToDoItemStyle>
  )
}

export default ToDoItem
