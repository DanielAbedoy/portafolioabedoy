class SubParticulas {

  constructor(p5, x ,y, color) {
    this.p5 = p5;
    this.c = color;

    this.pos = p5.createVector(x, y);
    this.vel = p5.createVector(p5.random(-3,3), p5.random(-3, 3) );
    this.acc = p5.createVector(0, 0.5);
    this.deg = 255;

  }

  aplicarFuerza = () => {
    this.acc.add(0, 0.2)
  }

  show = () => {
    this.p5.stroke(this.c.r,this.c.g,this.c.b, this.deg);
    this.p5.strokeWeight(3);

    this.aplicarFuerza();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.p5.point(this.pos.x, this.pos.y);
    this.acc.mult(0);

    this.deg -= 7;
    

  }

  quitar = () => {
    //if (this.pos.y > this.l.b && this.isCohete === true) this.cohete.activo = false;
  }

}

export default SubParticulas;