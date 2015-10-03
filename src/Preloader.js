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
		this.load.image('fondo2', 'img/fondo2.jpg');
		this.load.image('fondo_carrera', 'img/fondo_carrera.jpg');
		//this.load.image('fondo_carrera', 'resources/images/ESCENARIO 2.png');

		//this.game.load.spritesheet('planeta', 'img/planeta.png', 193, 71);
		this.game.load.spritesheet('planeta', 'img/planeta.png');
		this.game.load.image('planetaSprite', 'img/planeta.png');

		this.load.image('nave-1', 'resources/images/nave_01.png');
		this.load.image('nave-2', 'resources/images/nave_02.png');
		this.load.image('nave-3', 'resources/images/nave_03.png');
		this.load.image('asteroide-5', 'resources/images/asteroide_05.png');
		this.load.image('balaV', 'resources/images/balaV.png');
		//this.load.image('nave-4', 'resources/images/nave_04.png');
    this.load.spritesheet('Asteroides', 'img/Asteroides.png',64, 64);
		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
		//	this.load.atlas('botonAtlas', 'img/button_texture_atlas.png', 'src/button_texture_atlas.json');

		this.load.image('disparo', 'img/bullet0.png');//__________------Cargar
		this.load.spritesheet('explosion', 'img/explode.png', 128, 128);//--------Cargar

		this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
