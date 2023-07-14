import React from 'react';
import Sketch from 'react-p5';

import Cohete from './Cohete';

const P5Cohetes = () => {

  const screen = document.getElementById("root");
  let w = screen.offsetWidth;
  let h = screen.offsetHeight;
  let cohetes;
  let limites;


  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h - 5).parent(canvasParentRef);

    limites = { l: 10 + 20, r: w - 20, b: h - 50 };
    cohetes = [];
    
  };

  const draw = (p5) => {
    p5.background(139, 179, 3);
    p5.fill(52);
    p5.textSize(70);


  
    //Verticales
    p5.strokeWeight(0);
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, 20, 10, 10);
      i += 5;
    }
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, (h - 50), 10, 10);
      i += 5;
    }
    //Horizontales
    for (let i = 20; i < (h - 50); i += 10) {
      p5.rect(10, i, 10, 10);
      i += 5;
    }
    for (let i =20; i < (h - 50); i += 10) {
      p5.rect((w - 20), i, 10, 10);
      i += 5;
    }

    //if(c.activo === true)c.update();
    if (p5.random(1) < 0.2) cohetes.push(new Cohete(p5, limites));
    cohetes.forEach((c, i) => {
      c.update();
      if (!c.activo)cohetes.splice(i, 1);
    })

  };



  return <Sketch
    style={{
      position: "absolute",
      top: "0",
      bottom: "0",
      left:"0"

    }}
    setup={setup} draw={draw}
  />;
}

export default P5Cohetes;