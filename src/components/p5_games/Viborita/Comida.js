class Comida {

  constructor(p5, w, h) {
    this.w = w;
    this.h = h;
    this.x = p5.random(w.left +10 , w.right-20);
    this.y = p5.random(h.top +10 , h.bottom-20);
    this.p5 = p5;
  }

  show = () => {
    this.p5.fill(255, 0, 0)
    this.p5.rect(this.x, this.y, 10, 10);
  }

  regenerar = () => {
    this.x = this.p5.random(this.w.left +10 , this.w.right-20);
    this.y = this.p5.random(this.h.top +10 , this.h.bottom-20);
  }

  comido = (vX,vY, vibora) => {
    if (vX+3 > this.x && vX - 13 < this.x) {
      if (vY+3 > this.y && vY - 13 < this.y) {
        this.regenerar();
        vibora.add();
      }
    }
  }

}

export default Comida;