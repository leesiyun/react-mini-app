import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import * as VscIcons from "react-icons/vsc";

const slideIn = keyframes`
from { 
  margin-top: 82%;
  height: 40%;
}
to {
  margin-top: 0%;
  height: 82%;
}
`;

const slideOut = keyframes`
from { 
  margin-top: 0%;
  height: 82%;
}
to {
  margin-top: 82%;
  height: 0%;
}
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const ModalStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 82%;
  z-index: 100;
  left: 0;
  bottom: 0;
  background-color: #fff;
  font-size: 15px;
  animation: ${(props) => (props.animate ? slideIn : slideOut)} 0.2s;
  header {
    position: fixed;
    padding: 16px 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #dddddd;
    div {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      font-weight: 400;
      font-size: 18px;
    }
    span {
      position: absolute;
      top: 19px;
      left: 13px;
      right: auto;
      font-size: 25px;
      color: #a2a2a2;
      cursor: pointer;
    }
  }
  main {
    padding: 64px 0px 50px 0;
    left: 0;
    height: 100%;
    z-index: 101;
    overflow-y: auto;
  }
`;

const ModalOverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 18%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 102;
  animation: ${(props) => (props.animate ? "" : fadeOut)} 0.2s;
`;

const ModalListStyle = styled.li`
  width: 100%;
  height: 82%;
  padding: 13px 23px;
  border-top: 1px solid #dddddd;
  color: #2c2c2c;
  background-color: ${(props) =>
    props.value === props.count ? "#f1f1f1" : "#fff"};
`;

const CounterModal = ({
  showModal,
  numbers,
  count,
  setCount,
  handleModalClose,
}) => {
  useEffect(() => {
    const countListHeight = 59;
    const scroller = document.querySelector(".scroller");
    if (scroller) scroller.scrollTo({ top: (count - 1) * countListHeight });
  }, [count]);

  const handleClick = (e) => {
    setCount(Number(e.target.value));
    handleModalClose();
  };
  return (
    <ModalStyle animate={showModal}>
      <ModalOverlayStyle onClick={handleModalClose} animate={showModal} />
      <header>
        <div>数量</div>
        <span onClick={handleModalClose}>
          <VscIcons.VscChromeClose />
        </span>
      </header>
      <main className="scroller">
        <ul>
          {numbers.map((number) => (
            <ModalListStyle
              key={number}
              value={number}
              count={count}
              onClick={handleClick}
            >
              {number}
            </ModalListStyle>
          ))}
        </ul>
      </main>
    </ModalStyle>
  );
};

export default CounterModal;
