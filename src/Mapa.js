Ball.Mapa = function(game) {};
var counter = 0 ;
		var step = Math.PI * 2 / 360 ;

Ball.Mapa.prototype = {

	create: function() {

		dialogo = [
		'',
		'Bienvenido humano\nesto es "Adventure Galaxy"',
		'Soy Roboto y te ayudare\nen esta aventura,',
		'Para comenzar escoge una\nmision en el mapa',
		];

		index = 0; 
		line = "";

		//var counter = 0 ;
		//var step = Math.PI * 2 / 360 ;
	     this.game.add.tileSprite(0, 0, 800, 600, 'back');
	     
	     buttonCFN = this.game.add.button(350,210,'planeta-cfn',undefined,this,2,1,0);
	     buttonCFN.name = 'planetaCFN';
	     buttonCFN.scale.setTo(0.25, 0.25);
	     titlePlanetCFN = this.game.add.bitmapText(90,450,'future-earth','CFN');
	     titlePlanetCFN.scale.setTo(1.4,1.4)
	     buttonCFN.addChild(titlePlanetCFN);


	     buttonCarrera = this.game.add.button(50,210,'planeta-carrera',this.irCarrera,this,2,1,0);
	     buttonCarrera.name = 'planetaCarrera';
	     buttonCarrera.scale.setTo(0.2, 0.2);


	     buttonIndustria = this.game.add.button(650,210,'planeta-industria',this.irDesarrollo,this,2,1,0);
	     buttonIndustria.name = 'planetaCarrera';
	     buttonIndustria.scale.setTo(0.25, 0.25);


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
	     titleCarreras = this.game.add.bitmapText(45,320,'future-earth','phobos');
	     titleCarreras.scale.setTo(0.30,0.30);
	     carrera.add(titleCarreras);



	     //planeta de desarrollo
	     glow2 =this.make.sprite(600,200,'glow-1');
	     glow2.scale.setTo(0.4,0.4)
	     industria = this.add.group();
	     industria.add(glow2);
	     industria.add(buttonIndustria);
	     titleDesarrollo = this.game.add.bitmapText(650,320,'future-earth','zep');
	     titleDesarrollo.scale.setTo(0.30,0.30);
	     industria.add(titleDesarrollo);

	     //planetas genericos
	     titlePlanet1 = this.game.add.bitmapText(90,410,'future-earth','yort');
	     titlePlanet1.scale.setTo(1.2,1.2);
	     button1.addChild(titlePlanet1);

	     titlePlanet2 = this.game.add.bitmapText(90,410,'future-earth','asoal');
	     titlePlanet2.scale.setTo(1.2,1.2);
	     button2.addChild(titlePlanet2);

	     titlePlanet3 = this.game.add.bitmapText(90,-100,'future-earth','aokok');
	     titlePlanet3.scale.setTo(1.5,1.5);
	     button3.addChild(titlePlanet3);

	     titlePlanet4 = this.game.add.bitmapText(-50,-100,'future-earth','trocks');
	     titlePlanet4.scale.setTo(1.5,1.5);
	     button4.addChild(titlePlanet4);


	     //dialogo
	     dialogoAnim = this.game.add.bitmapText(200,500,'future-earth');
	     dialogoAnim.scale.setTo(0.5,0.5);
	     this.nextLine();
	     ayuda = this.add.group();
	     roboto = this.add.sprite(50,440,'roboto');
	     roboto.scale.setTo(0.6,0.6);
	     ayuda_shadow = this.add.sprite(roboto.x+10,roboto.y+8,roboto.frame);
	     ayuda_shadow.tint = 0x000000;
	     ayuda_shadow.alpha = 0.6;
	     poly = new Phaser.Polygon([ new Phaser.Point(0, 450), new Phaser.Point(800, 450), new Phaser.Point(800, 600), new Phaser.Point(0, 600) ]);

    	graphics = this.add.graphics(0, 0);
	    graphics.beginFill(0x000000);
    	graphics.drawPolygon(poly.points);
    	graphics.endFill();
    	graphics.alpha = 0.6;
		ayuda.add(graphics)
	     ayuda.add(ayuda_shadow);
	     ayuda.add(roboto);
	     ayuda.add(dialogoAnim);
	     
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
		
	     var tStep = Math.sin( counter ) ;
	
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

    },
	wallCollision: function() {

    },
	handleOrientation: function(e) {

    },
	finishLevel: function() {

    },
	render: function() {

	},

	updateLine: function(){
		if (line.length < dialogo[index].length)
    		{
        		line = dialogo[index].substr(0, line.length + 1);
        		dialogoAnim.text = line;
    		}
    	else
    		{
        		this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
    		}
	},

	nextLine: function() {

    	index++;

    	if (index < dialogo.length)
   	 	{
        	line = '';
        	this.time.events.repeat(80, dialogo[index].length + 1, this.updateLine, this);
    	}else{
    		ayuda.visible=false;
    	}

	}
};