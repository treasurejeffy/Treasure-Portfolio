import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button} from "react-bootstrap";
import Css from '../Experience&Performance/experience.module.css';
import { ArrowRight, PlusLg } from 'react-bootstrap-icons';
import foodMarket from '../Experience&Performance/market.png';
import form from '../Experience&Performance/form.png';
import Movie from '../Experience&Performance/movies.png';

export default function Experience_Performance() {
    
    return(
        <section className={`${Css.section}`}>
            <Container className='px-3'>
                <div className={`${Css.header} text-center`}>
                    <h2 ><span className='text-danger'>*</span>Performances And Experiences.</h2>
                    <p> In my web Development track, these are my Performances and Experiences.</p>
                </div>
                <Row className={`${Css.Row}`} lg={1} sm={1} md={1} xs={1}>
                    <Col className='pt-4 mb-4'>
                        <div>
                            <h5 className='fs-5'><ArrowRight className='text-danger mx-1'/> Efficient Code Writing:</h5>
                            <article>
                             I pride myself on writing clean, efficient, and maintainable code. This not only ensures that the websites and applications I develop perform well but also makes them easier to debug and enhance in the future.
                            </article>
                        </div>
                    </Col>   
                    <Col>
                        <div className='mb-4'>
                            <h5 className='fs-5'> <ArrowRight className='text-danger mx-1'/> Attention to Detail:</h5>
                            <article>
                             I pay meticulous attention to detail when implementing designs and user interfaces. From pixel-perfect alignment to smooth animations and transitions, I strive to create visually appealing and polished experiences for users.
                            </article>
                        </div>                        
                    </Col> 
                    <Col>
                        <div className='mb-4'>
                            <h5 className='fs-5'><ArrowRight className='text-danger mx-1'/>  Collaboration and Communication: </h5>
                            <article>
                            I collaborate effectively with designers, backend developers, and other stakeholders throughout the development process. Clear communication, active participation in discussions, and the ability to articulate technical concepts are essential aspects of my performance.
                            </article>
                        </div>
                    </Col> 
                    <Col>
                        <div className='mb-4'>
                            <h5 className='fs-5'><ArrowRight className='text-danger mx-1'/>  Problem-Solving Skills:</h5>
                            <article>
                             I approach challenges and obstacles with a problem-solving mindset, using critical thinking and creativity to find innovative solutions. Whether it's debugging code, resolving conflicts, or overcoming technical limitations, I tackle problems head-on to deliver successful outcomes.
                            </article>
                        </div>
                    </Col> 
                    <Col>
                        <div>
                            <h5><ArrowRight className='text-danger mx-1'/> Projects Done:</h5>
                            <Row lg={3} md={3} sm={1} xs={1}>
                                <div>
                                    <main className='card mb-3'>
                                        <img src={foodMarket} alt="market" className='img-fluid mb-4'/>
                                        <article className='px-3'>
                                            A sample of an e-commerce website that deal with friuts and vegetables.It is created with javascript framework (React) & bootstrap.
                                        </article>
                                        <a href="https://sure-market.netlify.app" className='pt-4 pb-4 text-center'>https://sure-market.netlify.app </a>
                                    </main>
                                </div>
                                <div>
                                    <main className='card mb-3'>
                                        <img src={form} alt="market" className='img-fluid mb-4'/>
                                        <article className='px-3'>
                                            This is a sample of a form for  student assessment submission .It is created with javascript framework (React) & bootstrap.
                                        </article>
                                        <a href="https://lms-continous-assessment-form.netlify.app/" className='py-3 text-center'>https://lms-continous-assessment-form.netlify.app</a>
                                    </main>
                                </div>
                                <div>
                                    <main className='card mb-3'>
                                        <img src={Movie} alt="market" className='img-fluid mb-4' height={'200px'}/>
                                        <article className='px-3'>
                                            This is a sample of a Movie website that you can search for movies.It is created with javascript framework (React) & bootstrap.
                                        </article>
                                        <a href="https://movie-site-1fbd6d.netlify.app/" className='py-3 text-center'>   https://movie-site-1fbd6d.netlify.app</a>
                                    </main>
                                </div>
                            </Row>                           
                        </div>                        
                    </Col>                  
                </Row>
                <div  className='d-flex justify-content-end my-4'>
                    <a href="https://github.com/treasurejeffy" className={`${Css.Article}`}>see more <ArrowRight/></a>    
                </div>
            </Container>
        </section>
    )
}