
function mainCanon (){
}

mainCanon.prototype.draw = function (postionX,positionY,mouseX,mouseY,ctx){
  let opposite = fireworkCanon.canvas.height - mouseY;
  let adjacent = postionX - mouseX;
  // console.log("opposite",opposite);
  // console.log("adjacent",adjacent);

  let angle = -Math.atan( adjacent/opposite);
  // console.log("the angle is ",angle);
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.ellipse(postionX, positionY-75, 20, 75, angle, Math.PI*1.8, Math.PI*1.2);
  ctx.fill();
  // Draw the ellipse's line of reflection

}



function bulletObj(postionX,positionY,mouseX,mouseY,ctx,color){
  let speed = 10;
  let maxRadius = 4;
  let minRadius = 4;
  let canonLength = 75;
  let maxTime = 1000;
  let minTime = 100;

  var colorArray = [
    "#F0F2F2",
    "#7BB094",
    "#8DBF28",
    "#C0DB84",
    "#49BA63"
  ];
  var colorArray2 = [
  "#DB2B30",
  "#8F1D2C",
  "#5A142A",
  "#400D2A",
  "#140A25"
];
  ctx.fillStyle = color[Math.floor(Math.random() * color.length)];

  if (Math.random() - 0.5 > 0) {
    this.fireWorkColor = colorArray;

  }else {
    // this.fireWorkColor = colorArray2;
    this.fireWorkColor = colorArray;


  }
  this.bulletDuriation = minTime + Math.round(Math.random()*maxTime);
  let changeXdirection = false;

  let opposite = fireworkCanon.canvas.height - mouseY;
  let adjacent = fireworkCanon.canvas.width/2 - mouseX;
  let canonHeight  = 75
  this.centerX = canvas.width/2;
  this.centerY = canvas.height - canonHeight;
  this.bigRadius = 50;
  let angle = -Math.atan( adjacent/opposite);
  let sin = Math.sin(angle);
  let cos = Math.cos(angle)
  // console.log("this is sin" , sin);
  // console.log("this is cos" , cos);
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

  this.radius = minRadius + Math.random() * maxRadius;
  // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

}

bulletObj.prototype.draw = function (ctx){
  // ctx.beginPath();
  // ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
  // ctx.strokeStyle = this.color;
  // ctx.fillStyle = this.color;
  // ctx.stroke();
  // ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.radius;
  ctx.moveTo(this.lastPoint.x,this.lastPoint.y);
  ctx.lineTo(this.x,this.y);
  ctx.stroke();
  ctx.closePath();

}
bulletObj.prototype.update = function(canvas){
  this.lastPoint = {
    x : this.x,
    y : this.y
  }
  this.disappear = false;
  if (this.x > canvas.width - this.radius || this.x - this.radius < 0) {
    this.dx = -this.dx;

  }
  if (this.y + this.radius > canvas.height || this.y -this.radius < 0) {
    this.dy= -this.dy;

  }
  if (this.bulletDuriation < 0) {
    this.disappear = true;
  }
  this.bulletDuriation -= 15;
  this.x += this.dx;
  this.y += this.dy;
}

function fireworkObj (positionX,positionY,colorArray,canvas,ctx){
  this.x = positionX;
  this.y = positionY;
  this.color = colorArray;
  this.ctx = ctx;
  this.canvas = canvas;

}

fireworkObj.prototype.draw = function (){

}
