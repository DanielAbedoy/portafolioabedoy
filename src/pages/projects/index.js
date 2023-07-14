import React, { Component } from 'react';
import '../projects/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import {Helmet} from 'react-helmet';
import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../const/project_particle.js';
import Particles from 'react-particles-js';
import ProjectBody from '../../components/project_main';

import ReactGa from 'react-ga';

import P5Cohetes from '../../components/p5_games/Coetes/Sketch';

class Projects extends Component {

  state={
    load:false
  }

  componentDidMount = () => {
    ReactGa.initialize("UA-199831845-1");
    ReactGa.pageview('daniel-abedoy-web.herokuapp.com - Projects Screen'); 
    this.setState({ load: true });
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Proyectos | Daniel Abedoy</title>
                <meta name="description" content="Danie Abedoy |  Proyectos | Ingeniero en sistemas " />
          </Helmet>
           
           
           <Row className="About-main m-0 p-0">
            {this.state.load === true && <P5Cohetes />}
              <HamburgerMenu />
              <ProjectBody />
           </Row>
           <br/>
          <Row className="About-footer">
           <Footer />
          </Row>
       </Container>
    );
  }
}

export default Projects;
