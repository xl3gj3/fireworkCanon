
function mainCanon (){
}

mainCanon.prototype.draw = function (postionX,positionY,mouseX,mouseY,ctx){
  let opposite = fireworkCanon.canvas.height - mouseY;
  let adjacent = postionX - mouseX;
  // console.log("opposite",opposite);
  // console.log("adjacent",adjacent);

  let angle = -Math.atan( adjacent/opposite);
  // console.log("the angle is ",angle);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.ellipse(postionX, positionY-75, 20, 75, angle, Math.PI*1.8, Math.PI*1.2);
  ctx.fill();
  // Draw the ellipse's line of reflection

}



function bulletObj(postionX,positionY,mouseX,mouseY,ctx){
  let speed = 10;
  let maxRadius = 10;
  let minRadius = 4;
  var colorArray = [
    "#0063B0",
    "#0CBAE8",
    "#00FFFA",
    "#0CE8AE",
    "#0DFF82"
  ];
  let opposite = fireworkCanon.canvas.height - mouseY;
  let adjacent = postionX - mouseX;
  let changeXdirection = false;
  if (adjacent < 0) {
    adjacent = -adjacent;
    changeXdirection = true;
  }else {
    changeXdirection = false;
  }
  console.log("opposite",opposite);
  console.log("adjacent",adjacent);

  let angle = Math.atan( adjacent/opposite);
  // TEMP: The postion will be the canon's location, and direction will be change as well, this is just for testing
  this.x = postionX;
  this.y = positionY-30;
  this.dx = -(Math.sin(angle) * speed);
  this.dy = -(Math.cos(angle) * speed);

  if (changeXdirection) {
    this.dx = -this.dx;
  }

  console.log("bullet dx ", this.dx);
  console.log("bullet dy ", this.dy);

  this.radius = Math.random() * maxRadius + minRadius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

}

bulletObj.prototype.draw = function (ctx){
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  ctx.strokeStyle = this.color;
  ctx.fillStyle = this.color;
  ctx.stroke();
  ctx.fill();
}
bulletObj.prototype.update = function(canvas){
  if (this.x > canvas.width - this.radius || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > canvas.height || this.y -this.radius < 0) {
    this.dy= -this.dy;

  }
  this.x += this.dx;
  this.y += this.dy;
}
