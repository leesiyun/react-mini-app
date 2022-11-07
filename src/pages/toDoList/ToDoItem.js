import styled from "styled-components";
import * as MdIcons from "react-icons/md";

const ToDoItemStyle = styled.div`
  display: flex;
  font-size: 18px;
  width: 80%;
  justify-content: space-between;
  vertical-align: middle;

  button {
    border: none;
    background-color: #fff;
    vertical-align: middle;
    color: #f6ab00;
    font-size: 24px;
    margin-left: 10px;
    visibility: hidden;
  }
`;

const ToDoItem = ({ toDo: { id, text, completed }, showEdit, deleteToDo }) => {
  const handleDelete = () => deleteToDo(id);

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
  );
};

export default ToDoItem;
