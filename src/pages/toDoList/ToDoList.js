import { useState, useEffect } from "react";
import styled from "styled-components";
import ToDoFilter from "./ToDoFilter";
import Progressbar from "./Progressbar";
import ToDoItemList from "./ToDoItemList";
import ToDoCreate from "./ToDoCreate";

const ToDoListStyle = styled.div`
  width: 90%;
  height: 100%;
  margin: 220px 20px 0 20px;

  .remainTasks {
    color: #2c2c2c;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #dddddd;
    text-align: right;
    margin-top: 10px;
  }
`;

const ToDoList = () => {
  const [toDos, setToDos] = useState(
    () => JSON.parse(localStorage.getItem("toDos")) || []
  );
  const [filterToDos, setFilterToDos] = useState(toDos);
  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
    if (filterState === "all") filterAll();
    if (filterState === "active") filterActive();
    if (filterState === "completed") filterCompleted();
  }, [toDos]);

  const filterAll = () => {
    setFilterToDos(toDos);
    setFilterState("all");
  };

  const filterActive = () => {
    setFilterToDos(toDos.filter((toDo) => toDo.completed === false));
    setFilterState("active");
  };

  const remainingToDos = toDos.filter((toDo) => toDo.completed === true);
  const filterCompleted = () => {
    setFilterToDos(remainingToDos);
    setFilterState("completed");
  };

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

  const filledPercentage = (remainingToDos.length / toDos.length) * 100;

  return (
    <ToDoListStyle>
      <div className="toDoListMain">
        <ToDoCreate toDos={toDos} addToDo={addToDo} />
        <ToDoFilter
          onClickAll={filterAll}
          onClickActive={filterActive}
          onClickCompleted={filterCompleted}
        />
        <Progressbar filledPercentage={filledPercentage} />
        <div className="remainTasks">
          {remainingToDos.length} out of {toDos.length} completed
        </div>
        <ToDoItemList
          toDos={filterToDos}
          updateToDoCheckbox={updateToDoCheckbox}
          updateToDoText={updateToDoText}
          deleteToDo={deleteToDo}
        />
      </div>
    </ToDoListStyle>
  );
};

export default ToDoList;
