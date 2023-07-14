import React,{useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import Gamesketch from '../../components/my_game/sketch';

import './styles.css';

//--Motasim Foads Portfolio website Google analytics--
//--Replace with your own key !!
function Analytics() {
  /* ReactGa.initialize("UA-154721739-1")
  ReactGa.pageview('motasimfoad.com - Home Screen') */
}
//--Motasim Foads Portfolio website Google analytics--

function Home() {

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true)
  },[])

  //Analytics()
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inicio | Daniel Abedoy</title>
        <meta name="description" content="Daniel Abedoy | Inicio - Sotware Engineer | Ingeniero en Sistemas Computacionales" />
      </Helmet>
    
      {load === true && <Gamesketch />}
      
    </div>
  );
}

export default Home;
