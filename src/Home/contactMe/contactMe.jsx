import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Arrow90degDown, Facebook, Twitter, Github, Envelope, Phone, Linkedin, Telephone } from "react-bootstrap-icons";
import Css from '../contactMe/contactMe.module.css';
import {db} from  '../Config/firebase';
import {getDocs , collection, addDoc} from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from "react";

export default function ContactMe() {
    const [cltName, setCltName] = useState('');
    const [cltEmail, setCltEmail] = useState('');
    const [cltNumber, setCltNumber] = useState();
    const [cltComment, setCltComment] = useState('');
    let [saveData, setSaveData] = useState([]);
    let notify;

    const [currentDateTime, setCurrentDateTime] = useState('');

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

    const getClientsList = async() => {
        try{
            const data  = await getDocs(getClientsCollectionRef);
            const filter = data.docs.map((doc)=>({
                ...doc.data(),
                 id: doc.id,
            }))
            console.log(filter)
        } catch(err){
            console.error(err)
        }
    }

    useEffect (()=>{      
        getClientsList();
    },[])

    let thanks= 'Thanks you I will get back to you through the Email!'

    const handleSubmit = async (e) =>{
        e.preventDefault();
        notify = toast(<b className={`${Css.notify} text-success`}>{thanks}</b>) ;
        try {
            await addDoc(getClientsCollectionRef, {Name: cltName, email: cltEmail, phoneNo: cltNumber, comments: cltComment});    
            getClientsList()   
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <section>
            <Container>
                <div className={`${Css.contactHeader}  text-center mb-4`}>
                    <h2 ><span className="text-primary">*</span>Contact Me</h2>
                    <p>Thank you for visiting my portfolio! If you have any inquiries, collaboration opportunities, or just want to say hello, feel free to reach out to me using any of the following methods: [But remember this is the time <span className="text-danger">{currentDateTime}</span> for you to put your shop, idea & institution into technology.]</p>
                </div>
                <Row className=" align-items-center" lg={2} sm={1} xs={1} md={1} >                   
                    <Col> 
                        <div className={`${Css.contactForm}`}>                  
                            <Form className="bg-light py-5 px-4 mb-3 border rounded"  onSubmit={handleSubmit}>
                                <h5 className="text-center mb-4"> For inquries pls fill this form!</h5>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full Name " className="mb-4" required onChange={(e) => setCltName(e.target.value)}/>
                                <Form.Label>Email Address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email@gmail.com" className="mb-4" required onChange={(e) => setCltEmail(e.target.value)}/>
                                <Form.Label >Phone Number:</Form.Label>
                                <Form.Control type="number" placeholder="Enter your phone number" required onChange={(e) => setCltNumber(e.target.valueAsNumber)}/>
                                <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
                                    <Form.Label>Explain:</Form.Label>
                                    <Form.Control as="textarea" rows={3} onChange={(e) => setCltComment(e.target.value)} placeholder="Explain, how I can help pls."/>
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" className="mt-5 d btn btn-primary px-5 py-2 fs-5"><b> Submit</b></Button>
                                </div>
                            </Form>
                        </div>     
                    </Col>
                    <Col  className=" text-center">
                        <div className={`${Css.contactMesocial} rounded border bg-light`}>
                            <h5 className="mb-5">Get more closer to me!</h5>
                            <div>
                                <a href="https://web.facebook.com/treasure.japheth.14"><Button className="px-5 py-3"><Facebook className="mx-2 mb-1"/><b>facebook</b></Button></a>
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
            </Container>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
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