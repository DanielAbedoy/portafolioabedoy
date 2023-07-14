import React, { Component } from 'react';
import JoyStick from 'react-joystick';

const Controller = ({ move, stop }) => {
  const joyOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: 'white'
  }


  const managerListener = (manager) => {
    manager.on('move', (e, stick) => {
      try {
        //if (stick.direction.angle !== direccion) v.dir = stick.direction.angle;
        move(stick.direction.angle);
      } catch (err) { }
    })
    manager.on('end', () => {
      stop()
    })
  }

  const containerStyle = {
    position: 'fixed',
    height: '20vh',
    width: '20vh',
    background: 'transparent',
    zIndex: "10000000",
    bottom: "20px",
    left: "20px"
  }


  return (<JoyStick options={joyOptions} containerStyle={containerStyle} managerListener={managerListener} />);

}

export default Controller;