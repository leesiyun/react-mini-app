import styled from "styled-components";
import { SidebarDate } from "./SidebarDate";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import SubMenu from "./SubMenu";

const HomeIcon = styled(Link)`
  margin: 0 2rem 0 1rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  color: #f6ab00;
  text-decoration: none;
  div {
    font-size: 23px;
    margin-left: 13px;
  }
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 400ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <HomeIcon to="/" onClick={showSidebar}>
          <FaIcons.FaReact />
          <div>Siyun Mini App</div>
        </HomeIcon>
        <div>
          {SidebarDate.map((item, index) => {
            return (
              <SubMenu item={item} key={index} showSidebar={showSidebar} />
            );
          })}
        </div>
      </SidebarWrap>
    </SidebarNav>
  );
};

export default Sidebar;