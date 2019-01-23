function fireworkExplosion (positionX,positionY,color,canvas,ctx){
  let maxTime = 600;
  let minTime = 100;
  let maxSpeed = 10;
  let minSpeed = -5;
  this.postionX = positionX;
  this.positionY = positionY;
  // this.color = color;
  this.canvas = canvas;
  this.ctx = ctx;
  this.disappear = false;
  this.duriation = minTime + Math.random() * maxTime;
  this.dx = [];
  this.dy = [];
  this.x = [];
  this.y = [];
  this.color = [];
  this.numberOfexplosion = 50;
  this.radius = 3;
  // console.log("init this.duriation",this.duriation);
  for (var i = 0; i <this.numberOfexplosion; i++) {
    this.dx.push(minSpeed + Math.random() * maxSpeed);
    this.dy.push(minSpeed + Math.random() * maxSpeed);
    this.x.push(positionX);
    this.y.push(positionY);
    this.color.push(color[Math.floor(Math.random() * color.length)]);
  }


}

fireworkExplosion.prototype.draw = function (){
  // console.log("this color ", this.color);
  for (var i = 0; i < this.numberOfexplosion; i++) {
    this.ctx.beginPath();
    this.ctx.arc(this.x[i],this.y[i],this.radius,0,Math.PI*2,false);
    this.ctx.strokeStyle = this.color[i];
    this.ctx.fillStyle = this.color[i];
    this.ctx.stroke();
    this.ctx.fill();
  }
}

fireworkExplosion.prototype.update = function (){
  // console.log("the duriation of firework is ",this.duriation);

  for (var i = 0; i < this.numberOfexplosion; i++) {
    if (this.duriation < 0) {
      // console.log("this.disappear ",this.disappear);

      this.disappear = true;
    }
    this.x[i] = this.x[i] + this.dx[i];
    this.y[i] = this.y[i] + this.dy[i];
  }
  this.duriation -= 15;

}
