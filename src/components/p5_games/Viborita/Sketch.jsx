import React from 'react';
import Sketch from 'react-p5';

import Viborita from './Viborita';
import Comida from './Comida';

import JoyStick from 'react-joystick';

const P5Viborita = () => {

  const screen = document.getElementById("root");
  let w = screen.offsetWidth;
  let h = screen.offsetHeight;
  let font = "";
  let offset = 0;
  let v;
  let c;
  let direccion = 'right';

  const preload = (p5) => {
    font = p5.loadFont(require('../../../assets/fonts/VT323-Regular.ttf'))
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h - 5).parent(canvasParentRef);
    p5.textSize(70);
    p5.textFont(font)
    p5.frameRate(10);

    v = new Viborita(p5, { left: 20, right: w - 20 }, { top: 80, bottom: h - 60 });
    c = new Comida(p5, { left: 20, right: w - 20 }, { top: 80, bottom: h - 60 })
  };

  const draw = (p5) => {
    p5.background(139, 179, 3);



    p5.fill(52);

    if (v) {
      if (w > 600) {
        p5.textSize(70);
        p5.text((v.marcador) + "", 10, 55 - offset);
        p5.text("Len.: " + (v.body.length + 1), w - 220, 55 - offset);
        p5.textSize(15);
        p5.text("ESPACIO - Nueva comida", (w / 2) - 90, 65 - offset);
      } else {
        offset = 25;
        p5.textSize(40);
        p5.text((v.marcador) + "", 10, 55 - offset);
        p5.text("Len.: " + (v.body.length + 1), w - 120, 55 - offset);
      }

      v.show();
    }



    //Verticales
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, 70 - offset, 10, 10);
      i += 5;
    }
    for (let i = 10; i < (w - 10); i += 10) {
      p5.rect(i, (h - 50) - offset, 10, 10);
      i += 5;
    }
    //Horizontales
    for (let i = 70; i < (h - 50); i += 10) {
      p5.rect(10, i - offset, 10, 10);
      i += 5;
    }
    for (let i = 70; i < (h - 50); i += 10) {
      p5.rect((w - 20), i - offset, 10, 10);
      i += 5;
    }

    if (c) {

      c.show()
      c.comido(v.v.x, v.v.y, v);
    }

  };

  const keyPressed = (p5) => {
    if (p5.keyCode === 39) v.dir = "right"; //Right
    if (p5.keyCode === 40) v.dir = "down"; //Down
    if (p5.keyCode === 37) v.dir = "left"; //Left
    if (p5.keyCode === 38) v.dir = "up";//Up
    if (p5.keyCode === 32) c.regenerar();
  }

  const joyOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'white'
  }


  const managerListener = (manager) => {
    manager.on('move', (e, stick) => {
      try {
        if (stick.direction.angle !== direccion) {
          direccion = stick.direction.angle;
          v.dir = stick.direction.angle;
        }
      }catch(err){}
  })
  manager.on('end', () => {
      
  })
  }

  const containerStyle = {
    position: 'fixed',
    height: '20vh',
    width: '20vh',
    background: 'transparent',
    zIndex: "10000000",
    bottom: "0",
    right:"0"
}

  return (
    <>
      <Sketch
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          top: "0",
        }}
        setup={setup} draw={draw} preload={preload} keyPressed={keyPressed}
      />
      {w < 550 &&
        <div>
          <JoyStick options={joyOptions} containerStyle={containerStyle} managerListener={managerListener} />
        </div>
      }
    </>
  )
}

export default P5Viborita;