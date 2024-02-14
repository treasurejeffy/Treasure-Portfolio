import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from '../footer/logo.png';
import { Arrow90degDown, Facebook, Twitter, Github, Envelope, Linkedin } from "react-bootstrap-icons";
import Css from '../footer/footer.module.css';

export default function Footer() {
    

    return(
        <section className={`${Css.footerSection}`}>
            <Container>
                <Row lg={1} md={1} sm={1} xs={1} className="text-center">
                    <Col>
                        <img src={logo} alt="logo" height={'70px'} />
                        <article className="text-secondary"> Pls! remember that I focus on making clean code, performance optimization, and intuitive user experiences, I strive to deliver high-quality solutions that exceed expectations. Whether it's creating visually stunning interfaces or implementing complex functionality, I approach each project with enthusiasm, creativity, and a dedication to excellence.</article>
                    </Col>
                    <Col className="pt-4">
                        <div >
                            <a href="https://web.facebook.com/treasure.japheth.14" className="px-2"><Facebook/></a>
                            <a href="https://twitter.com/JaphethTreasure" className="px-2"><Twitter/></a>
                            <a href="https://github.com/treasurejeffy" className="px-2"><Github/></a>
                            <a href="https://www.linkedin.com/in/treasure-japheth-a1a1632b4/" className="px-2"><Linkedin/></a>
                        </div>  
                    </Col>                    
                </Row>
            </Container>
        </section>
    )
}