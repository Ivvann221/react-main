import React from "react";


import Home from "../pages/Home";
import About from "../pages/About";

import { Route, Routes } from "react-router-dom";


const RouterApp = () => {
  return (
    <Routes>

      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
    
    </Routes>
  );
};

export default RouterApp;
