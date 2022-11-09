import { useState, useRef } from "react";
import styled from "styled-components";
import * as FiIcons from "react-icons/fi";

const ToDoFormStyle = styled.form`
  margin: 0 0 20px 5px;
  input {
    width: 87%;
    padding: 10px 23px;
    border-radius: 30px;
    border: 2px solid #dddddd;
    font-size: 18px;
  }

  button {
    border: none;
    background-color: #fff;
    vertical-align: middle;
    color: #f6ab00;
    margin: 3px 0 0 15px;
    font-size: 45px;
  }

  @media (max-width: 1250px) {
    margin: 0 0 20px 0;
    input {
      width: 85%;
      padding: 8px 20px;
      font-size: 15px;
    }
    button {
      font-size: 35px;
      margin: 3px 0 0 10px;
    }
  }
`;

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
    if (inputText) return;
    e.preventDefault();
    handleInsert(inputText);
    setInputText("");
  };

  const handleChange = (e) => setInputText(e.target.value);

  return (
    <ToDoFormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Write your to do..."
      />
      <button>
        <FiIcons.FiPlusCircle className="icon" />
      </button>
    </ToDoFormStyle>
  );
};

export default ToDoForm;
