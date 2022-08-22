import { useState } from "react";
import styled from "styled-components";
import * as TbIcons from "react-icons/tb";

const CounterStyle = styled.div`
  h3 {
    text-align: center;
  }
  button {
    background: inherit;
    border: none;
    cursor: pointer;
    font-size: 50px;
    padding: 18px 30px;
    &:hover {
      font-size: 53px;
      padding: 16.5px 30px;
    }
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((current) => current + 1);
  };

  return (
    <CounterStyle>
      <h3>Total click: {counter}</h3>
      <button onClick={onClick}>
        <TbIcons.TbHandClick />
      </button>
    </CounterStyle>
  );
};

export default Counter;
