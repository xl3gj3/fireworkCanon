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
  fireworkCanon.fireExplosion = [];
  fireworkCanon.colorSet = [];
  fireworkCanon.loadColor = function (id){
    switch (id) {
      case 1:
          fireworkCanon.colorSet = [
            "#F0F2F2",
            "#7BB094",
            "#8DBF28",
            "#C0DB84",
            "#49BA63"
        ];
        break;
      case 2:
          fireworkCanon.colorSet = [
          "#DB2B30",
          "#8F1D2C",
          "#5A142A",
          "#400D2A",
          "#140A25"
        ];
        break;
      case 3:
          fireworkCanon.colorSet = [
          "#FF6138",
          "#FFFF9D",
          "#BEEB9F",
          "#79BD8F",
          "#00A388"
        ];
        break;
      case 4:
          fireworkCanon.colorSet = [
          "#F1712A",
          "#F0C419",
          "#4EBA6F",
          "#2D95BF",
          "#955BA5"
        ];
        break;
      case 5:
          fireworkCanon.colorSet = [
          "#E2BBFF",
          "#BCAAE8",
          "#C8C7FF",
          "#AAB9E8",
          "#BBDEFF"
        ];
        break;
      case 6:
          fireworkCanon.colorSet = [
          "#DB4BE0",
          "#F7B2F7",
          "#F8FCF5",
          "#EEC1FF",
          "#C7BBC6"
        ];
        break;
      default:

    }
  }

  function main (){
    window.requestAnimationFrame(main);
    // console.log("mouse x position", fireworkCanon.mouse.x);
    // console.log("mouse y position", fireworkCanon.mouse.y);
    fireworkCanon.ctx.fillStyle = 'rgba(0,0,0,0.05)';
    fireworkCanon.ctx.fillRect(0,0,innerWidth,innerHeight);
    let staticColor = fireworkCanon.colorSet[0]
    let canon = new mainCanon(fireworkCanon.ctx);
    canon.draw(innerWidth/2,innerHeight,fireworkCanon.mouse.x,fireworkCanon.mouse.y,fireworkCanon.ctx,staticColor);
    if (fireworkCanon.addBullet) {
      let bullet = new bulletObj(innerWidth/2,innerHeight-100,fireworkCanon.mouse.x,fireworkCanon.mouse.y,fireworkCanon.ctx,staticColor);
      fireworkCanon.bullets.push(bullet);
    }
    for (var i = 0; i < fireworkCanon.bullets.length; i++) {
      fireworkCanon.bullets[i].update(fireworkCanon.canvas);
      fireworkCanon.bullets[i].draw(fireworkCanon.ctx);
      if (fireworkCanon.bullets[i].disappear) {
        let explosion = new fireworkExplosion(fireworkCanon.bullets[i].x,fireworkCanon.bullets[i].y,fireworkCanon.colorSet,fireworkCanon.canvas,fireworkCanon.ctx);
        fireworkCanon.fireExplosion.push(explosion);
        fireworkCanon.bullets.splice(i, 1);
      }
    }
    for (var i = 0; i < fireworkCanon.fireExplosion.length; i++) {
      // console.log("fireworkCanon.fireExplosion.length",fireworkCanon.fireExplosion.length);
      fireworkCanon.fireExplosion[i].update();
      fireworkCanon.fireExplosion[i].draw();

      if (fireworkCanon.fireExplosion[i].disappear) {
        fireworkCanon.fireExplosion.splice(i, 1);
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
    fireworkCanon.loadColor(1);
  }
  function loadEventListner (){
    window.addEventListener('resize',function(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // maxNumber = Math.floor(Math.random()*200 + (canvas.width + canvas.height)/2);
      // console.log("number of dot is ", maxNumber) ;
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
