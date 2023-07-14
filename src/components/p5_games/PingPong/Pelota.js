class Pelota {

  constructor(p5, cancha, raqueta) {
    this.p5 = p5;
    this.cancha = cancha;
    this.r = 20;
    /* this.x = cancha.l + 10;
    this.y = p5.random(cancha.t + 5, cancha.b - 20); */
    this.pos = p5.createVector(cancha.l + 10, p5.random(cancha.t + 5, cancha.b - 20))
    this.direccion = p5.createVector(4,-1);
    
    this.raqueta = raqueta;
    this.marcador = 0;
  }

  show = () => {
    this.p5.fill(52);
    this.p5.strokeWeight(1);
    this.p5.ellipse(this.pos.x, this.pos.y, this.r);
  }


  mover = () => {
    this.pos.add(this.direccion);
    this.rebotar();
  }

  rebotar = () => {
    let d = this.direccion;
    if (this.cancha.t +this.r/2 >= this.pos.y || this.cancha.b - this.r/2 <= this.pos.y) {
      this.direccion.set(d.x, d.y * -1);
        
    }else if (this.cancha.r -this.r  < this.pos.x || this.raqueta.x + this.r  > this.pos.x ) {
      let n = d.x < 0 ? -1 : 1;
      let n2 = this.p5.random(0, 1) > 0.51 ? 1 : -1;
      if (n < 0) {
        if (this.raqueta.y <= this.pos.y && this.raqueta.y + 60 >= this.pos.y) this.direccion.set(d.x * -1, d.y * n2);
        //Marcador ++ 
          
        else {
          if(this. marcador !== null)this.marcador++;
          this.regenerar();
        }
      }else this.direccion.set(d.x * -1, d.y * n2);

      
    }
  }



  regenerar = () => {
    this.pos = this.p5.createVector(this.cancha.l + 10, this.p5.random(this.cancha.t + 5, this.cancha.b - 20))
    this.direccion = this.p5.createVector(10,-5);
  }

}

export default Pelota;