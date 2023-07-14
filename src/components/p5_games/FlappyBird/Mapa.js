import Tubos from './Tubos';
import Flappy from './Flappy';

class Mapa{

  constructor(p5, limites, w) {
    this.p5 = p5;
    this.w = w;

    this.l = { r: limites.r  , l: limites.l , t: limites.t +30, b: limites.b };

    this.n = w < 1025 ? 50 : 60;
    this.time = this.n;
    this.tubos = [];

    this.flappy = new Flappy(p5, this.l, w, this);

    this.marcador = 0;
  }

  show = () => {
    this.p5.stroke(51);
    this.p5.strokeWeight(2);
    this.p5.line(this.l.l, this.l.t, this.l.r,this.l.t );
    this.p5.line(this.l.l, this.l.b, this.l.r, this.l.b);

    this.flappy.show();
    
    this.tubos.forEach((t,i) => {
      t.show();
      if (t.tubo.x < this.l.l) this.tubos.splice(i, 1);

      if (t.tubo.x < this.flappy.pos.x + this.flappy.r && t.tubo.x + 56 > this.flappy.pos.x) this.flappy.saltarTubo(t);
    });

   if (this.time === this.n *2) {
      this.tubos.push(new Tubos(this.p5, this.l, this.w))
      this.time = 0;
    }

    this.time += 1;
    this.marcador += 1
    this.comprobar();
  }

  salto = () => {
    if (this.flappy.vel.y < 0) this.flappy.aplyForce(this.p5.createVector(0, -7));
    else this.flappy.aplyForce(this.p5.createVector(0, -19));
  }

  comprobar = () => {
    let f = this.flappy;
    if (f.pos.y-f.r < this.l.t || f.pos.y + f.r  > this.l.b) {
      this.regenerar();
    }
  }

  regenerar = () => {
    this.flappy = new Flappy(this.p5, this.l, this.w, this);
    this.tubos = [];
    this.marcador = 0;
  }
}

export default Mapa;