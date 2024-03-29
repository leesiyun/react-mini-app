import {useState, useEffect, useRef} from 'react'
import {Table, Users} from '../components/search'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'

const Search = () => {
  const target = useRef(null)
  const [arrayNum, setArrayNum] = useState(10)
  const [query, setQuery] = useState('')
  const keys = ['first_name', 'last_name', 'email']

  const searchData = Users.filter(item =>
    keys.some(key => item[key].toLowerCase().includes(query)),
  )

  const searchQuery = e => setQuery(e.target.value.toLowerCase())

  const [observe, unobserve] = useIntersectionObserver(() =>
    setArrayNum(prev => prev + 10),
  )

  useEffect(() => {
    if (arrayNum === 10) observe(target.current)
    const totalCount = searchData.length

    if (totalCount <= arrayNum) {
      unobserve(target.current)
    }
  }, [searchData])

  return (
    <SearchStyle className="Search">
      <div>
        <FaIcons.FaSearch className="icon" />
        <input type="text" placeholder="Search..." onChange={searchQuery} />
      </div>
      <Table data={searchData.slice(0, arrayNum)} />
      <div ref={target} style={{width: '100%', height: 30}} />
    </SearchStyle>
  )
}

export default Search

const SearchStyle = styled.div`
  height: 100%;
  margin-top: 150px;
  color: #2c2c2c;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  div {
    text-align: center;
    width: 80%;
  }

  .icon {
    font-size: 20px;
    margin-top: 22px;
    position: relative;
    left: 14%;
  }

  input {
    font-size: 18px;
    width: 80%;
    float: right;
    border: none;
    border-bottom: 1px solid #dddddd;
    padding: 20px 20px 16px 70px;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    .icon {
      font-size: 17px;
      left: 18%;
    }

    input {
      font-size: 15px;
      padding: 20px 20px 10px 60px;
    }
  }
`
