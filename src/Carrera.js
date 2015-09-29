Ball.Carrera = function(game) {};
Ball.Carrera.prototype = {
	create: function() {

			var vida = 10;
	    this.world.setBounds(0, 0, 800, 10000);

	    this.physics.startSystem(Phaser.Physics.P2JS);
	    this.physics.p2.restitution = 0.9;

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;

	    veggies = this.add.group();
	    veggies.enableBody = true;
	    veggies.physicsBodyType = Phaser.Physics.P2JS;

	    var vegFrames = [ 1, 3, 4, 8 ];

	    for (var i = 0; i < 100; i++)
	    {
	        var veg = veggies.create(this.world.randomX, this.world.randomY, 'Asteroides', this.rnd.pick(vegFrames));
	        veg.body.setCircle(26);
					veg.body.velocity.x = 200;
					veg.body.velocity.y = -300;
					veg.body.accele
	    }

	    ship = this.add.sprite(200, 200, 'nave');
	    ship.name = 'nave';
	    ship.scale.set(2);
	    ship.smoothed = false;
	    ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
	    ship.play('fly');

	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
	    this.physics.p2.enable(ship, false);
	    ship.body.setCircle(28);
	    ship.body.fixedRotation = true;

	    this.camera.follow(ship);

	    //this.physics.p2.setPostBroadphaseCallback(checkVeg, this);

	    cursors = this.input.keyboard.createCursorKeys();

	},

	update:function() {

	    ship.body.setZeroVelocity();

	    if (cursors.left.isDown)
	    {
	        ship.body.moveLeft(200);
	    }
	    else if (cursors.right.isDown)
	    {
	        ship.body.moveRight(200);
	    }

	    if (cursors.up.isDown)
	    {
	        ship.body.moveUp(200);
	    }
	    else if (cursors.down.isDown)
	    {
	        ship.body.moveDown(200);
	    }

	    if (!this.camera.atLimit.x)
	    {
	        starfield.tilePosition.x -= (ship.body.velocity.x * this.time.physicsElapsed);
	    }

	    if (!this.camera.atLimit.y)
	    {
	        starfield.tilePosition.y -= (ship.body.velocity.y * this.time.physicsElapsed);
	    }

	},

	render: function() {

	    //this.debug.text('World bodies: ' + this.physics.p2.total, 32, 32);

	}
};
