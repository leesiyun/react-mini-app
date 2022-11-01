const ToDoItem = ({ toDo: { id, text, completed }, showEdit, deleteToDo }) => {
  const handleDelete = () => deleteToDo(id);

  return (
    <>
      <label>{text}</label>
      <div>
        {!completed && <button onClick={showEdit}>Edit</button>}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default ToDoItem;
