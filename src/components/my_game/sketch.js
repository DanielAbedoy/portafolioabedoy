import React, { useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Sketch from 'react-p5';

import Body from './Body';
import Mapa from './Mapa';
import ModalScreen from './Modal';
import Controller from './Controller';
import coordenadas from "../../assets/files/world.json";
import coordenadasH1 from "../../assets/files/House1.json";

const P5Viborita = () => {


  const screen = document.getElementById("root");
  let w = screen.offsetWidth;
  let h = screen.offsetHeight;
  let font = "";

  let body = "";
  let mapa;
  let modal;
  let dir = "";
  let man = "";
  let velocity;
  let world = "";
  let f = 0;

  const preload = (p5) => {
    font = p5.loadFont(require('../../assets/fonts/VT323-Regular.ttf'))
    world = p5.loadImage(require("../../assets/img/game/world.png"));
    man = p5.loadImage(require("../../assets/img/game/sprites_men.png"));
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(w, h - 5).parent(canvasParentRef);
    velocity = 3;
    if (w < 550) velocity = 1.5;
    body = new Body(p5, man, velocity);
    mapa = new Mapa(coordenadas, coordenadasH1);
    modal = new ModalScreen();
    modal.closeModal();
    modal.clearBodyHTML();
  };

  const draw = (p5) => {
    p5.background(0, 0, 0);

    p5.scale(1.5);
    p5.translate((w / 3) - body.pos.x, (h / 3) - body.pos.y);
    p5.image(world, 0, 0);
    body.show();

    verifyModals();
    
    body.walking(dir,mapa);
  };

  const verifyModals = () => {
    if (body.intoHouse1()) {
      if (f === 0) { 
        modal.insertHTML_H1();
        modal.openModal();
      }
      f = 1;
    } else if (body.intoHouse2()) {
      if (f === 0) { 
        modal.insertHTML_H2();
        modal.openModal();
      }
      f = 1;
    }else if (body.intoHouse3()) {
      if (f === 0) { 
        modal.insertHTML_H3();
        modal.openModal();
      }
      f = 1;
    } else {
      f = 0;
      modal.closeModal();
      modal.clearBodyHTML();
    }
  }
  

  const keyPressed = (p5) => {
    if (p5.keyCode === 39) dir = "right" //Right
    if (p5.keyCode === 40) dir = "down"; //Down
    if (p5.keyCode === 37) dir = "left"; //Left
    if (p5.keyCode === 38) dir = "up";//Up

    if (p5.keyCode === 32) { } //console.log(body.pos);//Up
  }

  const keyRel = (p5) => {
    dir = "";
  }


  return (
    <>

      <Sketch
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          width: "100%",
          height: "100%"
        }}
        setup={setup} draw={draw} preload={preload} keyPressed={keyPressed} keyReleased={keyRel}
      />
      <Controller move={(d) => dir = d} stop={() => dir = ""} />

      <Modal size="lg" id="dialogs" isOpen={true}>
        <ModalBody style={{fontFamily:"VT323", backgroundColor:"transparent"}} className="p-3 ">
          <p className="h3 text-center"><b>Cargando ...</b></p>
        </ModalBody>
      </Modal>

    </>
  )
}

export default P5Viborita;