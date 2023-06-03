import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as GoIcons from 'react-icons/go'

const BarIcon = ({showSidebar}) => (
  <NavStyle>
    <Link to="#" className="navLink" onClick={showSidebar}>
      <GoIcons.GoThreeBars className="icon" />
    </Link>
  </NavStyle>
)

export default BarIcon

const NavStyle = styled.div`
  top: 0;
  position: fixed;
  z-index: 1000;

  .navLink {
    margin: 4px 0 0 25px;
    color: #15171c;
    font-size: 40px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
