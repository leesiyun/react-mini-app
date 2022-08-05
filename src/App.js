import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import Home from "./pages/Home";
import Counter from "./pages/Counter";
import UnitConverter from "./pages/UnitConverter";
import TodoList from "./pages/ToDoList";
import CoinTracker from "./pages/CoinTracker";
import MinutesToHours from "./pages/unitConverter/MinutesToHours";
import KmToMiles from "./pages/unitConverter/KmToMiles";

import Sidebar from "./components/Sidebar";
import BarIcon from "./components/BarIcon";

const Container = styled.div``;

const Main = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
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
            <Route path="/unit-converter" element={<UnitConverter />} />
            <Route
              path="/unit-converter/minutes-to-hours"
              element={<MinutesToHours />}
            />
            <Route path="/unit-converter/km-to-miles" element={<KmToMiles />} />
            <Route path="/to-do-list" element={<TodoList />} />
            <Route path="/coin-tracker" element={<CoinTracker />} />
          </Routes>
        </Main>
      </Container>
    </Router>
  );
};

export default App;
