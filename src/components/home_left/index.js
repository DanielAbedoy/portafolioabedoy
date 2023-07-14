import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hola! 
         </h1>
         <h2 className="second_line">
           Soy Daniel Abedoy
         </h2>
         <h3>
         <ReactTypingEffect
           text="Ingeniero en Sistemas Computacionales ... " //text=["Hello.", "World!"]
           className="typical"
           speed="50"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn mb-2"><Link to="/sobre-mi" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Sobre mi</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn mb-2"><Link to="/game" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Mi pueblo</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn mb-2"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contacto" className="home-left-aboutme">Contactame</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
