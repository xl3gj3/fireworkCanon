function fireworkExplosion (positionX,positionY,color,canvas,ctx){
  let maxTime = 2200;
  let minTime = 1500;
  this.postionX = positionX;
  this.positionY = positionY;
  this.color = color;
  this.canvas = canvas;
  this.ctx = ctx;
  this.disappear = false;
  this.duriation = minTime + Math.random() * maxTime;
  this.dx = [-5,-5,0,5,5];
  this.dy = [-5,5,-5,5,-5];
  this.x = [positionX,positionX,positionX,positionX,positionX];
  this.y = [positionY,positionY,positionY,positionY,positionY];

  this.radius = 3;


}

fireworkExplosion.prototype.draw = function (){
  for (var i = 0; i < this.color.length; i++) {
    this.ctx.beginPath();
    this.ctx.arc(this.x[i],this.y[i],this.radius,0,Math.PI*2,false);
    this.ctx.strokeStyle = this.color[i];
    this.ctx.fillStyle = this.color[i];
    this.ctx.stroke();
    this.ctx.fill();
  }
}

fireworkExplosion.prototype.update = function (){
  for (var i = 0; i < this.color.length; i++) {
    if (this.duriation < 0) {
      this.disappear = true;
    }
    this.duriation -= 15;
    this.x[i] = this.x[i] + this.dx[i];
    this.y[i] = this.y[i] + this.dy[i];
  }
}
