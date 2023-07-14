import React from 'react';
import '../hamburger_menu/style.css';
import {
  Link
 } from "react-router-dom";

function Hamburger() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div>
            
          </div>
          </div>
          <div className="menu">
            <div>
            <div>
                <ul>
                  <li><Link to="/inicio">INICIO</Link></li>
                  <li><Link to="/sobre-mi">SOBRE MI</Link></li>
                  <li><Link to="/game">MI PUEBLO</Link></li>
                  <li><Link to="/contacto">CONTACTO</Link></li>
                </ul>
               </div>
             </div>
            </div>
         </div>
  );
}

export default Hamburger;
