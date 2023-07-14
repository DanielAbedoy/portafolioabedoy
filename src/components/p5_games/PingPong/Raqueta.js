class Raqueta {

  constructor(p5,cancha) {
    this.p5 = p5;
    this.c = cancha;

    this.x = this.c.l;
    this.y = this.c.b / 2;

  }

  show = () => {
    this.p5.stroke(51);
    this.p5.strokeWeight(6);
    this.p5.line(this.x, this.y, this.x, this.y + 60)
  }

  mover = (valor) => {
    if (valor < 0) {
      if (!(this.y < this.c.t + (valor * -1))) this.y += valor;
    } else {
      if (!(this.y + 60 > (this.c.b-60) + valor)) this.y += valor;
    }


  }



}

export default Raqueta;