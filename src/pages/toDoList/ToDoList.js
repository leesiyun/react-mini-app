import {useState, useEffect} from 'react'
import styled from 'styled-components'
import ToDoCreate from './ToDoCreate'
import ToDoFilter from './ToDoFilter'
import ProgressBar from './ProgressBar'
import ToDoItemList from './ToDoItemList'

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
`

const ToDoList = () => {
  const [toDos, setToDos] = useState(
    () => JSON.parse(localStorage.getItem('toDos')) || [],
  )
  const [filterState, setFilterState] = useState('all')

  useEffect(() => {
    updateCache(toDos)
  }, [toDos])

  const updateCache = updatedToDos => {
    localStorage.setItem('toDos', JSON.stringify(updatedToDos))
  }

  const createFilterButtonClickHandler = filterState => () =>
    setFilterState(filterState)

  const getFilteredToDos = filterState => {
    if (filterState === 'all') return toDos
    if (filterState === 'active')
      return toDos.filter(({completed}) => !completed)
    if (filterState === 'completed')
      return toDos.filter(({completed}) => completed)
  }

  const addToDo = newToDo => setToDos([...toDos, newToDo])

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

  const remainingToDosLength = toDos.filter(({completed}) => !completed).length
  const toDosLength = toDos.length

  return (
    <ToDoListStyle>
      <div className="toDoListMain">
        <ToDoCreate toDos={toDos} addToDo={addToDo} />
        <ToDoFilter
          createFilterButtonClickHandler={createFilterButtonClickHandler}
        />
        <ProgressBar
          remainingToDosLength={remainingToDosLength}
          toDosLength={toDosLength}
        />
        <div className="remainTasks">
          {remainingToDosLength} out of {toDosLength} completed
        </div>
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
