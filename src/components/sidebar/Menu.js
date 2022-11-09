import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Data } from "./Data";
import SubMenu from "./SubMenu";

const MenuStyle = styled.div`
  .menuLink {
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 60px;
    font-size: 18px;
    color: #e1e9fc;
    justify-content: space-between;
    padding: 20px;
    list-style: none;
    &:hover {
      cursor: pointer;
      background: #252831;
      border-left: 4px solid #f6ab00;
      color: #f6ab00;
    }
  }

  .icon {
    position: relative;
    top: 2px;
    margin-left: 0px;
  }

  span {
    margin-left: 16px;
  }
`;

const Menu = ({ showSidebar, isMobile }) => {
  const [toggleTitle, setToggleTitle] = useState("");

  const showSubMenu = ({ target: { innerText } }) => {
    setToggleTitle(toggleTitle === innerText ? "" : innerText);
  };

  const renderIcon = (item) => {
    if (!item.subNav) return null;
    return toggleTitle === item.title ? item.iconOpened : item.iconClosed;
  };

  const moblieCheckAndShowSidebar = () => {
    if (isMobile) showSidebar();
  };

  return Data.map((item, index) => {
    return (
      <MenuStyle key={index}>
        <Link
          className="menuLink"
          to={item.path}
          onClick={item.subNav ? showSubMenu : moblieCheckAndShowSidebar}
        >
          <div>
            <span className="icon"> {item.icon}</span>

            <span>{item.title}</span>
          </div>
          {renderIcon(item)}
        </Link>
        {toggleTitle === item.title && (
          <SubMenu item={item} showSidebar={showSidebar} isMobile={isMobile} />
        )}
      </MenuStyle>
    );
  });
};

export default Menu;
