class Cancha{

  constructor(p5, t, b, r, l) {

    this.p5 = p5;

    this.top = t;
    this.bottom = b;
    this.right = r;
    this.left = l;
  }

  show = () => {    
    this.p5.fill(0);
    this.p5.strokeWeight(3);
    this.p5.stroke(51);
    this.p5.line(this.left, this.top, this.right, this.top);
    this.p5.line(this.right, this.top, this.right, this.bottom);
    this.p5.line(this.left, this.bottom, this.right, this.bottom);
  }

  getLimites = () => ({ t: this.top, b: this.bottom, r: this.right, l: this.left });

}

export default Cancha;