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
		this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
		this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');
		this.load.image('border-horizontal', 'img/border-horizontal.png');
		this.load.image('border-vertical', 'img/border-vertical.png');
		//this.load.image('fondo2', 'img/fondo2.jpg');
		this.load.image('fondo_carrera', 'resources/images/ESCENARIO 2.png');
		this.load.image('back','resources/background.png');

		//this.game.load.spritesheet('planeta', 'img/planeta.png', 193, 71);
		this.game.load.spritesheet('planeta', 'img/planeta.png');
		this.game.load.image('planetaSprite', 'img/planeta.png');

		this.load.image('nave-1', 'resources/images/nave-1.png');
		this.load.image('nave-2', 'resources/images/nave-2.png');
		this.load.image('nave-3', 'resources/images/nave-3.png');
		this.load.image('nave-4', 'resources/images/nave-4.png');
		this.load.spritesheet('Asteroides', 'img/Asteroides.png',64, 64);
		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
		this.load.atlas('botonAtlas', 'img/button_texture_atlas.png', 'src/button_texture_atlas.json');
		this.load.spritesheet('block', 'img/block.png', 95, 95);

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
