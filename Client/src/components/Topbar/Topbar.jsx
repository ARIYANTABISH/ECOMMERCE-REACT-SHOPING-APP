import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { Container } from "react-bootstrap";
import { GiHelp } from "react-icons/gi";
const Topbar = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <Navbar bg="light" className="z-50 p-2  navbar md:w-auto w-full">
        <Container>
          <div className="logo_name ">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="md:cursor-pointer logo  " />
            </NavLink>
            <NavLink to="/">
              <p className="web_name">
                XEX <span className="one">ONE</span>
              </p>
            </NavLink>
          </div>
          <Nav className="pl-2 nav ">
            <NavLink className="topBar_pages help mt-1" to="/Help">
              <GiHelp className="h-5" />
            </NavLink>

            {/* login and logout  */}
            <div className="topBar_pages">
              {!auth?.user ? (
                <>
                  <NavLink to="/Signup" className="topBar_pages">
                    Register
                  </NavLink>
                  <NavLink to="/login" className="topBar_pages">
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <li>
                    {auth?.user?.name}

                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="topBar_pages"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Topbar;
