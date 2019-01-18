!(function(factory){
  window.fireworkCanon = factory(window.fireworkCanon);
}(function(fireworkCanon){

  let explosion = {
    queue : function (positionX,positionY,colorArray,canvas,ctx){
      this.fireWorkArray.push({
        positionX : positionX,
        positionY : positionY,
        color : colorArray
      });
    },
    fireWorkArray : [],
    explode : function (canvas,ctx){

    }
  }



  fireworkCanon.explosion = explosion;
  return fireworkCanon;
}));
