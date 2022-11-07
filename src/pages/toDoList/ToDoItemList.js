import styled from "styled-components";
import ToDoItemTemplate from "./ToDoItemTemplate";

const ToDoItemListStyle = styled.ul`
  margin-top: 30px;
`;

const ToDoItemList = ({
  toDos,
  updateToDoCheckbox,
  updateToDoText,
  deleteToDo,
}) => {
  return (
    <ToDoItemListStyle>
      {toDos.map((toDo) => (
        <ToDoItemTemplate
          toDo={toDo}
          key={toDo.id}
          updateToDoCheckbox={updateToDoCheckbox}
          updateToDoText={updateToDoText}
          deleteToDo={deleteToDo}
        />
      ))}
    </ToDoItemListStyle>
  );
};

export default ToDoItemList;
