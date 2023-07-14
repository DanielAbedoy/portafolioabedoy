import React, { Component } from 'react';
import '../about/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../components/footer';
import {Helmet} from 'react-helmet';
import CV from '../../components/cv';
import HamburgerMenu from '../../components/hamburger_menu';
import ReactGa from 'react-ga';

import P5PingPong from '../../components/p5_games/PingPong/Sketch';
class About extends Component {

  state = {
    load:false
  }

  componentDidMount() {
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-199831845-1");
    ReactGa.pageview('daniel-abedoy-web.herokuapp.com - About Screen'); 
    //--Motasim Foads Portfolio website Google analytics--
    this.setState({load:true})
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Sobre me | Daniel Abedoy</title>
                <meta name="description" content="Sobre Daniel Abedoy | Desarrollador web | programador | ingeniero en sistemas computacionales | robotica" />
          </Helmet>

          {this.state.load === true && <P5PingPong />}
           <Row className="About-main">
              <HamburgerMenu />
              <CV/>
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
       </Container>
    );
  }
}

export default About;
