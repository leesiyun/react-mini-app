import styled from "styled-components";

const ToDoTitleStyle = styled.div`
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 40px;
`;

const ToDoTitle = ({ children }) => <ToDoTitleStyle>{children}</ToDoTitleStyle>;

export default ToDoTitle;
