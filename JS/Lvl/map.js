Crafty.c("map", {
	init: function(){
		for (var x = 0; x < 20; x++) { //Рђ Р·РґРµСЃСЊ СѓР¶Рµ РїРѕС€Р»Рѕ СЃРѕР·РґР°РЅРёРµ РєР°СЂС‚С‹
		for (var y = 0; y < 11; y++) {

			if (y==0) {			/*РџРѕР»РЅРѕСЃС‚СЊСЋ РІРµСЂС…РЅСЏСЏ Р»РёРЅРёСЏ (РєРѕР�?РїРѕРЅРµРЅС‚ wall РґР»СЏ Р±РѕР»РµРµ РїСЂРѕСЃС‚РѕРіРѕ РѕРїСЂРµРґРµР»РµРЅРёСЏ РѕР±СЊРµРєС‚Р° РєР°Рє СЃС‚РµРЅС‹
			(С‡С‚РѕР±С‹ РЅРµ СѓРєР°Р·С‹РІР°С‚СЊ РєР°Р¶РґСѓСЋ РґРµС‚Р°Р»СЊ С‡С‚Рѕ СЌС‚Рѕ СЃС‚РµРЅР°, Сѓ РІСЃРµС… СЃС‚РµРЅ РёР·РЅР°С‡Р°Р»СЊРЅРѕ РµСЃС‚СЊ РєРѕР�?РїРѕРЅРµРЅС‚, СѓРєР°Р·С‹РІР°СЋС‰РёР№ РЅР° СЌС‚Рѕ) )*/
				if(x==0){
					Crafty.e("lefttop, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				}
				if (x==19) {
					Crafty.e("righttop, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (x>=1 && x<=4 || x>=6 && x<=13 || x>=15 && x<=18) {
					Crafty.e("topline, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (x==5 || x==14) {
					Crafty.e("toptobot, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (y==10){			//РџРѕР»РЅРѕСЃС‚СЊСЋ РЅРёР¶РЅСЏСЏ Р»РёРЅРёСЏ
				if (x==0) {
					Crafty.e("leftbot, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (x==19) {
					Crafty.e("rightbot, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (x>=1 && x<=4 || x>=6 && x<=13 || x>=15 && x<=18) {
					Crafty.e("botline, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (x==5 || x==14) {
					Crafty.e("bottotop, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (x==0) {			//Р›РµРІР°СЏ Р»РёРЅРёСЏ
				if (y!=0 && y!=10) {
					Crafty.e("leftline, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (x==19) {		//РџСЂР°РІР°СЏ Р»РёРЅРёСЏ
				if (y!=0 && y!=10) {
					Crafty.e("rightline, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (y==3 || y==7) {			//Р’РµСЂС‚РёРєР°Р»СЊРЅС‹Рµ С‚СЂСѓР±С‹
				if (x==2 || x==17) {
					Crafty.e("verttube, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (y==1 || y==9) {
				if (x==5 || x==14) {
					Crafty.e("verttube, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (y==2 || y==6 || y==8) {			//Р“РѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅС‹Рµ С‚СЂСѓР±С‹
				if (x>=8 && x<=11) {
					Crafty.e("hortube, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};

			if (y==2 || y==8) {			//РџСЂР°РІС‹Рµ "РїРёР�?РїС‹"
				if (x==3 || x==12) {
					Crafty.e("rightpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (y==4 || y==6) {
				if (x==5 || x==12 || x==15) {
					Crafty.e("rightpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (y==4 && x==8) {
				Crafty.e("rightpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};

			if (y==2 || y==8) {			//Р›РµРІС‹Рµ "РїРёР�?РїС‹"
				if (x==7 || x==16) {
					Crafty.e("leftpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (y==4 || y==6) {
				if (x==4 || x==7 || x==14) {
					Crafty.e("leftpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (y==4 && x==11) {
				Crafty.e("leftpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};

			if (x==5 || x==14) {		//Р’РµСЂС…РЅРёРµ Рё РЅРёР¶РЅРёРµ "РїРёР�?РїС‹" (СЏ РёР·Р�?РµРЅРёР» СЃС‚РёР»СЊ РїСЂРѕСЃС‚Р°РІР»РµРЅРёСЏ Р±Р»РѕРєРѕРІ, РёР·-Р·Р° С‚РѕРіРѕ, С‡С‚Рѕ Р·РґРµСЃСЊ РѕРЅРё РіСЂСѓРїРїРёСЂСѓСЋС‚СЊСЃСЏ (Р»СѓС‡С€Рµ) РїРѕ РґСЂСѓРіРѕР�?Сѓ)
				if (y==2) {
					Crafty.e("botpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
				if (y==8) {
					Crafty.e("toppimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			};
			if (x==2 || x==17) {
                            if (y==4) {
                            	Crafty.e("botpimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
                            };
                            if (y==6) {
				Crafty.e("toppimp, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
                            }
			};

			if (y==2 && x==2) {			//РџРѕРІРѕСЂРѕС‚РЅС‹Рµ С‚СЂСѓР±С‹
				Crafty.e("bottoright, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};
			if (y==8 && x==2) {
				Crafty.e("toptoright, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};
			if (y==2 && x==17) {
				Crafty.e("bottoleft, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};
			if (y==8 && x==17) {
				Crafty.e("toptoleft, wall").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};
			
			if (y==1 || y==9){			//РўСѓС‚ Р�?С‹ Р·Р°РґР°РµР�? РїСѓСЃС‚С‹Рµ Р�?РµСЃС‚Р°
				if (x >= 1 && x <= 4 || x >=6 && x <=13 || x >=15 &&x <= 18 ) {
					Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			}
			if (y==2 || y==8){
				if (x==1 || x==4 || x==6 || x==13 || x==15 || x==18 ) {
					Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			}
			if (y==3 || y==7){
				if (x >=3  && x <= 16 || x==1 || x===18) {
					Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				};
			}
			if (y==4 || y==6){
				if (x==1 || x==3 || x==6 || x==13 || x==16 || x==18 ) {
					Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
				}
				else (y==4)
					if (x==9 || x==10) {
						Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
					};
			}
			if (y==5 && x!=0 && x!=19) {
				Crafty.e("space").attr({x: x * Settings.poligon, y: y * Settings.poligon});
			};
		};
	};
	}
})