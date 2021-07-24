import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "./App.css";
import logo from "./assets/logo.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ backgroundColor: "#FF5D5D ", width: "100%" }}>
      <div className="container">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" style={{ margin: "auto" }} navbar>
              <NavItem>
                <NavLink className="TextNav active" href="#">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextNav" href="#">
                  New Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextNav" href="#">
                  Women
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextNav" href="#">
                  Men
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextNav" href="#">
                  Kid
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="TextNav" href="#">
                  Accessories
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
