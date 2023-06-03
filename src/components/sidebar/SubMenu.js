import {Link} from 'react-router-dom'
import styled from 'styled-components'

const SubMenu = ({item, showSidebar, isMobile}) =>
  item.subNav?.map((item, index) => (
    <SubMenuStyle to={item.path} key={index} onClick={isMobile && showSidebar}>
      {item.icon}
      <span>{item.title}</span>
    </SubMenuStyle>
  ))

export default SubMenu

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
`
