import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Data } from "./Data";
import SubMenu from "./SubMenu";

const SidbarMenu = styled.div`
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

  span {
    margin-left: 16px;
  }
`;

const Menu = ({ showSidebar }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleTitle, setToggleTitle] = useState("");

  const showSubMenu = (e) => {
    setToggleTitle(e.target.innerText);
    setToggle((current) => !current);
    console.log(toggleTitle, e.target.innerText, toggle);
  };

  return (
    <>
      {Data.map((item, index) => {
        return (
          <SidbarMenu key={index}>
            <Link
              className="menuLink"
              to={item.path && item.path}
              onClick={item.subNav ? showSubMenu : showSidebar}
            >
              <div>
                {item.icon}
                <span>{item.title}</span>
              </div>
              <div>
                {item.subNav && toggle
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
              </div>
            </Link>
            {toggle && (
              <SubMenu
                item={item}
                showSidebar={showSidebar}
                toggleTitle={toggleTitle}
                toggle={toggle}
              />
            )}
          </SidbarMenu>
        );
      })}
    </>
  );
};

export default Menu;
