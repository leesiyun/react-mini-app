import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Home from "./pages/Home";
import Counter from "./pages/counter/Counter";
import CartCounter from "./pages/counter/cartCounter/CartCounter";
import UnitConverter from "./pages/unitConverter/UnitConverter";
import TodoList from "./pages/ToDoList";
import CoinTracker from "./pages/CoinTracker";
import MovieHome from "./pages/movie/MovieHome";
import MovieDetail from "./pages/movie/MovieDetail";
import Search from "./pages/search";

import Sidebar from "./components/Sidebar";
import BarIcon from "./components/BarIcon";

const Container = styled.div``;

const Main = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
`;

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar((current) => !current);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      <Container onClick={sidebar ? showSidebar : null}>
        <BarIcon showSidebar={showSidebar} />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/cart-counter" element={<CartCounter />} />
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route path="/to-do-list" element={<TodoList />} />
            <Route path="/coin-tracker" element={<CoinTracker />} />
            <Route path="/movie" element={<MovieHome />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Main>
      </Container>
    </Router>
  );
};

export default App;
