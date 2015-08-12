Crafty.c("player", {
    init: function(){
        this.addComponent("2D, DOM, playerR, Fourway, Collision");
        this.attr({x: 9 * Settings.poligon, y: 5 * Settings.poligon});
        this.fourway(1.6);
        this.collision();
		
		/*this.onHit("wall", function(){
			this.move("n", 1); 
		});*/
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
		})
		
		
    },
	stopOnSolids: function() {

        this.onHit('Solid', this.stopMovement);
        return this;

    },

    stopMovement: function(data) {
        
        var overlap = data[0].overlap;
        var enemie = data[0].obj;
        
        if (overlap < enemie.nOverlap)
        {

            this._speed = 0;
            if (this._movement) {
                this.x -= this._movement.x;
                this.y -= this._movement.y;
            }

        }

    }
});