Crafty.c("Bug", {
  init: function() {
    this.addComponent("2D, DOM, bug, Collision")
    this.bind ("spawn", function(){
      var random = (Math.random()*100);
      if (random>0 && random<= 26){
        this.attr({x : 1 * Settings.poligon, y : 1 * Settings.poligon})
      }
      if (random>26 && random<= 51){
        this.attr({x : 18 * Settings.poligon, y : 1 * Settings.poligon})
      } 
      if (random>51 && random<= 76){
        this.attr({x : 1 * Settings.poligon, y : 9 * Settings.poligon})
      }
      if (random>76 && random<= 101){
 	      this.attr({x : 18 * Settings.poligon, y : 9 * Settings.poligon})
      }
    })

this.trigger("spawn");

  },
});