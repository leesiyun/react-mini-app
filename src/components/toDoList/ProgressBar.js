import styled from 'styled-components'

const ProgressBar = ({toDos}) => {
  const remainingToDosLength = toDos.filter(({completed}) => !completed).length
  const toDosLength = toDos.length

  const filledPercentage = (remainingToDosLength / toDosLength) * 100

  return (
    <ProgressBarStyle filled={filledPercentage}>
      <div className="progressBar-wrapper">
        <div className="progressBar"></div>
      </div>
      <div className="remainTasks">
        {remainingToDosLength} out of {toDosLength} completed
      </div>
    </ProgressBarStyle>
  )
}

export default ProgressBar

const ProgressBarStyle = styled.div`
  .progressBar-wrapper {
    overflow: hidden;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: #eee;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    .progressBar {
      height: 100%;
      width: ${({filled}) => (filled ? 100 - filled : 100)}%;
      background-color: #f6ab00;
      transition: width 0.5s;
    }
  }
  .remainTasks {
    color: #2c2c2c;
    width: 100%;
    padding-bottom: 15px;
    border-bottom: 1px solid #dddddd;
    text-align: right;
    margin-top: 10px;
  }
`
