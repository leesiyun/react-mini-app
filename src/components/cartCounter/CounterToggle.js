import { useEffect } from "react";
import styled from "styled-components";
import * as VscIcons from "react-icons/vsc";

const ToggleStyle = styled.div`
  position: fixed;
  cursor: pointer;
  transform: translate(0.5%, -18.6%);
  border: 1px solid #dddddd;
  background-color: #fff;
  border-radius: 5px;
  width: 119px;
  div {
    padding: 1px 0px 1px 30px;
    display: flex;
    box-shadow: 0 0 4px rgb(35 173 255);
    div {
      box-shadow: none;
      margin-right: 20px;
      width: 34.5px;
      padding: 1.5px 11px 2px 6px;
    }
    span {
      padding: 3px 8px 0px 8px;
      border-left: 1px solid #dddddd;
      font-size: 18px;
    }
  }
  ul {
    height: 380px;
    overflow-y: auto;
  }
`;

const ToggleList = styled.li`
  width: 100%;
  padding: 2.5px 10px 2.5px 0px;
  text-align: center;
  border-top: 1px solid #dddddd;
  background-color: ${(props) =>
    props.value === props.count ? "#f1f1f1" : "#fff"};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const CounterToggle = ({ numbers, count, setCount, setIsShowCountList }) => {
  useEffect(() => {
    const countListHeight = 38;
    const scroller = document.querySelector(".scroller");
    if (scroller) scroller.scrollTo({ top: (count - 1) * countListHeight });
  }, [count]);

  const handleClose = () => {
    setIsShowCountList(false);
  };

  const handleClick = (e) => {
    setCount(Number(e.target.value));
    handleClose();
  };

  return (
    <ToggleStyle>
      <div>
        <div>{count}</div>
        <span onClick={handleClose}>
          <VscIcons.VscChevronUp />
        </span>
      </div>
      <ul className="scroller">
        {numbers.map((number) => (
          <ToggleList
            key={number}
            value={number}
            count={count}
            onClick={handleClick}
          >
            {number}
          </ToggleList>
        ))}
      </ul>
    </ToggleStyle>
  );
};

export default CounterToggle;
