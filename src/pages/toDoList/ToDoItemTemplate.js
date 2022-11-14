import { useState } from "react";
import styled from "styled-components";
import * as MdIcons from "react-icons/md";
import EditToDoItem from "./EditToDoItem";
import ToDoItem from "./ToDoItem";

const ToDoItemStyle = styled.li`
  text-decoration: ${({ checked }) => (checked ? "line-through" : null)};
  color: ${({ checked }) => (checked ? "#a2a2a2" : "#2c2c2c")};
  display: flex;
  position: relative;
  padding-bottom: 10px;
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

  [type="checkbox"] {
    width: 35px;
    height: 35px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #dddddd;
    appearance: none;
    outline: none;
    margin-right: 20px;
    cursor: pointer;

    &:checked {
      border: 2px solid #f6ab00;
      margin-right: 0;
    }
  }
`;

const ToDoItemTemplate = ({
  toDo,
  updateToDoCheckbox,
  updateToDoText,
  deleteToDo,
}) => {
  const [isEditing, setEditing] = useState(false);

  const handleChecked = (e) => {
    const updatedToDo = {
      id: toDo.id,
      text: toDo.text,
      completed: e.target.checked,
    };
    updateToDoCheckbox(updatedToDo);
  };

  const showEdit = () => setEditing((current) => !current);

  return (
    <ToDoItemStyle checked={toDo.completed}>
      <label>
        <input
          id={toDo.id}
          type="checkbox"
          checked={toDo.completed}
          onChange={handleChecked}
        />
        {toDo.completed && <MdIcons.MdDone className="checkIcon" />}
      </label>
      {isEditing ? (
        <EditToDoItem
          toDo={toDo}
          showEdit={showEdit}
          updateToDoText={updateToDoText}
        />
      ) : (
        <ToDoItem toDo={toDo} showEdit={showEdit} deleteToDo={deleteToDo} />
      )}
    </ToDoItemStyle>
  );
};

export default ToDoItemTemplate;
