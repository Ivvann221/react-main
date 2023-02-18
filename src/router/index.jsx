import React from "react";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Student from "../pages/Student";
import NewPage from "../pages/NewPage";
import SinglePostPage from "../pages/SinglePostPage";
import { Route, Routes } from "react-router-dom";


const RouterApp = () => {
  return (
    <Routes>
      <Route exact path="/posts/:id" element={<SinglePostPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route exact path="/Posts" element={<Posts />}></Route>
      <Route exact path="/student" element={<Student/>}></Route>
      <Route exact path="/newpages" element={<NewPage/>}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default RouterApp;
