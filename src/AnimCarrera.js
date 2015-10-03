Ball.AnimCarrera = function(game) {};
Ball.AnimCarrera.prototype = {

	create: function() {

		starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;
		this.physics.startSystem(Phaser.Physics.P2JS);

		ship = this.game.add.sprite(0, 280, 'nave-1mini');
	    ship.scale.set(0.01,0.01);
	    this.game.add.tween(ship).to( { angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
	    ship.smoothed = false;
	    ship.play('fly');
	    ship.angle = 4;
	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
		this.game.physics.p2.enable(ship, false);
	    ship.body.setCircle(28);

	    shipV = this.game.add.sprite(150, 350, 'nave-2mini');
	    shipV.scale.set(0.1,0.1);
	    this.game.add.tween(shipV).to( { angle: 45 }, 2000, Phaser.Easing.Linear.None, true);
	    shipV.smoothed = false;
	    shipV.play('fly');

	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
		this.game.physics.p2.enable(shipV, false);
	    shipV.body.setCircle(28);

	    planetaRojo = this.game.add.sprite(Ball._WIDTH - 300, -100, 'planetaRojo');
	    planetaRojo.scale.set(2.5,2.5);

		
	},


	update: function() {

	    ship.body.setZeroVelocity();
		ship.body.moveRight(200);
		shipV.body.moveRight(100);
		shipV.angle = 90;
		if(shipV.x >= 600){
			this.game.state.start('WinCarrera');
		}
	},
	IrMensajeWin :function(){
		this.game.state.start('Carrera');
	},
	IrMapa :function(){
		this.game.state.start('Mapa');
	}
};
