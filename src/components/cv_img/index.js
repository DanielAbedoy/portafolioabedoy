import React, { Component } from 'react';
import '../cv_img/style.css';
import cv1 from '../../assets/img/cv/cv1.jpg';
import cv2 from '../../assets/img/cv/cv2.jpg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

import { Row } from 'react-bootstrap';

const images = [
  cv1,cv2
];

export default class CRI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
        <Row className="flex-column align-items-center justify-content-center m-0 p-0" style={{height:"100%"}}>
          <img src={cv1} onClick={() => this.setState({ isOpen: true })} className="cv_img_mouse rounded" alt="Motasim Foad CV preview"/>
            {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length,
                    })
                  }
                />
              )}
        </Row>     
    );
  }
}