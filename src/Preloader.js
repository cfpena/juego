var velocidad=60;
var prestamoDesarrollo=false;
Ball.Preloader = function(game) {};
Ball.Preloader.prototype = {
	preload: function() {
		this.preloadBg = this.add.sprite((Ball._WIDTH-297)*0.5, (Ball._HEIGHT-145)*0.5, 'preloaderBg');
		this.preloadBar = this.add.sprite((Ball._WIDTH-158)*0.5, (Ball._HEIGHT-50)*0.5, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);

		this.load.image('ball', 'img/ball.png');
		this.load.image('hole', 'img/hole.png');
		this.load.image('element-w', 'img/element-w.png');
		this.load.image('element-h', 'img/element-h.png');
		this.load.image('panel', 'img/panel.png');
		this.load.image('title', 'img/title.png');
		this.load.image('button-pause', 'img/button-pause.png');
		this.load.image('screen-bg', 'img/screen-bg.png');
		this.load.image('screen-gameover', 'resources/images/screen-gameover.png');
		this.load.image('screen-gameover2', 'resources/images/screen-gameover2.png');
		this.load.image('ComoJugarDesarrollo', 'resources/images/comojugardesarrollo.png');
		
		this.load.image('banda', 'resources/images/BANDA.png');
		this.load.image('fabrica', 'resources/images/Fabrica.png');
		this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
		this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');
		this.load.image('border-horizontal', 'img/border-horizontal.png');
		this.load.image('border-vertical', 'img/border-vertical.png');
		this.load.image('fondo2', 'img/fondo2.jpg');
		this.load.image('fondo_carrera', 'img/fondo_carrera.jpg');
		//this.load.image('fondo_carrera', 'resources/images/ESCENARIO 2.png');

		this.load.image('fondo_carrera', 'resources/images/ESCENARIO 2.png');
		this.load.image('back','resources/images/background.png');
		//this.game.load.spritesheet('planeta', 'img/planeta.png', 193, 71);
		this.game.load.spritesheet('planeta', 'img/planeta.png');
		this.game.load.image('planetaSprite', 'img/planeta.png');

		this.load.image('asteroide-5', 'resources/images/asteroide_05.png');
		this.load.image('balaV', 'resources/images/balaV.png');
		//	this.load.atlas('botonAtlas', 'img/button_texture_atlas.png', 'src/button_texture_atlas.json');

		this.load.image('disparo', 'img/bullet0.png');//__________------Cargar
		this.load.spritesheet('explosion', 'img/explode.png', 128, 128);//--------Cargar

		this.load.spritesheet('Asteroides', 'img/Asteroides.png',64, 64);
		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
		this.load.atlas('botonAtlas', 'img/button_texture_atlas.png', 'src/button_texture_atlas.json');

		this.load.image('block', 'img/block.png', 95, 95);
		this.load.image('caja1', 'resources/images/caja1.png');
		this.load.image('caja2', 'resources/images/caja2.png');
		this.load.image('caja3', 'resources/images/caja3.png');
		this.load.image('caja4', 'resources/images/caja4.png');
		this.load.image('robot1', 'resources/images/robot1.png', 166, 253);
		this.load.image('robot2', 'resources/images/robot2.png', 167, 254);
		this.load.image('robot3', 'resources/images/robot3.png', 166, 248);

		//ilustraciones definitivas
		this.load.image('planeta-cfn','resources/images/planeta_08.png');
		this.load.image('planeta-carrera','resources/images/planeta_01.png');
		this.load.image('planeta-industria','resources/images/planeta_02.png');
		this.load.image('planeta-3','resources/images/planeta_03.png');
		this.load.image('planeta-4','resources/images/planeta_04.png');
		this.load.image('planeta-5','resources/images/planeta_05.png');
		this.load.image('planeta-6','resources/images/planeta_06.png');
		this.load.image('planeta-7','resources/images/planeta_07.png');
		this.load.image('glow-1','resources/images/LightRotate1.png');


		this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
