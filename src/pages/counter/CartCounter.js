import {useState, useRef, useEffect} from 'react'
import {isMobile} from 'react-device-detect'
import styled from 'styled-components'
import CounterButton from '../../components/cartCounter/CounterButton'
import CounterModal from '../../components/cartCounter/CounterModal'
import CounterToggle from '../../components/cartCounter/CounterToggle'

const stock = 17
let numbers = []
for (let i = 1; i <= stock; i++) numbers.push(i)

const Counter = () => {
  const [count, setCount] = useState(1)
  const [isShowCountList, setIsShowCountList] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const wrapperRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleClickListOutside)
    return () => {
      document.removeEventListener('click', handleClickListOutside)
    }
  }, [])

  const handleClickListOutside = event => {
    if (!wrapperRef.current || wrapperRef.current.contains(event.target)) {
      return
    }
    if (isMobile) {
      handleModalClose()
    } else {
      setIsShowCountList(false)
    }
  }

  const handleModalClose = () => {
    setShowModal(false)
    setTimeout(() => {
      setIsShowCountList(false)
    }, 200)
  }

  const handleCountClick = () => {
    if (isMobile) setShowModal(true)
    setIsShowCountList(true)
  }

  const renderCounterList = () => {
    const props = {
      showModal,
      numbers,
      count,
      setCount,
      setIsShowCountList,
      handleModalClose,
    }
    return isMobile ? <CounterModal {...props} /> : <CounterToggle {...props} />
  }

  return (
    <CartCounterStyle ref={wrapperRef}>
      <CounterButton
        handleCountClick={handleCountClick}
        count={count}
        setCount={setCount}
        stock={stock}
      />
      <p>購入可能数：{stock}</p>
      {isShowCountList && renderCounterList()}
    </CartCounterStyle>
  )
}

export default Counter

const CartCounterStyle = styled.div`
  display: block;
  user-select: none;
  p {
    font-size: 14px;
    text-align: center;
    color: #a2a2a2;
    margin-top: 5px;
  }
`
