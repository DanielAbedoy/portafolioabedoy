class Flappy{

  constructor(p5, limites, w, mapa) {
    this.p5 = p5;
    this.l = limites;
    this.mapa = mapa;

    this.r = 12;
    if (w < 1025) this.pos = p5.createVector(limites.r / 2, 300);
    else this.pos = p5.createVector(limites.r / 3, limites.b / 2);
    this.vel = p5.createVector(0, 2);
    this.acc = p5.createVector(0, 1);
    let marcar = false;
  }

  show = () => {
    this.p5.fill(52);
    this.p5.ellipse(this.pos.x, this.pos.y, this.r * 2);

    this.update();
    this.aplyForce(this.p5.createVector(0, 1));
  }

  update = () => {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  aplyForce = (force) => {
    this.acc.add(force);
  }

  saltarTubo = (t) => {
    if (t.tubo.y + t.height > this.pos.y - this.r || (t.tubo.y + t.height + t.space) < this.pos.y + this.r) this.mapa.regenerar();
    
  }


}

export default Flappy;