import React from 'react';
import '../cv/style.css';
import {
  Col,
  Row
} from 'react-bootstrap';
import CLC from '../cv_left_content';
import CRI from '../cv_img';

function CV() {
  return (
      <Row className="m-0 p-0" style={{height:'100%', width:'100%'}}>
        <Col xl={7} style={{height:"100%"}}>
         < CLC />
        </Col>
        <Col xl={5} className="mx-auto">
         < CRI />
        </Col>
      </Row>
  );
}

export default CV;
