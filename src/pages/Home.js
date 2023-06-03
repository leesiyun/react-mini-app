import styled from 'styled-components'

const Home = () => (
  <Main>
    <div>
      Siyun <span>React</span> Mini Apps
    </div>
  </Main>
)

export default Home

const Main = styled.div`
  padding: 0 30px;
  line-height: 70px;
  div {
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 800;
    font-size: 45px;
    text-align: center;
    span {
      font-family: 'Poppins', sans-serif;
      font-style: italic;
      font-weight: 800;
      color: #f6ab00;
      padding: 0 10px 0 8px;
    }
  }
`
