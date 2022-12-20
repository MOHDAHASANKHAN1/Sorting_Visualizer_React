import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Controller from "./components/Controller";
import AlgoDisplay from "./components/AlgoDisplay";
import Home from "./components/Home";
//import Navbarh from "./components/Navbarh";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <NavBar />
              <Controller />
              <AlgoDisplay />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
/*export default function App() {
  return (
<BrowserRouter>
 <Navbarh/>
  <Routes>
	<Route exact path="/" element={<><Home/></>}/>
	<Route exact path="/" element={<><NavBar/><Controller/><AlgoDisplay/></>}/>
  </Routes>
</BrowserRouter>
  );
}*/
