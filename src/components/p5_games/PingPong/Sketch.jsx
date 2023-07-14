import React from 'react';
import Sketch from 'react-p5';

import Cancha from './Cancha';
import Pelota from './Pelota';
import Raqueta from './Raqueta';



const P5Viborita = () => {

  const screen = document.getElementById("root");
  let w = screen.offsetWidth;
  let h = screen.offsetHeight;
  let font = "";
  let cancha;
  let pelota;
  let raqueta;
  let golpe = false;
  let offset = 0;


  const preload = (p5) => {
    font = p5.loadFont(require('../../../assets/fonts/VT323-Regular.ttf'))
  }

  const setup = (p5, canvasParentRef) => {

    p5.createCanvas(w, h - 5).parent(canvasParentRef);
    p5.textSize(70);
    p5.textFont(font)
    p5.frameRate(46);

    if (w > 1030) cancha = new Cancha(p5, 95, h - 90, w * 0.58, 40);
    else cancha = new Cancha(p5, 95, h * 0.75, w - 40, 40);


    raqueta = new Raqueta(p5, cancha.getLimites())
    pelota = new Pelota(p5, cancha.getLimites(), raqueta);

  };

  const draw = (p5) => {
    p5.background(139, 179, 3);
    if (w > 550) {
      p5.strokeWeight(3);
      p5.fill(51);
      p5.textSize(70);
      p5.text(`${pelota.marcador === 0 ? "" : "-"}` + (pelota.marcador), 100, 55);
    } else {
      offset = 60;
    }

    //Verticales
    p5.strokeWeight(0);
    p5.fill(51);
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, 70-offset, 10, 10);
      i += 5;
    }
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, (h - 50)-offset, 10, 10);
      i += 5;
    }
    //Horizontales
    for (let i = 70; i < (h - 50); i += 10) {
      p5.rect(10, i-offset, 10, 10);
      i += 5;
    }
    for (let i = 70; i < (h - 50); i += 10) {
      p5.rect((w - 20), i-offset, 10, 10);
      i += 5;
    }

    if (w > 550) {
      cancha.show();
      pelota.show();
      pelota.mover();
      raqueta.show();
    }

  };

  const keyPressed = (p5) => {
    if (p5.keyCode === 40) raqueta.mover(30);  //Down
    if (p5.keyCode === 38) raqueta.mover(-30);//Up
    if (p5.keyCode === 32) pelota.regenerar();
  }


  return <Sketch
    style={{
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
    }}
    setup={setup} draw={draw} preload={preload} keyPressed={keyPressed}
  />;
}

export default P5Viborita;