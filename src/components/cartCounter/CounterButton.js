import styled from "styled-components";

const ButtonStyle = styled.div`
  display: flex;
  border: 1px solid #dddddd;
  border-radius: 5px;
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 20px;
    background: inherit;
    padding: 3px 11px;
    border: none;
    cursor: pointer;
    &:nth-child(1) {
      padding: 3px 10px 3px 13px;
    }
  }
  div {
    padding: 3px 15px;
    border-right: 1px solid #dddddd;
    border-left: 1px solid #dddddd;
    text-align: center;
    width: 50px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 4px rgb(35 173 255);
    }
  }
`;

const CounterButton = ({ handleCountClick, count, setCount, stock }) => {
  const handleMinus = () => {
    if (count > 1) setCount((current) => current - 1);
  };

  const handlePlus = () => {
    if (count < stock) setCount((current) => current + 1);
  };

  return (
    <ButtonStyle>
      <button onClick={handleMinus} disabled={count <= 1}>
        -
      </button>
      <div onClick={handleCountClick}>
        <span>{count}</span>
      </div>
      <button onClick={handlePlus} disabled={count >= stock}>
        +
      </button>
    </ButtonStyle>
  );
};

export default CounterButton;
