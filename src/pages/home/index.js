import React,{useEffect, useState} from 'react';
import '../home/style.css';
import HomeLeft from '../../components/home_left';
import HomeRight from '../../components/home_right';
import Footer from '../../components/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import { Helmet } from 'react-helmet';
import P5Viborita from '../../components/p5_games/Viborita/Sketch';


//--Motasim Foads Portfolio website Google analytics--
//--Replace with your own key !!
function Analytics() {
  ReactGa.initialize("UA-199831845-1");
    ReactGa.pageview('daniel-abedoy-web.herokuapp.com - Home Screen'); 
}
//--Motasim Foads Portfolio website Google analytics--

function Home() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    
    setLoad(true)
  },[])

  Analytics();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inicio | Daniel Abedoy</title>
        <meta name="description" content="Daniel Abedoy | Inicio - Sotware Engineer | Ingeniero en Sistemas Computacionales" />
      </Helmet>
      
      {/* <Animate to="1" from="0" attributeName="opacity"> */}
      {load === true && <P5Viborita />}
      
        <Container className="App-header" fluid={true}>
          <Row className="App-main">
            <Col xl={7} className="App-left">
              <HomeLeft />
            </Col>
            <Col xl={5} className="App-right">
              <HomeRight />
            </Col>
          </Row>
          <Row className="App-footer">
            <Footer />
          </Row>
        </Container>
      {/* </Animate> */}
    </div>
  );
}

export default Home;
