import React from 'react';
import '../contact/style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer';
import Animate from 'react-smooth';
import HamburgerMenu from '../../components/hamburger_menu';
import ContactLeft from '../../components/contact_left';
import EmailForm from '../../components/email_form';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import particles from '../../const/contact_particle.js';
import Particles from 'react-particles-js';

import P5FlappyBird from '../../components/p5_games/FlappyBird/Sketch'
class Contact extends React.Component {

  state={
    load:false
  }

  componentDidMount() {
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-199831845-1");
    ReactGa.pageview('daniel-abedoy-web.herokuapp.com - Contact Screen'); 

    this.setState({ load: true });
  }
  //--Motasim Foads Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contacto | Daniel Abedoy</title>
          <meta name="description" content="Daniel Abedoy | Contacto | Ingeniero en sistemas" />
        </Helmet>
        {this.state.load === true && <P5FlappyBird />}
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />
            </Row>
            <Row className="Contact-main">
              <Col xl={6} className="Contact-left">
                <ContactLeft />
              </Col>
              <Col xl={6} className="Contact-right">
                <EmailForm />
              </Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
      </div>
    )
  }
} export default Contact