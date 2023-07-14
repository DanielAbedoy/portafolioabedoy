import React from 'react';
import '../contact_left/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Contact_Left() {
  return (
    <div>
           <Row className="Contact-text">
              <Col xl={12}>
              <h1 className="p-heading1">Ponte en Contacto</h1>
              <p className="p-heading2">
              Hola <strong>Visitante !!</strong><br />
              Gracias por visitar mi web. Si tu tienes alguna peticion/idea/proyecto, hazme un <strong>PING</strong>.
              Siempre estoy abierto a nuevas propuestas. Puedes contactarme a tavés del formulario de contacto <strong>O también</strong> puedes hacer click en algun icono de red social
              si es más comodo para ti.
              </p>
              </Col>
           </Row>
          
            <Row className="contact-left-footer" >
              <SocialIcons />
            </Row>
    </div>
  );
}

export default Contact_Left;
