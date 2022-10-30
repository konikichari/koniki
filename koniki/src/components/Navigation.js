import React from 'react'
import { Nav, Navbar, NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav>
            <NavLink  eventKey="1" to="/">Home</NavLink>
            <NavLink  eventKey="2"  to="#about">About</NavLink>
            <NavLink  eventKey="3" to="/contact">Contact</NavLink>
        </Nav>
    </Navbar.Collapse>     
</Navbar>
  )
}

export default Navigation