const ToDoFilter = ({ onClickAll, onClickActive, onClickCompleted }) => {
  return (
    <div>
      <button onClick={onClickAll}>all</button>
      <button onClick={onClickActive}>active</button>
      <button onClick={onClickCompleted}>completed</button>
    </div>
  );
};

export default ToDoFilter;
