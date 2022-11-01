import { useState, useEffect } from "react";
import ToDoTitle from "./ToDoTitle";
import ToDoForm from "./ToDoForm";
import ToDoFilter from "./ToDoFilter";
import ToDoItemList from "./ToDoItemList";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [filterToDos, setFilterToDos] = useState(toDos);
  const [filterState, setFilterState] = useState("all");

  const filterAll = () => {
    setFilterToDos(toDos);
    setFilterState("all");
  };
  const remainingToDos = toDos.filter((toDo) => toDo.completed === false);
  const filterActive = () => {
    setFilterToDos(remainingToDos);
    setFilterState("active");
  };
  const filterCompleted = () => {
    setFilterToDos(toDos.filter((toDo) => toDo.completed === true));
    setFilterState("completed");
  };

  useEffect(() => {
    if (filterState === "all") filterAll();
    if (filterState === "active") filterActive();
    if (filterState === "completed") filterCompleted();
  }, [toDos]);

  const addToDo = (toDo) => setToDos([...toDos, toDo]);

  const updateToDoCheckbox = (updateToDo) => {
    const updateToDoList = toDos.map((toDo) =>
      toDo.id === updateToDo.id
        ? { ...toDo, completed: updateToDo.completed }
        : toDo
    );
    setToDos(updateToDoList);
  };

  const updateToDoText = (updateToDo) => {
    const updateToDoList = toDos.map((toDo) =>
      toDo.id === updateToDo.id ? { ...toDo, text: updateToDo.text } : toDo
    );
    setToDos(updateToDoList);
  };

  const deleteToDo = (id) => setToDos(toDos.filter((toDo) => toDo.id !== id));

  return (
    <div>
      <ToDoTitle>My To Dos</ToDoTitle>
      <ToDoForm addToDo={addToDo} />
      <ToDoFilter
        onClickAll={filterAll}
        onClickActive={filterActive}
        onClickCompleted={filterCompleted}
      />
      <span>{remainingToDos.length} tasks remaining</span>
      <ToDoItemList
        toDos={filterToDos}
        updateToDoCheckbox={updateToDoCheckbox}
        updateToDoText={updateToDoText}
        deleteToDo={deleteToDo}
      />
    </div>
  );
};

export default ToDoList;
