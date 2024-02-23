import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from "react-bootstrap";
import css from '../AboutMe/AboutMe.module.css'
import treasure from '../AboutMe/treasure.png';
import {  Heart, Check, PersonBadge, ArrowLeft } from 'react-bootstrap-icons';

export default function AboutMe() {
    
    return(
        <section  className={`${css.container}`}>
            <Container >
                <Row lg={2} sm={1} xs={1} md={1} className='align-items-center'>
                    <Col className='text-center'>
                        <img src={treasure} alt="Me treasure" className={`${css.treasureImg} img-fluid rounded`} />
                    </Col>
                    <Col className={`${css.headText}`} >
                        <h2 className='mt-5  text-center'><span className='text-success '>*</span>About Me</h2>
                        <Row> 
                            <article className='text-center pb-3'>Treasure Japheth, a Nigerian-based web developer with a passion for creating unique and innovative digital experiences with 2 years + in the field. With a background in [<span>RAD5 Tech Hub Aba.</span>], I bring a blend of technical skills and creative thinking to every project.</article>
                            <Col className=' mt-1'> 
                                <h5 className='fw-bolder'><Heart className='text-success fs-4' /> What I Love To Do</h5>
                                <p className='fw-lighter'> I thrive on turning ideas into reality through the language of code. My journey in the world of web development has been exciting, and I constantly seek new challenges to expand my skill set. I specialize in Frontend Development.</p>
                            </Col>
                            <Col className=' mt-2'>
                                <h5 className='fw-bolder'><PersonBadge className='text-success fs-4' /> My Approach</h5>
                                <p className='fw-lighter pt-2'> My approach to web development is mainly for users. I believe in creating websites and applications that not only look good but also provide a seamless and enjoyable experience. I take pride in delivering clean and efficient code.</p>
                            </Col>
                        </Row>
                        <div className='d-flex justify-content-end'>
                            <a href="/"> <ArrowLeft className='text-success'/> Back to Home</a>
                            </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}