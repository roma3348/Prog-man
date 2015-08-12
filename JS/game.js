var Settings = {
	width: 320,
	heigth: 176,
	poligon: 16,
	lives: 1,
	//Место для других настроек
};

window.onload = function() {
	Crafty.init(Settings.width, Settings.heigth);

	Crafty.scene("loading");
};