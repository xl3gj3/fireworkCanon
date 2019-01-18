
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
  let canonLength = 75;
  var colorArray = [
    "#0063B0",
    "#0CBAE8",
    "#00FFFA",
    "#0CE8AE",
    "#0DFF82"
  ];
  let changeXdirection = false;

  let opposite = fireworkCanon.canvas.height - mouseY;
  let adjacent = fireworkCanon.canvas.width/2 - mouseX;
  let canonLength  = 75
  this.centerX = canvas.width/2;
  this.centerY = canvas.height - canonLength;
  this.bigRadius = 50;
  let angle = -Math.atan( adjacent/opposite);
  let sin = Math.sin(angle);
  let cos = Math.cos(angle)
  console.log("this is sin" , sin);
  console.log("this is cos" , cos);
  if (adjacent < 0) {
    // adjacent = -adjacent;
    changeXdirection = true;
  }else {
    changeXdirection = false;
  }
  this.x = this.centerX+this.bigRadius*sin;
  this.y = this.centerY-this.bigRadius*cos;


  this.dx = (Math.sin(angle) * speed);
  this.dy = -(Math.cos(angle) * speed);

  // if (changeXdirection) {
  //   this.dx = -this.dx;
  // }

  // console.log("bullet dx ", this.dx);
  // console.log("bullet dy ", this.dy);

  this.radius = minRadius;
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
  this.disappear = false;
  if (this.x > canvas.width - this.radius || this.x - this.radius < 0) {
    this.dx = -this.dx;
    this.disappear = true;

  }
  if (this.y + this.radius > canvas.height || this.y -this.radius < 0) {
    this.dy= -this.dy;
    this.disappear = true;

  }
  this.x += this.dx;
  this.y += this.dy;
}
