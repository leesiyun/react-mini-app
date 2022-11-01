import { useState } from "react";
import styled from "styled-components";
import EditToDoItem from "./EditToDoItem";
import ToDoItem from "./ToDoItem";

const ToDoItemStyle = styled.li`
  text-decoration: ${({ checked }) => (checked ? "line-through" : null)};
`;

const ToDoItemTemplate = ({
  toDo,
  updateToDoCheckbox,
  updateToDoText,
  deleteToDo,
}) => {
  const handleChecked = (e) => {
    const updatedToDo = {
      id: toDo.id,
      text: toDo.text,
      completed: e.target.checked,
    };
    updateToDoCheckbox(updatedToDo);
  };

  const [isEditing, setEditing] = useState(false);

  const showEdit = () => setEditing((current) => !current);

  return (
    <ToDoItemStyle checked={toDo.completed}>
      <input
        id={toDo.id}
        type="checkbox"
        checked={toDo.completed}
        onChange={handleChecked}
      />
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
