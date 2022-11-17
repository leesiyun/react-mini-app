import styled from 'styled-components'

const ToDoFilterStyle = styled.div`
  margin-bottom: 30px;
  button {
    background-color: #fff;
    border-radius: 20px;
    padding: 2px 7px;
    margin-right: 8px;
    vertical-align: middle;
    &:nth-child(1) {
      border: 2px solid #e9e8e8;
      background-color: #e9e8e8;
      color: #464440;
    }
    &:nth-child(2) {
      border: 2px solid #d3e4ef;
      background-color: #d3e4ef;
      color: #193346;
    }
    &:nth-child(3) {
      border: 2px solid #daedda;
      background-color: #daedda;
      color: #1d3829;
    }
    &:focus {
      box-shadow: 0 0 5px 0 #015fcc;
    }
  }
`

const ToDoFilter = ({createFilterButtonClickHandler}) => (
  <ToDoFilterStyle>
    <button onClick={createFilterButtonClickHandler('all')}>● all</button>
    <button onClick={createFilterButtonClickHandler('active')}>● active</button>
    <button onClick={createFilterButtonClickHandler('completed')}>
      ● completed
    </button>
  </ToDoFilterStyle>
)

export default ToDoFilter