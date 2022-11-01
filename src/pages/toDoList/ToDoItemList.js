import ToDoItemTemplate from "./ToDoItemTemplate";

const ToDoItemList = ({
  toDos,
  updateToDoCheckbox,
  updateToDoText,
  deleteToDo,
}) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <ToDoItemTemplate
          toDo={toDo}
          key={toDo.id}
          updateToDoCheckbox={updateToDoCheckbox}
          updateToDoText={updateToDoText}
          deleteToDo={deleteToDo}
        />
      ))}
    </ul>
  );
};

export default ToDoItemList;
