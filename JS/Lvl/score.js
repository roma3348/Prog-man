Crafty.c("score", {
	init: function(){
            Crafty.e("2D, DOM, scorepanel").attr({x: 0 * Settings.poligon, y: 11 * Settings.poligon});//Картинка панели с данными
            
            var scoreDisplay = Crafty.e("2D, DOM, Text")
            var score = 1000;//Сам скор(надо изменить на 0 и дописать код, чтобы скор увеличивался со временем)
            
            scoreDisplay.text("Score:"+score).attr({x: 1.7 * Settings.poligon, y: 11.8 * Settings.poligon});//Отображает "Score: ххх" *ххх-некое число
            var livesDisplayText = Crafty.e("2D, DOM, Text").text("x"+Inc.lives)//Текстовая часть отображения жизней
                .attr({x:15.85 * Settings.poligon, y: 11.8 * Settings.poligon});
            livesDisplayText.bind("update", function(){//Ивент для обновления значения (непроверенно)
                this.text("x"+Inc.lives)
            });
            Crafty.e("2D, DOM, live").attr({x:14.7 * Settings.poligon, y: 12 * Settings.poligon});//Медиа часть отображения жизней (спрайт жизней)
	}
});