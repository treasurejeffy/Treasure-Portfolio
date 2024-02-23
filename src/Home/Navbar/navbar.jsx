import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col} from "react-bootstrap";
import logo from '../Navbar/logo.png';
import css from '../Navbar/navbar.module.css';
import { Link } from "react-router-dom";


export default function Navbars() {
    return(      
        <Navbar expand="lg" sticky="top"   className="bg-light">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="name"  height={40}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  className="border-0 shadow-none"/>
                <Navbar.Collapse id="basic-navbar-nav" className="d-lg-flex justify-content-end " >
                    <Nav className={`${css.navs} `}>
                        <Nav.Link href="#home" as={Link} to={'/'} className={`${css.navHome} `}>Home</Nav.Link>
                        <Nav.Link href="#AboutMe" title="AboutMe" as={Link} to={'/AboutMe'}  className={`${css.navAbout} `}>About me</Nav.Link>                   
                        <Nav.Link href="#Contact" title="ContactMe" as={Link} to={'/contactMe'}  className={`${css.navContact} `}>Contact me</Nav.Link>                   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
          
    )
}