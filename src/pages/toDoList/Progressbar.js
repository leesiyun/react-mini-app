import styled from 'styled-components'

const ProgressBarStyle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #eee;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  div {
    height: 100%;
    width: ${({filled}) => (filled ? filled : 0)}%;
    background-color: #f6ab00;
    transition: width 0.5s;
  }
`

const ProgressBar = ({remainingToDosLength, toDosLength}) => {
  const filledPercentage = (remainingToDosLength / toDosLength) * 100

  return (
    <ProgressBarStyle filled={filledPercentage}>
      <div></div>
    </ProgressBarStyle>
  )
}

export default ProgressBar
