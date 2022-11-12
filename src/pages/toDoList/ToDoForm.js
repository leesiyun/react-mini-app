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
    &:focus {
      outline: none;
      box-shadow: 0 0 5px 0 #015fcc;
    }
  }

  button {
    border: none;
    background-color: #fff;
    vertical-align: middle;
    color: #f6ab00;
    margin: 3px 0 0 15px;
    font-size: 45px;
  }

  @media (max-width: 1417px) {
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

const ToDoForm = ({ toDos, addToDo }) => {
  const [inputText, setInputText] = useState("");

  const nextId = useRef(toDos.length !== 0 ? toDos.slice(-1)[0].id + 1 : 0);

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
    e.preventDefault();
    if (!inputText) return;
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
