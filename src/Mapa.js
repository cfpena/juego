Ball.Mapa = function(game) {};
var counter = 0 ;
		var step = Math.PI * 2 / 360 ;

Ball.Mapa.prototype = {

	create: function() {

		//var counter = 0 ;
		//var step = Math.PI * 2 / 360 ;
	     this.game.add.tileSprite(0, 0, 800, 600, 'back');
	     
	     buttonCFN = this.game.add.button(350,210,'planeta-cfn',undefined,this,2,1,0);
	     buttonCFN.name = 'planetaCFN';
	     buttonCFN.scale.setTo(0.25, 0.25);
		this.add.text(350,150, 'CFN', { font: '25px Arial', fill: '#ffffff' })


	     buttonCarrera = this.game.add.button(50,210,'planeta-carrera',this.irCarrera,this,2,1,0);
	     buttonCarrera.name = 'planetaCarrera';
	     buttonCarrera.scale.setTo(0.2, 0.2);
	     this.add.text(10,150, 'PLAN RENOVA', { font: '25px Arial', fill: '#ffffff' })


	     buttonIndustria = this.game.add.button(650,210,'planeta-industria',this.irDesarrollo,this,2,1,0);
	     buttonIndustria.name = 'planetaCarrera';
	     buttonIndustria.scale.setTo(0.25, 0.25);
	     this.add.text(590,130, 'DESARROLLO', { font: '25px Arial', fill: '#ffffff' })


	     //planetas alternos
	     button1 = this.game.add.button(500,410,'planeta-3',undefined,this,2,1,0);
	     button1.name = 'planeta1';
	     button1.scale.setTo(0.27, 0.27);

	     button2= this.game.add.button(110,390,'planeta-4',undefined,this,2,1,0);
	     button2.name = 'planeta2';
	     button2.scale.setTo(0.27, 0.27);

	     button3 = this.game.add.button(500,110,'planeta-5',undefined,this,2,1,0);
	     button3.name = 'planeta3';
	     button3.scale.setTo(0.20, 0.20);

	     button4 = this.game.add.button(230,110,'planeta-6',undefined,this,2,1,0);
	     button4.name = 'planeta4';
	     button4.scale.setTo(0.20, 0.20);

	     //adding glow group and resort
	     //planeta de Carreras
	     glow =this.make.sprite(10,200,'glow-1');
	     glow.scale.setTo(0.4,0.4)
	     carrera = this.add.group();
	     carrera.add(glow);
	     carrera.add(buttonCarrera);

	     //planeta de desarrollo
	     glow2 =this.make.sprite(600,200,'glow-1');
	     glow2.scale.setTo(0.4,0.4)
	     industria = this.add.group();
	     industria.add(glow2);
	     industria.add(buttonIndustria);

	},
	irCarrera: function() {
	 	this.game.state.start('ComoJugarCarrera');
	},
	irDesarrollo: function() {
		this.game.state.start('ComoJugarDesarrollo');
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
	 //    planetaSp.y = (this.game.height/2) + tStep * 30 ;
	 //    planetaSp.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
	 //    counter += step ;

	    buttonCFN.y = 210 + tStep * 10 ;
	    buttonCFN.rotation += Phaser.Math.degToRad( 0.04 * tStep ) ;

	    carrera.y = tStep * 20 ;
	    carrera.rotation += Phaser.Math.degToRad( -0.04 * tStep ) ;
	    glow.alpha = 0.7 - Math.abs(tStep) * .3;


	    industria.y = tStep * 20 ;
	    industria.rotation += Phaser.Math.degToRad( -0.04 * tStep ) ;
	    glow2.alpha = 0.4 + Math.abs(tStep) * .3;

	    button1.y = 410 + tStep * 20 ;
	    button1.rotation += Phaser.Math.degToRad( 0.04 * tStep ) ;

	    button2.y = 410 + tStep * 20 ;
	    button2.rotation += Phaser.Math.degToRad( -0.04 * tStep ) ;

	    button3.y = 110 - tStep * 20 ;
	    button3.rotation += Phaser.Math.degToRad( -0.04 * tStep ) ;

	    button4.y = 110 - tStep * 20 ;
	    button4.rotation += Phaser.Math.degToRad( 0.04 * tStep ) ;


	    counter += step ;


	    // button3.y = 100 + tStep * 30 ;
	    // button3.rotation += Phaser.Math.degToRad( 0.1 * tStep ) ;
	    // counter += step ;
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
