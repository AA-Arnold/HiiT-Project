//import all necessary features of the navbar

import React, { Component } from "react";
import logo from "../images/logo.PNG";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavStyle.css";
//compent that handles the toggling of the navbar
class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Logo" height="50px" weight="100px" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Affiliates">Affiliates</Link>
            </li>
            <li>
              <Link to="/Career">Career</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
            <li>
              <Link to="/Contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
