class Viborita {

  constructor(p5, w, h) {
    this.p5 = p5;
    this.v = { x: 200, y: 200 };
    this.body = [{ x: 190, y: 200 }, { x: 180, y: 200 }, { x: 170, y: 200 }, { x: 160, y: 200 }, { x: 150, y: 200 }];
    this.dir = "right";
    this.w = w;
    this.h = h;

    this.marcador = 0;
  }

  show = () => {
    this.p5.fill(0);
    this.p5.stroke(55);
    
    this.p5.rect(this.v.x, this.v.y, 10, 10);
    this.body.forEach(b => this.p5.rect(b.x, b.y, 10, 10));
    
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i] = { x: this.body[i - 1].x, y: this.body[i - 1].y };
    }
    this.body[0] = { x: this.v.x, y: this.v.y };

    this.avanzar()
    this.limites(this.w, this.h);
    
  }

  avanzar = () => {
    switch (this.dir) {
      case "up":
        this.v["y"] = this.v["y"] - 10;
        break;
      case "down":
        this.v["y"] = this.v["y"] + 10;
        break;

      case "left":
        this.v["x"] = this.v["x"] - 10;
        break;
      case "right":
        this.v["x"] = this.v["x"] + 10;
        break;
    }
  }

  limites = (x, y) => {
    if (this.v.x < x.left) this.v["x"] = x["right"];
    if (this.v.x > x.right) this.v["x"] = x["left"];
    if (this.v.y < y.top) this.v["y"] = y["bottom"];
    if (this.v.y > y.bottom) this.v["y"] = y["top"];
  }
  
  add = () => {
    let b = this.body;
    let blen = this.body.length-1;
    this.body.push({ x: b[blen].x, y: b[blen].y });
    this.marcador += 15;
  }
}

export default Viborita;