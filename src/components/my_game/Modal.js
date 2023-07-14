import React from 'react';
class Modal{

  //Imagenes
  /* https://ibb.co/Sxvc4mP
    https://ibb.co/tJGqHWn
    https://ibb.co/P56H4SP 
    */

  closeModal() {
    let flag = false;
    do {
      try {
        document.getElementsByClassName("modal")[0].classList.remove("show");
        document.getElementsByClassName("modal")[0].style.display = "none";
        document.getElementsByClassName("modal")[0].classList.remove("show");
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
        document.getElementsByClassName("fade")[1].classList.remove("show");
        flag = true;
      } catch (error) { }
    } while (!flag);
  }

  openModal() {
    document.getElementsByClassName("modal")[0].style.display = "block";
    document.getElementsByClassName("modal")[0].classList.add("show");
    document.getElementsByTagName("body")[0].classList.add("modal-open");
    document.getElementsByClassName("fade")[1].classList.add("show");
  }

  insertHTML_H1() {
    document.getElementsByClassName("modal-body")[0].innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="row">
            <img src="https://i.ibb.co/wL67FQR/v3.png" class="mx-auto" width="10%" height="20%"/>
          </div>
        </div>
        <div class="col-12">
          <p class="text-center h4"><b> Hola, bienvenido a mi pueblo</b></p>  
          <p class="text-center h5"><b> Si quieres averiguar mas sobre mi dale en continuar o continua viendo las otras casas....</b></p>
          <br/>
          <a class="btn btn-outline-success btn-sm ml-auto" href="/sobre-mi">Continuar --> </a>
        </div>
        
        
      </row>
      
    `;
  }

  insertHTML_H2() {
    document.getElementsByClassName("modal-body")[0].innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="row">
            <img src="https://i.ibb.co/gDRKwnf/v1.png" class="mx-auto" width="10%" height="20%"/>
          </div>
        </div>
        <div class="col-12">
          <p class="text-center h4"><b> Toc! Toc!</b></p>  
          <p class="text-center h5"><b> Si tienes ganar de ver los proyectos que he realizado ya sabes que hacer</b></p>
          <br/>
          <a class="btn btn-outline-success btn-sm ml-auto" href="/proyectos">Ver proyectos --> </a>
        </div>
      </row>
    `;
  }

  insertHTML_H3() {
    document.getElementsByClassName("modal-body")[0].innerHTML = `
      <div class="row">
        <div class="col-12">
          <div class="row">
            <img src="https://i.ibb.co/Js1vcM8/v2.png" class="mx-auto" width="10%" height="20%"/>
          </div>
        </div>
        <div class="col-12">
          <p class="text-center h4"><b> ¿Quién es?</b></p>  
          <p class="text-center h5"><b> Si gustar dejar un recado puedes hacerlo</b></p>
          <br/>
          <a class="btn btn-outline-success btn-sm ml-auto" href="/contacto">Dejar un recado --> </a>
        </div>
      </row>
    `;
  }


  clearBodyHTML() {
    document.getElementsByClassName("modal-body")[0].innerHTML = "";
  }
}

export default Modal;