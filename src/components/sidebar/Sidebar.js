import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

import Menu from './Menu'

const Sidebar = ({sidebar, showSidebar, isMobile}) => (
  <SidebarStyle sidebar={sidebar}>
    <div className="sidebarWrap">
      <Link to="/" className="homeIcon" onClick={isMobile && showSidebar}>
        <FaIcons.FaReact />
        <div>Siyun Mini App</div>
      </Link>
      {!isMobile && (
        <div onClick={showSidebar}>
          <FaIcons.FaAngleDoubleLeft className="closeIcon" />
        </div>
      )}
      <Menu showSidebar={showSidebar} isMobile={isMobile} />
    </div>
  </SidebarStyle>
)

export default Sidebar

const SidebarStyle = styled.nav`
  background: #15171c;
  width: 250px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 150ms;
  z-index: 1001;

  .sidebarWrap {
    width: 100%;
    height: 100vh;
  }

  .homeIcon {
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
  }

  .closeIcon {
    position: absolute;
    left: 249px;
    font-size: 30px;
    margin: 0 2rem 0 1rem;
    top: 25px;
  }
`
