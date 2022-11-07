import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as MdIcons from "react-icons/md";

const EditToDoItemStyle = styled.div`
  display: flex;
  font-size: 20px;
  width: 80%;
  justify-content: space-between;
  vertical-align: middle;

  input {
    position: relative;
    bottom: 4px;
    border: none;
    width: 80%;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background-color: #fff;
    vertical-align: middle;
    color: #f6ab00;
    font-size: 24px;
    margin-left: 10px;
    visibility: hidden;
  }
`;

const EditToDoItem = ({
  toDo: { id, text, completed },
  showEdit,
  updateToDoText,
}) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus());

  const handleSave = () => {
    const toDo = {
      id,
      text: inputText,
      completed,
    };
    updateToDoText(toDo);
    showEdit();
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <EditToDoItemStyle>
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={inputText}
        placeholder={text}
      />
      <div>
        <button onClick={inputText ? handleSave : showEdit}>
          <MdIcons.MdOutlineCheck />
        </button>
        <button onClick={showEdit}>
          <MdIcons.MdClear />
        </button>
      </div>
    </EditToDoItemStyle>
  );
};

export default EditToDoItem;
