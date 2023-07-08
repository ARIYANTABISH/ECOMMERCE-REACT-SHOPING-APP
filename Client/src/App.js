import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import AllRoutes from "./All_Routes/AllRoutes";
import Home from "./components/HomeScreen.jsx/Home";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Help from "./components/Topbar/Help";
import Signup from "./components/login_signup/Signup";
import Login from "./components/login_signup/Login"; 
import { Toaster } from "react-hot-toast";
import Search from "./components/Search";
const App = () => {
  return (
    <>
      {/* topbar component  */}
      <Topbar />
      <Container>
        {/* Navbar components  */}
        <Navbar />
        <hr />
      </Container>

      <Routes>
        {/* home page  */}
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search/>} />
      </Routes>
      {/* Topbar Components Login And Registration  */}
      <Routes>
        <Route path="/Help" props={Toaster} element={<Help />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      {/* all pages main component routes  */}
      <AllRoutes />

      {/* Footer  */}
      <Footer />
     
    </>
  );
};

export default App;
