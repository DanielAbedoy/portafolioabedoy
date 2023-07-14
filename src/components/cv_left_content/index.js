import React, { Component } from 'react';
import '../cv_left_content/style.css';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';


import CVPdf from '../../assets/files/CV - Jose Daniel Abedoy.pdf';

import Lightbox from 'react-image-lightbox';
/* import {Modal, Button} from 'react-bootstrap'; */
import Projects from '../projects';
import { Link, useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1
    }}
  />
);

class CLC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      show: false,
    };
  }

  toggleModal = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    const { photoIndex, isOpen, show } = this.state;
    return (

      <div className="clc_main">
        <div className="clc_container">

          <h1 className="clc_header">Sobre mi</h1>
          <p className="text-center parrafo-me">
            ! Hola ¡ Soy José Daniel Abedoy Silva, nací el 7 de Septiembre de 1999 en la Ciudad de México.<br />
                Desde muy pequeño me vi interesado por crear cosas, diseñarlas y experimentar con ellas, ahora soy fiel amante de la programación y la robótica.
                Pero mi vida no solo gira alrededor de la programación y de estudiar, también me gusta hacer muchísimas cosas como hacer deporte, bailar, tocar guitarra y disfrutar la vida.
                </p>
          {/* </Fade> */}
          <ColoredLine color="#000000" />
          {/* <Fade top cascade> */}
          <div className="AboutBtnContainer">
            <Link to={'./proyectos'} className="left"><FontAwesomeIcon icon={faHdd} className="left_icon" /><br /><br />Proyectos & Experiencia</Link>
            <div className="right"><FontAwesomeIcon onClick={() => this.setState({ show: true })} icon={faGithubSquare} className="right_icon" /><br /><br />Proyectos en Git</div>
            <div className="center"><FontAwesomeIcon  icon={faFilePdf} className="center_icon" /><br /><br /><a href={CVPdf} download>Descargar CV</a></div>
          </div>
          {/* </Fade> */}
        </div>
       
        <Modal size="xl" isOpen={show} toggle={this.toggleModal} >
          <ModalHeader className="modalHeader border border-white" toggle={this.toggleModal}>
            <p className="display-4 text-center m-0" style={{ fontFamily: "'VT323'" }}><b>Proyectos GitHub</b></p>
          </ModalHeader>
          <ModalBody>
            <Projects />
          </ModalBody>
        </Modal>


      </div>

    );
  }


}

export default CLC;
