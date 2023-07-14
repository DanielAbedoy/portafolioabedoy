
class Body{

  constructor(p5,img, vel) {
    this.p5 = p5;
    this.pos = { x: 1956, y: 1011 };
    //this.pos = { x: 0, y: 0 };
    this.vel = vel;
    this.l = 20;
    this.prev = {};
    this.sprites = [];
    this.sortSprites(img);
    
    this.spriteDir = 2;
    this.spriteN = 0;
  }

  show() {
    this.p5.imageMode(this.p5.CORNER);
    this.p5.image(this.sprites[this.spriteDir][this.spriteN],this.pos.x, this.pos.y, this.l, this.l)
  }

  move(dir) {
    this.prev = { ...this.pos };
    this.spriteN++;
    if (dir === "up") {
      this.pos.y -= this.vel;
      this.spriteDir = 0;
      
    }
    if (dir === "down") {
      this.pos.y += this.vel;
      this.spriteDir = 2;
    }
    if (dir === "left") {
      this.pos.x -= this.vel;
      this.spriteDir = 1;
    }
    if (dir === "right") {
      this.pos.x += this.vel;
      this.spriteDir = 3;
    }

    if (this.spriteN % 9 === 0) this.spriteN = 0;
  }

  sortSprites(img) {
    const s = { w: 40, h: 57 };
    
    let x = 12;
    let y = 9;

    let arr = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 9; j++) {
        arr.push(img.get(x, y, s.w, s.h));
        x = x + s.w +24;
      }
      this.sprites.push(arr);
      arr = [];
      x = 12;
      y = y + s.h + 8;
    }
  }

  walking = (dir,mapa) => {
    if (dir === "") return;
    if (!mapa.isInWalk({ ...this.pos, l: this.l })) {
      this.pos = { ...this.prev };
      return;
    }
    
    this.move(dir);
  }

  intoHouse1() {
    //Cuadro HOUSE 1 X:1761, Y:669
    if (this.pos.x >= 1757 && this.pos.y > 665 && this.pos.x < 1761 + 28 && this.pos.y < 669 + 10) return true;
    return false; 
  }

  intoHouse2() {
    //Cuadro HOUSE 2 x: 1218, y: 765
    if (this.pos.x >= 1215 && this.pos.y > 761 && this.pos.x < 1218 + 28 && this.pos.y < 765 + 10) return true;
    return false; 
  }

  intoHouse3() {
    //Cuadro HOUSE 3 x:801, y: 639
    if (this.pos.x >= 758 && this.pos.y > 635 && this.pos.x < 801 + 28 && this.pos.y < 639 + 10) return true;
    return false; 
  }

  outHouse1() {
    //SALIDA HOUSE 1 x: 255, y: 294
    if (this.pos.x > 255 && this.pos.y > 284 && this.pos.x < 255+28 && this.pos.y < 300) return true;
    return false; 
  }



}

export default Body;