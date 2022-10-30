import React from 'react'
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from 'react-scroll';
import "./Navigation.css"
// import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect className='sticky-nav' expand="sm" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav>

            <NavLink  eventKey="1" to="/">
              <Link to='profile' smooth={true} duration={100}>Home</Link>
            </NavLink>
            <NavLink  eventKey="2" >
              <Link to='skills' smooth={true} duration={100}>Skills</Link>
            </NavLink>
            <NavLink  eventKey="3" >
              <Link to='contact' smooth={true} duration={100}>Contact</Link>
            </NavLink>
            
        </Nav>
    </Navbar.Collapse>     
</Navbar>
  )
}

export default Navigation