import React from 'react';

import AnimatedCard from '@sl-codeblaster/react-3d-animated-card';



const Card3D = ({ img, content }) => {

  return (
    <AnimatedCard
      config={{
        rotation: 50, // this value for the divide (window.innerWidth / 2 - e.pageX) / rotation && (window.innerWidth / 2 - e.pageY) / rotation
        transition: {
          duration: 0.5,
          timingMode: "ease"
        },
        transform: {
          figureIcon: {
            rotation: 1,
            translateZ: 160
          },
          titleTranslateZ: 140,
          bodyTextTranslateZ: 100,
          buttonTranslateZ: 80
        }
      }}
      style={{
        width: "100%", //container style (you can use className as well)
        fontFamily:"'VT323' monospace"
      }}
      
    >

      <div className="card shadow-lg" >
        <div className="figure">
          <div className="figure_bg" /> 
            <img className="mx-auto" width="50%" src={require('../../assets/img/logo-figuras-negro.png')} alt="" />
        </div>
        <div className="content">

          {content}
        </div>
       {/*  <div className="footer">
          <button className={"footer_btn btn btn-success"}>BUTTON</button>
        </div> */}
      </div>

    </AnimatedCard>
  );
}

export default Card3D;