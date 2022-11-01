import { useState, useRef } from "react";

const ToDoForm = ({ addToDo }) => {
  const [inputText, setInputText] = useState("");

  const nextId = useRef(1);

  const handleInsert = (text) => {
    const toDo = {
      id: nextId.current,
      text,
      completed: false,
    };
    addToDo(toDo);
    nextId.current++;
  };

  const handleSubmit = (e) => {
    if (!inputText) return;
    e.preventDefault();
    handleInsert(inputText);
    setInputText("");
  };

  const handleChange = (e) => setInputText(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Write your to do..."
      />
      <button>Add</button>
    </form>
  );
};

export default ToDoForm;
