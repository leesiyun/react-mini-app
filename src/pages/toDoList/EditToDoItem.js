import { useState } from "react";

const EditToDoItem = ({
  toDo: { id, text, completed },
  showEdit,
  updateToDoText,
}) => {
  const handleSave = () => {
    const toDo = {
      id,
      text: inputText,
      completed,
    };
    updateToDoText(toDo);
    showEdit();
  };

  const [inputText, setInputText] = useState("");
  const handleChange = (e) => setInputText(e.target.value);

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder={text}
      />
      <div>
        <button onClick={showEdit}>Cancle</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
};

export default EditToDoItem;
