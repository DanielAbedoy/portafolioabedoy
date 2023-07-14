import React from 'react';
import Sketch from 'react-p5';

import Mapa from './Mapa';

import ViboritaScket from '../Viborita/Sketch';

const P5Viborita = () => {

  const screen = document.getElementById("root");
  let w = screen.offsetWidth;
  let h = screen.offsetHeight;
  let font = "";
  let mapa;
  let play = false;

  const preload = (p5) => {
    font = p5.loadFont(require('../../../assets/fonts/VT323-Regular.ttf'))
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h - 5).parent(canvasParentRef);
    p5.textSize(70);
    p5.textFont(font)


    if (w < 1020) mapa = new Mapa(p5, { r: w - 40, l: 40, t: 50, b: (h*0.48) - 70 }, w);
    else mapa = new Mapa(p5, { r: (w * 0.55) - 40, l: 40, t: 50, b: h - 70 }, w);

  };

  const draw = (p5) => {
    p5.background(139, 179, 3);
    p5.fill(52);
    p5.textSize(55);
    p5.text(mapa.marcador, 100, 40);
   
    p5.textSize(15);
    p5.strokeWeight(0);
    if (w > 550) {
      p5.text("Tecla 'ENTER' para jugar | Tecla 'W' para saltar " , (w/2)-110, 45);  
    }
    
    //Verticales
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, 50, 10, 10);
      i += 5;
    }
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, (h - 50), 10, 10);
      i += 5;
    }
    //Horizontales
    for (let i = 50; i < (h - 50); i += 10) {
      p5.rect(10, i, 10, 10);
      i += 5;
    }
    for (let i = 50; i < (h - 50); i += 10) {
      p5.rect((w - 20), i, 10, 10);
      i += 5;
    }
    if (w > 550 && play) {
      mapa.show();
    }
  };

  const keyPressed = (p5) => {
    if (p5.keyCode === 87) mapa.salto();
    if (p5.keyCode === 13) play = !play;
  }

  const touch = (p5) => {
    mapa.salto();
  }


  if (w > 570) {
    return <Sketch
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",

      }}
      setup={setup} draw={draw} preload={preload} keyPressed={keyPressed} touchStarted={touch}
    />;
  }else return <ViboritaScket />
}

export default P5Viborita;