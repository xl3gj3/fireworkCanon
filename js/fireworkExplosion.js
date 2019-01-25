function fireworkExplosion (positionX,positionY,color,canvas,ctx){
  let maxTime = 100;
  let minTime = 500;
  let maxSpeed = 6;
  let minSpeed = -3;
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
  this.lastPoint = [];
  this.numberOfexplosion = 50 + Math.floor(Math.random()*40);
  this.radius = 0.1 + Math.random() * 4;
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
    // this.ctx.beginPath();
    // this.ctx.arc(this.x[i],this.y[i],this.radius,0,Math.PI*2,false);
    // this.ctx.strokeStyle = this.color[i];
    // this.ctx.fillStyle = this.color[i];
    // this.ctx.stroke();
    // this.ctx.fill();


    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color[i];
    this.ctx.lineWidth = this.radius;
    this.ctx.moveTo(this.lastPoint[i].x,this.lastPoint[i].y);
    this.ctx.lineTo(this.x[i],this.y[i]);
    this.ctx.stroke();
    this.ctx.closePath();

  }
}

fireworkExplosion.prototype.update = function (){
  // console.log("the duriation of firework is ",this.duriation);


  for (var i = 0; i < this.numberOfexplosion; i++) {
    this.lastPoint[i] = {
      x : this.x[i],
      y : this.y[i]
    }
    if (this.duriation < 0) {
      // console.log("this.disappear ",this.disappear);

      this.disappear = true;
    }
    // if (this.x[i] > this.canvas.width - this.radius || this.x[i] - this.radius < 0) {
    //   this.dx[i] = -this.dx[i];
    //
    // }
    // if (this.y[i] + this.radius > this.canvas.height || this.y[i] -this.radius < 0) {
    //   this.dy[i]= -this.dy[i];
    //
    // }
    if (this.bulletDuriation < 0) {
      this.disappear = true;
    }
    this.x[i] = this.x[i] + this.dx[i];
    this.y[i] = this.y[i] + this.dy[i];
  }
  this.duriation -= 15;

}
