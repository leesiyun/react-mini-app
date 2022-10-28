import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Menu from "./Menu";

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

const SidebarStyle = styled.nav`
  background: #15171c;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 150ms;
  z-index: 1001;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100vh;
`;

const Sidebar = ({ sidebar, showSidebar }) => (
  <SidebarStyle sidebar={sidebar}>
    <SidebarWrap>
      <HomeIcon to="/" onClick={showSidebar}>
        <FaIcons.FaReact />
        <div>Siyun Mini App</div>
      </HomeIcon>
      <Menu showSidebar={showSidebar} />
    </SidebarWrap>
  </SidebarStyle>
);

export default Sidebar;
