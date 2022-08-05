import styled from "styled-components";
const Main = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  text-align: center;
`;

const OrangeMain = styled(Main)`
  color: #f6ab00;
`;

const Home = () => {
  return (
    <Main>
      Siyun <OrangeMain>React</OrangeMain> Mini Apps
    </Main>
  );
};

export default Home;
