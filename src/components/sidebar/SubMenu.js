import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenuStyle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 60px;
  font-size: 18px;
  background: #414757;
  padding-left: 2rem;
  color: #f5f5f5;
  &:hover {
    cursor: pointer;
    background: #c78b04;
  }
`;

const SubMenu = ({ item, showSidebar }) =>
  item.subNav?.map((item, index) => (
    <SubMenuStyle to={item.path} key={index} onClick={showSidebar}>
      {item.icon}
      <span>{item.title}</span>
    </SubMenuStyle>
  ));

export default SubMenu;
