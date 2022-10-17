import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const Nav = styled.div`
  top: 0;
  position: fixed;
`;

const NavIcon = styled(Link)`
  margin-left: 25px;
  color: #15171c;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BarIcon = ({ showSidebar }) => (
  <Nav>
    <NavIcon to="#" onClick={showSidebar}>
      <FaIcons.FaBars />
    </NavIcon>
  </Nav>
);

export default BarIcon;
