import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {useState, createContext} from "react"
import { ClickedContext } from "./component/Context/Context";

import MainBody from "./component/MainBody/MainBody";
import LoginPage from "./component/LoginPage/LoginPage";
import Signup from "./component/Signup/Signup";
import TutorLogin from "./component/Tutor/TutorLogin";
function App() {


  
  const [toggle,setToggle] = useState(true);

  return (
    <>
    <ClickedContext.Provider value={{toggle,setToggle}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tutorlogin"element={<TutorLogin/>} />
      </Routes>
      </ClickedContext.Provider>
      </>
    
  );
}

export default App;
