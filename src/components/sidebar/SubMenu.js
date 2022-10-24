import { Link } from "react-router-dom";
import styled from "styled-components";

const SubMenuLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  height: 60px;
  font-size: 18px;
  background: #414757;
  padding-left: 2rem;
  color: #f5f5f5;
  display: ${({ show }) => (show ? "flex" : "none")};
  &:hover {
    cursor: pointer;
    background: #c78b04;
  }
`;

const SubMenu = ({ item, showSidebar, toggleTitle, toggle }) => {
  const showContent = item.title === toggleTitle && toggle;
  return (
    <>
      {item.subNav?.map((item, index) => {
        return (
          <SubMenuLink
            to={item.path}
            key={index}
            onClick={showSidebar}
            show={showContent ? 1 : 0}
            //show="1"
          >
            {item.icon}
            <span>{item.title}</span>
          </SubMenuLink>
        );
      })}
    </>
  );
};
export default SubMenu;
