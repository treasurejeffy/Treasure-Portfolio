import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Arrow90degDown, Facebook, Twitter, Github, Envelope, Phone, Linkedin, Telephone, ArrowLeft, ClockFill } from "react-bootstrap-icons";
import Css from '../contactMe/contactMe.module.css';
import {db} from  '../Config/firebase';
import {getDocs , collection, addDoc} from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    let [saveData, setSaveData] = useState([]);
    let notify;
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phoneNo: ''
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
      // Function to get the current date and time
      const getCurrentDateTime = () => {
        const dateTime = new Date().toLocaleString();
        setCurrentDateTime(dateTime);
      };
  
      // Call the function once when the component mounts
      getCurrentDateTime();
  
      // Set interval to update the time every second
      const interval = setInterval(() => {
        getCurrentDateTime();
      }, 1000);
  
      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }, []);

    const [clientList,setClientList ]= useState ([])
    const getClientsCollectionRef = collection(db,'clientsData')

    const form = useRef();
    
    const getClientsList = async() => {
        try{
            const data  = await getDocs(getClientsCollectionRef);
            const filter = data.docs.map((doc)=>({
                ...doc.data(),
                 id: doc.id,
            }))
            // console.log('Data:',filter)
        } catch(err){
            console.error(err)
        }
    }

    useEffect (()=>{      
        getClientsList();
        setSaveData([])
    },[])

    let thanks= `Thanks you I will get back to you through the Email.`
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            await addDoc(getClientsCollectionRef, formData);            
            getClientsList();
  
             // Using e.target to pass the form element
            emailjs.sendForm(
                'service_ngxlbie',  // Replace with your service ID
                'template_t75y0se',  // Replace with your template ID
                e.target,         // The form element
                'AK3AlCoxqm-QRicYs'  // Replace with your public key
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
            toast.success(<b className="text-semibold text-success">{thanks}</b> );
            setSaveData(...saveData,formData)
        } catch (error) {
            console.error(error)
        }finally {
            setLoading(false);
          }
    }  
    
    return(
        <section className="mt-5">
            <Container>
                <div className={`${Css.contactHeader}  text-center mb-4`}>
                    <h2 ><span className="text-primary">*</span>Contact Me</h2>
                    <p>Thank you for visiting my portfolio! If you have any inquiries, collaboration opportunities, or just want to say hello, feel free to reach out to me using any of the following methods: [But remember this is the time <ClockFill className="fs-4 fw-bold text-primary "/> <span className="text-danger pe-auto">{currentDateTime}</span> for you to put your shop, idea & institution into technology.]</p>
                </div>
                <Row className=" align-items-center" lg={2} sm={1} xs={1} md={1} >                   
                    <Col> 
                        <div className={`${Css.contactForm}`}>                  
                            <Form className="bg-light py-5 px-4 mb-3 border rounded" ref={form}  onSubmit={handleSubmit}>
                                <h5 className="text-center mb-4"> For inquries pls fill this form!</h5>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full Name " className="mb-4"  name="name" value={formData.name} onChange={handleChange} required/>
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email@gmail.com" className="mb-4"  name="email" value={formData.email} onChange={handleChange} required/>
                                <Form.Label >Phone Number:</Form.Label>
                                <Form.Control type="number" placeholder="Enter your phone number"  name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
                                <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
                                    <Form.Label>Explain:</Form.Label>
                                    <Form.Control as="textarea" rows={4}  name="message" value={formData.message} onChange={handleChange} required placeholder="Explain, how I can help pls."/>
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                <Button type="submit" disabled={loading} className="mt-5 btn btn-primary px-5 py-2 fs-5">
                                    {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span className="ms-2"><b>Loading...</b></span>
                                    </>
                                    ) : (
                                    <b>Submit</b>
                                    )}
                                </Button>
                                </div>
                            </Form>
                        </div>     
                    </Col>
                    <Col  className=" text-center">
                        <div className={`${Css.contactMesocial} rounded border bg-light`}>
                            <h5 className="mb-5 ">Get more closer to me!</h5>
                            <div>
                                <a href="https://web.facebook.com/treasure.japheth.14" disabled><Button className="px-5 py-3"><Facebook className="mx-2 mb-1"/><b>facebook</b></Button></a>
                            </div>
                            <div className="mt-4">
                                <a href="https://twitter.com/JaphethTreasure"><Button className="px-5 py-3"><Twitter className="mx-2 mb-1"/><b className="px-2">Twitter</b></Button></a>
                            </div>
                            <div className="mt-4">
                                <a href="https://www.linkedin.com/in/treasure-japheth-a1a1632b4/"><Button className="px-5 py-3"><Linkedin className="mx-1 mb-1"/><b className="px-2">Linkedin</b></Button></a>
                            </div>
                            <div className="mt-4">
                                <a href="https://github.com/treasurejeffy"><Button className="px-5 py-3"><Github className="mx-2 mb-1"/><b className="px-2">Github</b></Button></a>
                            </div>
                            <div className="mt-4">
                                <Button className="px-4  btn btn-light border-2  bg-light py-3"><Telephone className="mx-2"/><b className="px-2">09019065284</b></Button>
                            </div>
                            <div className="mt-4">
                                <Button className="px-1 btn btn-light py-3  bg-light border-2"><Envelope className="mx-2 mb-1"/><b className="px-1">treasurejeffy@gmail.com</b></Button>
                            </div>                            
                        </div>
                    </Col>
                </Row>
                <div className={`${Css.backToHome} d-flex justify-content-end my-4 text-dark`} >
                    <a href="/"><ArrowLeft className="text-primary"/> Back to home</a>
                </div>
            </Container>
            <ToastContainer
                    position="top-right"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
            />
        </section>
    )
}