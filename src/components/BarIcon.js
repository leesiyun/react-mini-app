import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const NavStyle = styled.div`
  top: 0;
  position: fixed;
  z-index: 1000;

  .navLink {
    margin-left: 25px;
    color: #15171c;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const BarIcon = ({ showSidebar }) => (
  <NavStyle>
    <Link to="#" className="navLink" onClick={showSidebar}>
      <FaIcons.FaBars />
    </Link>
  </NavStyle>
);

export default BarIcon;
