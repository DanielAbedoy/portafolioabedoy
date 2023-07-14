class Tubos{

  constructor(p5, limites, w) {
    this.p5 = p5;
    this.l = limites;

    this.space = 200;
    this.width = 40;
    if (w < 1025)this.height = p5.random(70, 220);
    else this.height = p5.random(70, 400);

    this.tubo = p5.createVector(limites.r-this.width, limites.t);
    //this.tubo = p5.createVector(300, limites.t);
    
  }

  show = () => {
    this.p5.fill(51);
    this.p5.rect(this.tubo.x, this.tubo.y, this.width, this.height);
    this.p5.rect(this.tubo.x, this.tubo.y + this.height + this.space, this.width, ((this.tubo.y + this.height + this.space)- this.l.b)*-1 );
    this.move();
  }

  move = () => {
    this.tubo.add(-3, 0);
  }



}

export default Tubos;