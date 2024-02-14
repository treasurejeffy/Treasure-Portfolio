import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Row, Col} from "react-bootstrap";
import logo from '../assets/logo.png';
import MyContent from './BannerHeader/content'
import Navbars from "./Navbar/navbar";
import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./Services/Services";
import Experience_Performance from "./Experience&Performance/experience";
import ContactMe from "./contactMe/contactMe";
import Footer from "./footer/footer";



export default function Home() {
    return(      
        <section>
            <Navbars/>
            <MyContent/>
            <AboutMe/>   
            <MyServices/>  
            <Experience_Performance/>
            <ContactMe/>
            <Footer/>
        </section>
    )
}