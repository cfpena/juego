Ball.Mapa = function(game) {};	
var counter = 0 ;
		var step = Math.PI * 2 / 360 ;

Ball.Mapa.prototype = {

	create: function() {

		//var counter = 0 ;
		//var step = Math.PI * 2 / 360 ;
	    this.game.add.tileSprite(0, 0, 800, 600, 'fondo2');

	    button2 = this.game.add.button(500, 100, 'planeta2', this.irCarrera, this, 2, 1, 0);
	    button2.name = 'planeta';
	    button2.scale.setTo(0.2, 0.2);
	    button2.alpha = 0.95 ;
	    button2.x = 100 ;
	    button2.y = 500 ;
	    button2.anchor.x = button2.anchor.y = 0.5 ;
	    button2.scale.set(0.4,0.4)

	    button3 = this.game.add.button(500, 100, 'planeta3', this.irDesarrollo, this, 2, 1, 0);
	    button3.name = 'planeta';
	    button3.scale.setTo(0.2, 0.2);
	    button3.alpha = 0.95 ;
	    button3.x = 500 ;
	    button3.y = 100 ;
	    button3.anchor.x = button3.anchor.y = 0.5 ;

		planetaSp = this.game.add.sprite(0, 0, 'planetaSprite');
		planetaSp.scale.setTo(0.6, 0.6);
	    planetaSp.alpha = 0.5 ;
	    planetaSp.x = 100 ;
	    planetaSp.y = 500 ;
	    planetaSp.anchor.x = planetaSp.anchor.y = 0.5 ;
	    
	    button4 = this.game.add.button(200, 400, 'planeta4', null, this, 2, 1, 0);
	    button4.name = 'planeta';
	    button4.scale.setTo(0.2, 0.2);
	    button4.alpha = 0.95 ;
	    button4.x = 100 ;
	    button4.y = 500 ;
	    button4.anchor.x = button4.anchor.y = 0.5 ;
	    
	    
	    
	},
	irCarrera: function() {
		this.game.state.start('Carrera');
	},
	irDesarrollo: function() {
		this.game.state.start('Desarrollo');
	},
	initLevels: function() {

    },
	showLevel: function(level) {

    },
	updateCounter: function() {

    },
	managePause: function() {

    },
	manageAudio: function() {

    },
	update: function() {
		// Move sprite up and down smoothly for show
	    var tStep = Math.sin( counter ) ;
	    planetaSp.y = (this.game.height/2) + tStep * 30 ;
	    planetaSp.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
	    //counter += step ;

	    button2.y = 100 + tStep * 30 ;
	    button2.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
	    //counter += step ;

	    button3.y = 100 + tStep * 30 ;
	    button3.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
	    counter += step ;
    },
	wallCollision: function() {

    },
	handleOrientation: function(e) {

    },
	finishLevel: function() {

    },
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
		//this.game.debug.spriteInfo(planetaSp, 32, 32);
	}
};
