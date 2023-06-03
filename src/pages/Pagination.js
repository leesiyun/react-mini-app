import {useState} from 'react'
import {getData} from '../services/pagination'
import {isMobile} from 'react-device-detect'
import {Table, Users} from '../components/search'
import Pagination from '../components/Pagination'
import styled from 'styled-components'

const PaginationApp = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = isMobile ? 5 : 10
  const data = getData(Users, currentPage, dataPerPage)

  return (
    <PaginationAppStyle>
      <Table data={data} />
      <Pagination
        dataLength={Users.length}
        dataPerPage={dataPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PaginationAppStyle>
  )
}
export default PaginationApp

const PaginationAppStyle = styled.div`
  position: relative;
  top: 45px;
  height: 100%;
  color: #2c2c2c;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
