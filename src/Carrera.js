Ball.Carrera = function(game) {};
Ball.Carrera.prototype = {
	create: function() {
		this.game.world.setBounds(0, 0, 1600, 1200);

	    this.game.physics.startSystem(Phaser.Physics.P2JS);
	    this.game.physics.p2.restitution = 0.9;

	    starfield = this.game.add.tileSprite(0, 0, 800, 600, 'stars');
	    starfield.fixedToCamera = true;

	    veggies = this.game.add.group();
	    veggies.enableBody = true;
	    veggies.physicsBodyType = Phaser.Physics.P2JS;

	    var vegFrames = [ 1, 3, 4, 8 ];

	    for (var i = 0; i < 25; i++)
	    {
	        var veg = veggies.create(this.game.world.randomX, this.game.world.randomY, 'veggies', this.game.rnd.pick(vegFrames));
	        veg.body.setCircle(26);
	    }

	    ship = this.game.add.sprite(200, 200, 'ship');
	    ship.name = 'ship';
	    ship.scale.set(2);
	    ship.smoothed = false;
	    ship.animations.add('fly', [0,1,2,3,4,5], 10, true);
	    ship.play('fly');

	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
	    this.game.physics.p2.enable(ship, false);
	    ship.body.setCircle(28);
	    ship.body.fixedRotation = true;

	    this.game.camera.follow(ship);

	    this.game.physics.p2.setPostBroadphaseCallback(checkVeg, this);

	    cursors = this.game.input.keyboard.createCursorKeys();
	},
	checkVeg: function(body1, body2) {

	    //  To explain - the post broadphase event has collected together all potential collision pairs in the world
	    //  It doesn't mean they WILL collide, just that they might do.

	    //  This callback is sent each collision pair of bodies. It's up to you how you compare them.
	    //  If you return true then the pair will carry on into the narrow phase, potentially colliding.
	    //  If you return false they will be removed from the narrow phase check all together.

	    //  In this simple example if one of the bodies is our space ship, 
	    //  and the other body is the green pepper sprite (frame ID 4) then we DON'T allow the collision to happen.
	    //  Usually you would use a collision mask for something this simple, but it demonstates use.

	    if ((body1.sprite.name === 'ship' && body2.sprite.frame === 4) || (body2.sprite.name === 'ship' && body1.sprite.frame === 4))
	    {
	        return false;
	    }

	    return true;

	},
	
	update: function() {
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

	    if (!this.game.camera.atLimit.x)
	    {
	        starfield.tilePosition.x -= (ship.body.velocity.x * this.game.time.physicsElapsed);
	    }

	    if (!this.game.camera.atLimit.y)
	    {
	        starfield.tilePosition.y += (ship.body.velocity.y * this.game.time.physicsElapsed);
	    }
	},

	render: function() {

	    this.game.debug.text('World bodies: ' + this.game.physics.p2.total, 32, 32);

	}
};
