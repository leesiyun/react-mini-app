import { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressbarStyle = styled.div`
  overflow: hidden;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #eee;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  div {
    height: 100%;
    width: ${({ filled }) => (filled ? filled : 0)}%;
    background-color: #f6ab00;
    transition: width 0.5s;
  }
`;

const Progressbar = ({ filledPercentage }) => {
  const [filled, setFilled] = useState(filledPercentage);

  useEffect(() => {
    setFilled(filledPercentage);
  }, [filledPercentage]);

  return (
    <ProgressbarStyle filled={filled}>
      <div></div>
    </ProgressbarStyle>
  );
};

export default Progressbar;
