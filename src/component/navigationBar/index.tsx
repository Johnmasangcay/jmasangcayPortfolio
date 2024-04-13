import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./index.module.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end mx-5">
          <Nav className="">
            <Nav.Link className={`${styles.navLink}`} href="#home">Home</Nav.Link>
            <Nav.Link className={`${styles.navLink}`} href="#about">About</Nav.Link>
            <Nav.Link className={`${styles.navLink}`} href="#skills">Skills</Nav.Link>
            <Nav.Link className={`${styles.navLink}`} href="#projects">Projects</Nav.Link>
            <Nav.Link className={`${styles.navLink}`} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavigationBar