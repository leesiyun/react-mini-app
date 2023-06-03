import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {
  ToDoCreate,
  ToDoFilter,
  ProgressBar,
  ToDoItemList,
} from '../components/toDoList'

const ToDoList = () => {
  const [toDos, setToDos] = useState(
    JSON.parse(localStorage.getItem('toDos')) || [],
  )
  const [filterState, setFilterState] = useState('all')

  useEffect(() => {
    saveLocalStorage(toDos)
  }, [toDos])

  const saveLocalStorage = updatedToDos => {
    localStorage.setItem('toDos', JSON.stringify(updatedToDos))
  }

  const getFilteredToDos = filterState => {
    if (filterState === 'all') return toDos
    if (filterState === 'active')
      return toDos.filter(({completed}) => !completed)
    if (filterState === 'completed')
      return toDos.filter(({completed}) => completed)
  }

  const updateToDoChecked = ({id, completed}) => {
    const updatedToDos = toDos.map(toDo =>
      toDo.id === id ? {...toDo, completed} : toDo,
    )
    setToDos(updatedToDos)
  }

  const updateToDoText = ({id, text}) => {
    const updatedToDos = toDos.map(toDo =>
      toDo.id === id ? {...toDo, text} : toDo,
    )
    setToDos(updatedToDos)
  }

  const deleteToDo = targetId => {
    const updatedToDos = toDos.filter(({id}) => id !== targetId)
    setToDos(updatedToDos)
  }

  return (
    <ToDoListStyle>
      <div className="toDoListMain">
        <ToDoCreate toDos={toDos} setToDos={setToDos} />
        <ToDoFilter filterState={filterState} setFilterState={setFilterState} />
        <ProgressBar toDos={toDos} />
        <ToDoItemList
          toDos={getFilteredToDos(filterState)}
          updateToDoChecked={updateToDoChecked}
          updateToDoText={updateToDoText}
          deleteToDo={deleteToDo}
        />
      </div>
    </ToDoListStyle>
  )
}

export default ToDoList

const ToDoListStyle = styled.div`
  width: 90%;
  height: 100%;
  margin: 220px 20px 0 20px;
`
