class Mapa {

  constructor(data, h1) {
    ///3088 ES EL TILE //Modal 3030
    this.w = data.width;
    this.h = data.height;
    this.l = 32;
    this.limits = this.filter(this.sortCoor(data.layers[0].data, this.w), 3088);
    this.casas = this.filter(this.sortCoor(data.layers[1].data,this.w), 0);

    this.coorH1 = {camino:this.filter(this.sortCoor(h1.layers[0].data, h1.width), 1)};
  }

  sortCoor(layer,w) {
    //let layer = data.layers[0].data;
    let main = [];
    let arr = [];
    let multX = 0;
    let multY = -1;

    for (let i = 0; i <= layer.length; i++) {
      if (i % w === 0) {
        multX = 0;
        multY++;
      }
      main.push({ tile: layer[i], x: (multX * this.l), y: (this.l * multY) });
      multX++;
    }

    return main;
  }

  filter(coor, tile) {
    if(tile === 0 )return coor.filter(c => c.tile !== tile);
    return coor.filter(c => c.tile === tile);
  }

  isInWalk(body) {

    for (let i = 0; i < this.limits.length; i++) {
      if ((this.limits[i].x < body.x && this.limits[i].y < body.y
        && this.limits[i].x + (this.l) > body.x
        && this.limits[i].y + (this.l) > body.y) ||
        (this.limits[i].x < body.x + body.l && this.limits[i].y < body.y+ body.l
          && this.limits[i].x + (this.l) > body.x 
          && this.limits[i].y + (this.l) > body.y)
      ) {
        return false;
      }
    }

    return true;
  }

  isInModal(body) {
    return false;
  }

  isInH1(body) {
    //(this.coorH1.camino[i].x
    for (let i = 0; i < this.coorH1.camino.length; i++) {
      if (body.x > this.coorH1.camino[i].x && body.x < this.coorH1.camino[i].x + this.l
        && body.y > this.coorH1.camino[i].y && body.y < this.coorH1.camino[i].y + this.l
      ) {
        return false;
      }
    }

    return true;
  }
}

export default Mapa;