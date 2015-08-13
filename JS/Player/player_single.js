Crafty.c("player", {
    init: function(){
        this.addComponent("2D, DOM, playerR, Fourway, Collision");
        this.attr({x: 9 * Settings.poligon, y: 5 * Settings.poligon});
        this.fourway(1.6);
        this.collision();
		
	this.bind("teleport", function(){
            var random = (Math.random()*100);
            if (random>0 && random<= 50){
                this.attr({x : 5 * Settings.poligon, y : 7 * Settings.poligon})
            }
            if (random>51 && random<= 100){
                this.attr({x : 14 * Settings.poligon, y : 3 * Settings.poligon})
            }
	})
	this.onHit("JS", function(e){
            var data = e[0].obj;
            this.trigger("teleport");
            data.destroy();
	});
        this.onHit("Php", function(e){
            var data = e[0].obj;
            Inc.lives += 1;
            Crafty.trigger("updateLives")
            data.destroy();
        }) 
    }
});