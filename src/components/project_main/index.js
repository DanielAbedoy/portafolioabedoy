import React, { Component } from 'react';
import '../project_main/style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faLink } from '@fortawesome/free-solid-svg-icons';
import info from '../../const/project_info.json';
import Lightbox from 'react-image-lightbox';


export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      photoIndex: 0,
      isOpen: false,
      image: '',
      error:0
    };
  }

  componentDidMount() {
    axios.get("https://abedoybackend.onrender.com/projects/list")
      .then(i => this.setState({ projects: i.data }))
      .catch( e => {
        this.setState({error:1})
        console.log("Error to connect with API")
      })
  }

  render() {
    const { photoIndex, isOpen, image } = this.state;

    return (
      <Row xl={12} className="main_row">

        {this.state.projects.length === 0 ?
          <>
            <Col xl={4} md="6" xs="11" className="card_col mx-auto">
              <Card className="card_main">
                <blockquote className="blockquote mb-0 card-body">
                  <h2>
                    {this.state.error === 0 ? "Cargando proyectos ...": "Ocurrió un error al cargar los proyectos."}
                  </h2>
                </blockquote>
              </Card>
            </Col>
          </> :
          <>
            {this.state.projects.map(item => (
              <Col xl={4} md="6" xs="11" key={item.id} className="card_col mx-auto">
                <Card className="card_main">
                  <blockquote className="blockquote mb-0 card-body">
                    <h2>
                      {item.name}
                    </h2>
                    <footer className="blockquote-footer">
                      hecho con {"\t"}
                      <strong title="Source Title">
                        {item.tools.map((t,k)=> <span key={k}>{t + " | "}</span> )}
                      </strong>
                    </footer>
                  </blockquote>
                  <Card.Body>
                    <FontAwesomeIcon onClick={() => this.setState({ isOpen: true, image: item.images })} className="icon" size="lg" icon={faImages} /> &nbsp;&nbsp;
                  {
                      item.link !== false &&
                      <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink} /></Card.Link>
                    }
                  </Card.Body>
                </Card>
                {isOpen && (
                  <Lightbox
                    mainSrc={image[photoIndex]}
                    nextSrc={image[(photoIndex + 1) % image.length]}
                    prevSrc={image[(photoIndex + image.length - 1) % image.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + image.length - 1) % image.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % image.length,
                      })
                    }
                  />
              )} 
              </Col>
            ))}
          </>}


      </Row>
    );
  }
}
