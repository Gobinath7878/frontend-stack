import React, { useContext, useRef } from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/stack.svg";
import { AuthContext } from "./../../context/AuthContext";
import {Input} from "reactstrap";


const nav_links = [
   
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "about",
  },
  {
    path: "/products",
    display: "products",
  },
  {
    path: "/teams",
    display: "Teams",
  },

];

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between ">
            <div className="logo">
              <img src={logo} alt="logoImg"/>
            </div>
             
         
             <i className="ri-search-line"></i>
            <Input className="m-5  border-0" placeholder="search here..."></Input>

        
            
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : " "
                      }
                    >
                      {" "}
                      {item.display}{" "}
                    </NavLink>
                  </li>
                ))}
              </div>
            </div>

            <div className="nav_right d-flex align-items-center p-3 gap-1">
              <div className="nav_btns d-flex align-items-center gap-1">
                {user ? (
                  <>
                  <img src="https://cdn-icons-png.flaticon.com/512/636/636847.png?w=740&t=st=1676347784~exp=1676348384~hmac=3819dfa5d70c54c98d0236ce846797baa31e6e1de8d751469a3082f33db6707a" alt="" />
                    <h5 className="m-1 username">{user.username}</h5>
                    <Button className="btn btn-dark m-2" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login" className="fw-bold">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register" className="fw-bold">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
