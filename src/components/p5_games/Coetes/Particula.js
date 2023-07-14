import SubParticulas from './SubParticulas';

class Particula {

  constructor(p5, limites, cohete) {
    this.p5 = p5;
    this.cohete = cohete;
    this.l = limites;

    this.pos = p5.createVector(p5.random(limites.l, limites.r), limites.b);
    if (limites.r > 650) this.vel = p5.createVector(0, p5.random(limites.b * 0.01, limites.b * 0.023) * -1);
    else this.vel = p5.createVector(0, p5.random(limites.b * 0.01, limites.b * 0.015) * -1);
    this.acc = p5.createVector(0, 0.2);

    this.explotado = false;
    this.subParticles = [];

  }

  aplicarFuerza = (force) => {
    this.acc.add(force)
  }

  show = () => {

    if (this.vel.y < 1) {
      this.p5.stroke(51);
      this.p5.strokeWeight(10);
      
    } else this.explotar();

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.p5.point(this.pos.x, this.pos.y);
    this.acc.mult(0);
    this.quitar();

    this.subParticles.forEach((p,i) => {
      p.show();
      if (p.pos.y > this.l.b) this.subParticles.splice(i, 1);
    })
  }

  quitar = () => {
    if (this.pos.y > this.l.b && this.isCohete === true) this.cohete.activo = false;
  }

  explotar = () => {
    this.p5.stroke(0,0,0,0);
    this.p5.strokeWeight(0);


    if (!this.explotado) {

      let r = this.p5.random(0, 254);
      let g = this.p5.random(0, 254);
      let b = this.p5.random(0, 254);

      for (let i = 0; i < 55; i++) {
        this.subParticles.push(new SubParticulas(this.p5, this.pos.x, this.pos.y, { r, g, b }));
      }
      this.explotado = true;
    }

  }

}

export default Particula;