import styled from 'styled-components'
import {getStartPage, getLastPage} from '../services/pagination'

const Pagination = ({dataLength, dataPerPage, currentPage, setCurrentPage}) => {
  const startPage = getStartPage(currentPage, dataPerPage)
  const lastPage = getLastPage(currentPage, dataPerPage)
  const totalPage = Math.ceil(dataLength / dataPerPage)
  const paginationGroup = [...Array(totalPage + 1).keys()].slice(
    startPage,
    lastPage,
  )

  const disabledPreButton = currentPage <= dataPerPage
  const disabledNextButton = currentPage > totalPage - (totalPage % dataPerPage)

  const handlePreButtonClick = () => setCurrentPage(startPage - 1)
  const handleNextButton = () => setCurrentPage(lastPage)
  const changePage = number => setCurrentPage(number)

  const isCurrentPage = number => number === currentPage
  return (
    <PaginationStyle>
      <button
        onClick={handlePreButtonClick}
        disabled={disabledPreButton}
        className="button"
      >
        &lt;
      </button>
      {paginationGroup.map((number, index) => (
        <button
          key={index}
          className={isCurrentPage(number) ? 'focus' : ''}
          onClick={() => changePage(number)}
        >
          {number}
        </button>
      ))}
      <button
        onClick={handleNextButton}
        disabled={disabledNextButton}
        className="button"
      >
        &gt;
      </button>
    </PaginationStyle>
  )
}

export default Pagination

const PaginationStyle = styled.div`
  width: 100%;
  justify-content: flex-end;
  margin-top: 10px;
  display: inline-flex;
  button {
    width: 36px;
    height: 40px;
    appearance: none;
    background-color: #fff;
    cursor: pointer;
    &:disabled {
      cursor: default;
    }
    border: 1px solid #dddddd;
    border-right: none;
    &:last-child {
      border-right: 1px solid #dddddd;
    }
  }
  .focus {
    background-color: #f1f1f1;
  }
`
