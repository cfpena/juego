var velocidad=10;
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
		this.load.image('fondo2', 'img/fondo2.jpg');
		this.load.image('fondo_carrera', 'resources/ESCENARIO 2.png');
		this.load.spritesheet('planeta3', 'resources/planeta_03.png',366,493);
		this.load.spritesheet('planeta2', 'resources/planeta_04.png',366,493);
		this.load.spritesheet('planeta4', 'resources/planeta_06.png');
		

		//this.game.load.spritesheet('planeta', 'img/planeta.png', 193, 71);
		this.game.load.spritesheet('planeta', 'img/planeta.png');
		this.game.load.image('planetaSprite', 'img/planeta.png');

		
		this.load.spritesheet('Asteroides', 'img/Asteroides.png',64, 64);
		this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
		this.load.spritesheet('button-start', 'img/button-start.png', 146, 51);
		this.load.atlas('botonAtlas', 'img/button_texture_atlas.png', 'src/button_texture_atlas.json');
		this.load.image('block', 'img/block.png', 95, 95);
		this.load.image('robot1', 'resources/robot1.png', 166, 253);
		this.load.image('robot2', 'resources/robot2.png', 167, 254);
		this.load.image('robot3', 'resources/robot3.png', 166, 248);




		this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
	},
	create: function() {
		this.game.state.start('MainMenu');
	}
};
