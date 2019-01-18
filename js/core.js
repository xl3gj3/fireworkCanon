!(function(factory){
  window.fireworkCanon = factory({});
}(function(fireworkCanon){
  fireworkCanon.canvas = canvas;
  fireworkCanon.ctx = canvas.getContext('2d');
  fireworkCanon.addBullet = false;
  fireworkCanon.mouse = {
    x : undefined,
    y : undefined
  }
  fireworkCanon.bullets = [];
  function main (){
    window.requestAnimationFrame(main);
    // console.log("mouse x position", fireworkCanon.mouse.x);
    // console.log("mouse y position", fireworkCanon.mouse.y);
    fireworkCanon.ctx.clearRect(0,0,innerWidth,innerHeight);

    let canon = new mainCanon(fireworkCanon.ctx);
    canon.draw(innerWidth/2,innerHeight,fireworkCanon.mouse.x,fireworkCanon.mouse.y,fireworkCanon.ctx);
    if (fireworkCanon.addBullet) {
      let bullet = new bulletObj(innerWidth/2,innerHeight-100,fireworkCanon.mouse.x,fireworkCanon.mouse.y,fireworkCanon.ctx);
      fireworkCanon.bullets.push(bullet);
    }
    for (var i = 0; i < fireworkCanon.bullets.length; i++) {
      fireworkCanon.bullets[i].draw(fireworkCanon.ctx);
      fireworkCanon.bullets[i].update(fireworkCanon.canvas);
      if (fireworkCanon.bullets[i].disappear) {
        fireworkCanon.explosion.queue(fireworkCanon.bullets[i].x,fireworkCanon.bullets[i].y,fireworkCanon.bullets[i].fireWorkColor,fireworkCanon.canvas,fireworkCanon.ctx)
        fireworkCanon.bullets.splice(i, 1);
      }
    }
  }
  fireworkCanon.load = function (){
    setEnv();
    loadEventListner ();
    main();
  }
  function setEnv(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function loadEventListner (){
    window.addEventListener('resize',function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      maxNumber = Math.floor(Math.random()*200 + (canvas.width + canvas.height)/2);
      console.log("number of dot is ", maxNumber) ;
    });
    window.addEventListener('mousemove',function(event){
  // console.log("test mouse");
      fireworkCanon.mouse.x = event.x;
      fireworkCanon.mouse.y = event.y;

      // console.log(mouse);

    });
    window.addEventListener("mousedown",function(event){
      // let canon = new mainCanon();
      fireworkCanon.addBullet = true;

    });
    window.addEventListener("mouseup",function(event){
      // let canon = new mainCanon();
      fireworkCanon.addBullet = false;

    });
  }
  return fireworkCanon;
}));
