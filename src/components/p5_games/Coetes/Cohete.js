import Particula from './Particula';

class Cohete {


  constructor(p5, limites) {
    this.p5 = p5;
    this.l = limites;
    this.cohete = new Particula(p5, limites, this);
    this.activo = true;

    this.gravedad = p5.createVector(0, 0.3);
  }

  update = () => {
    this.cohete.show();
    this.cohete.aplicarFuerza(this.gravedad);
    this.desactivar();
  }

  desactivar = () => {
    if (this.cohete.pos.y > this.l.b) this.activo = false;
  }







  

}

export default Cohete;