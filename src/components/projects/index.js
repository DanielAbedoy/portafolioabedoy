import React from 'react';
import '../projects/style.css';
import {
  Container,
  Row,
} from 'react-bootstrap';
import PCD from '../project_card_details';

function Projects() {
  return (
    <Container className="project_main" fluid>
        <PCD />
    </Container>
  );
}

export default Projects;
