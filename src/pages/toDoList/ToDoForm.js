import {useState, useRef} from 'react'
import styled from 'styled-components'
import * as CgIcons from 'react-icons/cg'

const ToDoFormStyle = styled.form`
  margin: 0 0 25px 0;
  width: 100%;
  display: flex;
  input {
    position: relative;
    flex-basis: 95%;
    padding: 13px 23px;
    margin-right: 3px;
    font-size: 15px;
    border: 2px solid #dddddd;
    border-radius: 10px;
    &:focus {
      outline: none;
      box-shadow: 0 0 5px 0 #015fcc;
    }
  }

  button {
    border: none;
    background-color: #f6ab00;
    vertical-align: middle;
    flex-basis: 5%;
    color: #fff;
    padding: 8px 13px 0 17px;
    font-size: 30px;
    border: 2px solid #f6ab00;
    border-radius: 10px;
    &:active {
      box-shadow: 0 0 5px 0 #015fcc;
    }
  }
`

const ToDoForm = ({toDos, addToDo}) => {
  const [inputText, setInputText] = useState('')

  const lastToDos = toDos.slice(-1)[0]

  const defaultId = toDos.length > 0 ? lastToDos.id++ : 0

  const nextId = useRef(defaultId)

  const handleInsert = text => {
    const toDo = {
      id: nextId.current,
      text,
      completed: false,
    }
    addToDo(toDo)
    nextId.current++
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputText) return
    handleInsert(inputText)
    setInputText('')
  }

  const handleChange = e => setInputText(e.target.value)

  return (
    <ToDoFormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={inputText}
        placeholder="Write your to do..."
      />
      <button>
        <CgIcons.CgPlayListAdd className="icon" />
      </button>
    </ToDoFormStyle>
  )
}

export default ToDoForm
