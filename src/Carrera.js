Ball.Carrera = function(game) {};

Ball.Carrera.prototype = {

	create: function() {
		lngPista = 1000;
		numMeteoritos = 30;
		vida = 100;
		escenario = 1;
		animaciones = 0;
		funAnimacion1 = true;
		funAnimacion2 = true;
		animacion = false;
		controles = true;
		controlNaveV = true;
		escena1 = true;
		this.inicio();

	},

	//Escenario 1---------------------------------------------
	inicio: function() {
		v=200;
		timerExp = this.game.time.create(false);
		var tween=null;
		total=0;
    this.physics.startSystem(Phaser.Physics.P2JS);
		this.physics.p2.setImpactEvents(true);
		this.physics.p2.restitution = 0.8;
		this.world.setBounds(0, 0, 800, lngPista);

		var shipCol = this.physics.p2.createCollisionGroup();

		this.physics.p2.updateBoundsCollisionGroup();

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;

	    ship = this.add.sprite(this.game.world.centerX, lngPista-100, 'nave-1');
	    ship.name = 'ship';
	    ship.scale.setTo(0.25, 0.25);


			asteroideG = this.game.add.sprite(0, 0, 'asteroide-5');
			asteroideG.name = 'asteroideG';
		  asteroideG.x = 0 ;
	    asteroideG.y = 0 ;
	    asteroideG.anchor.x = asteroideG.anchor.y = 0.5 ;
	    asteroideG.scale.setTo(3, 3);
	    this.physics.p2.enable(asteroideG, false);

	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
	    this.physics.p2.enable(ship, false);


	    this.camera.follow(ship);
	    cursors = this.input.keyboard.createCursorKeys();
	},


	animacionV1: function() {
		v=200;

		//var shipCol = this.physics.p2.createCollisionGroup();

		//this.physics.p2.updateBoundsCollisionGroup();

	    balaV = this.game.add.sprite(this.game.world.centerX/2+this.game.world.centerX, 100, 'balaV');
	    shipV = this.add.sprite(this.game.world.centerX/2+this.game.world.centerX, lngPista-100, 'nave-3');
	    shipV.name = 'shipV';
	    shipV.scale.setTo(0.25, 0.25);
	    //shipV.smoothed = false;

	    balaV.name = 'balaV';

	    //balaV.anchor.x = balaV.anchor.y = 0.5 ;
	    balaV.scale.setTo(0.5, 0.5);


	    //  Create our physics body - a 28px radius circle. Set the 'false' parameter below to 'true' to enable debugging
	    this.physics.p2.enable(shipV, false);
	    this.physics.p2.enable(balaV, false);
	    balaV.alpha = 0 ;
	    //shipV.body.setCircle(28);
	    //shipV.body.fixedRotation = true;
		//shipV.body.setCollisionGroup(shipCol);
		this.game.physics.p2.setPostBroadphaseCallback(this.checkBullet, this);
	    funAnimacion1 = false;
	},

	popupEvento: function(){
		//  You can drag the pop-up window around
	    popup = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'fondo_carrera');
	    popup.anchor.set(0.5);
	    popup.inputEnabled = true;
	    popup.input.enableDrag();

	    //  Position the close button to the top-right of the popup sprite (minus 8px for spacing)
	    var pw = (popup.width / 2) - 30;
	    var ph = (popup.height / 2) - 8;

	    //  And click the close button to close it down again
	    var closeButton = this.game.make.sprite(pw, -ph, 'ball');
	    closeButton.inputEnabled = true;
	    closeButton.input.priorityID = 1;
	    closeButton.events.onInputDown.add(this.closeWindowPop, this);

	    //  Add the "close button" to the popup window image
	    popup.addChild(closeButton);

	    //  Hide it awaiting a click
	    popup.scale.set(0);

	    //  Pop the window open
	    //game.input.onDown.add(OpenWindow, this);


	    //  Create a tween that will pop-open the window, but only if it's not already tweening or open
	    tween = this.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
	    funAnimacion2 = false;

	},

	closeWindowPop: function() {



	    //  Create a tween that will close the window, but only if it's not already tweening or closed
	    tween = this.game.add.tween(popup.scale).to( { x: 0, y: 0 }, 500, Phaser.Easing.Elastic.In, true);
	    //shipV.body.velocity.y = 100;
	    //shipV.body.moveUp(200);
	    shipV.y = shipV.y + 100;
	    controles = true;
	},

	explosion: function(){
		emitter = this.game.add.emitter(this.game.world.centerX, 20, 20);
	    //  Here we're passing an array of image keys. It will pick one at random when emitting a new particle.

	    emitter.makeParticles(['ball', 'hole', 'ball']);
	    emitter.start(false, 5000, 200);
	},

	//Escenario 2------------------------------------------------------------------------
	juego: function() {
		v=200;
		escenario = 2;
		timerExp.stop();
		lngPista = 10000;
		NumBalas = 2;
		velocityBullet = -500
		bulletTime=0;
		meteoritos = [];
		numMeteoritos = 200;
		maxvida=10;
		vida = 10;
		meta = 50;
		CambioNave = 9000;
		bandera = true;
		isNave2=false;
		var tween=null;
		this.timer = 0;
		this.totalTimer = 0;
    this.physics.startSystem(Phaser.Physics.P2JS);
		this.physics.p2.setImpactEvents(true);
		this.physics.p2.restitution = 0.8;
		this.world.setBounds(0, 0, 800, lngPista);

		var shipCol = this.physics.p2.createCollisionGroup();
		var AsteroideCol = this.physics.p2.createCollisionGroup();
		var BulletCol = this.physics.p2.createCollisionGroup();

		this.physics.p2.updateBoundsCollisionGroup();

		//Escenario
    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
    starfield.fixedToCamera = true;

		//creacion de asteroides
		asteroides = this.add.group();
		asteroides.enableBody = true;
		asteroides.physicsBodyType = Phaser.Physics.P2JS;

		var vegFrames = [ 1, 3, 4, 8 ];

		for (var i = 0; i < numMeteoritos; i++)
		{
				var ast = asteroides.create(this.world.randomX, this.world.randomY, 'Asteroides', this.rnd.pick(vegFrames));
				ast.body.setCollisionGroup(AsteroideCol);
				ast.body.collides([AsteroideCol, shipCol]);
				ast.body.collides(BulletCol, this.DisparoAsteroide, this);
		}

		//Creación de nave
    ship = this.add.sprite(this.game.world.centerX, lngPista-100, 'nave-1');
    ship.name = 'nave';
  	ship.scale.setTo(0.25, 0.25);
    ship.smoothed = false;
    this.physics.p2.enable(ship, false);
    ship.body.setCircle(28);
    ship.body.fixedRotation = true;
		ship.body.setCollisionGroup(shipCol);
		ship.body.collides(AsteroideCol, this.colision, this);


			//Nueva que hay que poner
			//Creación de disparos
			bullets = this.add.group();
			bullets.enableBody = true;
			bullets.physicsBodyType = Phaser.Physics.P2JS;

			for (var i = 0; i < NumBalas; i++){
					var b = bullets.create(0, 0, 'disparo');
					b.name = 'bullet2';
					b.exists = false;
					b.visible = false;
					b.body.setCollisionGroup(BulletCol);
					b.body.collides([BulletCol, AsteroideCol]);
					b.body.fixedRotation = true
					//b.checkWorldBounds = true;
					//b.events.onOutOfBounds.add(this.resetDisparo, this);
			}

			this.totalTimeText = this.game.add.text(650, 30, "Total time: "+this.totalTimer, { font: '16px Arial', fill: '#ffffff' });
			this.vidaText=this.add.text(64, 30, 'Vidas: '+ vida, { font: '16px Arial', fill: '#ffffff' });
			this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
	    this.camera.follow(ship);
	    cursors = this.input.keyboard.createCursorKeys();
			disparar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	},

	DispararYa :function () {

    if (this.time.now > bulletTime){
        bullet = bullets.getFirstExists(false);
        if (bullet){
            bullet.reset(ship.x + 6, ship.y - 8);
            bullet.body.velocity.y = velocityBullet;
            bulletTime = this.time.now + 150;
        }
    }

	},

	//  Called if the bullet goes out of the screen
	resetDisparo:function  (bullet) {

	    bullet.sprite.kill();

	},

	updateCounter: function() {
		this.timer++;
		//this.timerText.setText("Time: "+this.timer);
		this.totalTimeText.setText("Total time: "+(this.totalTimer+this.timer));
	},

	DisparoAsteroide:function(bullet,asteroide){
		bullet.sprite.kill()
		asteroide.sprite.kill()
		crow = this.add.sprite(asteroide.x-70, asteroide.y-100, 'explosion');
		crow.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, false);
		crow.animations.play('right');
	},

	//Esta funcion hay que implementarla
	boom: function(asteroide){
		crow = this.add.sprite(asteroide.x-50, asteroide.y-50, 'explosion');
		crow.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, false);
		crow.animations.play('right');
	},

	//Mucho de esta funcion hay que implementar
	colision : function (ship, asteroide) {

		if (vida<=0){
			this.boom(asteroide);
			asteroide.sprite.kill();
			ship.sprite.kill();
			this.vidaText.setText("Perdiste");
			//this.pause();
		}else{
			console.log(ship.frame);
			this.boom(asteroide);
			vida= parseInt(vida)  -1;
			asteroide.sprite.kill();
			this.vidaText.setText("Vida: "+(vida));
		}
	},

	//Esta funcion hay que implementar en lo nuevo
	CambioNave: function(){
		ship.loadTexture("explosion")
		ship.animations.add('right', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 8, false);
		ship.animations.play('right');
		//this.startTimer();
		ship.loadTexture('nave-2',0);
		isNave2 = true;
	},

	update:function() {

			/*for (x=0;x<meteoritos.length;x++){
				if (!(meteoritos[x].x<750 & meteoritos[x].x>20)){
					meteoritos[x].body.velocity.x=v*-1;
					v=v*-1;
				}else{
					meteoritos[x].body.velocity.x=v;
				}
			}*/

	    ship.body.setZeroVelocity();

	    if (escenario == 1) {
	    	//console.log(ship.y);
	    	if (parseInt(ship.y) == parseInt(lngPista/2) && funAnimacion2){
				controles = false;
				animacion = true;
				animaciones = 1;
			}
			switch (animaciones){
				case 0:
					break;
				case 1:
					if(funAnimacion1) this.animacionV1();
					if (parseInt(shipV.y) != parseInt(lngPista/2)){
						shipV.body.moveUp(300);

					} else{
						shipV.body.velocity.y = 0;
						if(funAnimacion2) this.popupEvento();
					}
					break;
				case 2:
					if(shipV.angle >= -90){
						shipV.body.rotateLeft(50);
					}else{
						shipV.body.rotateLeft(0);
						balaV.x = shipV.x-100 ;
	    				balaV.y = shipV.y ;
						balaV.alpha = 1;
						balaV.body.moveLeft(200);
						//balaV.body.velocity.y = 50;
						//this.game.physics.arcade.collide(balaV, asteroideG, this.collisionHandler, null, this);


					}

					//escenario = 2;
					//this.juego();
					break;
			}

	    }

	    if(escenario == 2){
			for (var i=0; i<numMeteoritos; i++) {
				asteroides.getAt(i).x += Math.random()*2;
				asteroides.getAt(i).y += Math.random()*2;
			}

			//Esto se va haciendo recien
			if (isNave2){
				if (disparar.isDown){
					this.DispararYa();
				}
			}

			if(ship.y<CambioNave && bandera){
				this.CambioNave();
			}
		}

		if (animaciones == 1){
			if (parseInt(shipV.y) < 100) {
				shipV.body.velocity.y = 0;
				if (parseInt(ship.y) < 300 && parseInt(ship.y) > 200){
					animaciones = 2;
					controles = false;

				}
			}
		}

		if (ship.y<50){
			if(escenario == 2){
				this.vidaText.setText("Ganaste");
			}

		}

		if (animacion) {

		}

		if(controles){
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
					if (ship.y <= lngPista - (Ball._HEIGHT/2) && ship.y >= Ball._HEIGHT/2 && escenario != 1){
						this.vidaText.y=ship.y-270;
						this.totalTimeText.y=ship.y-270;
					}
		    }
		    else if (cursors.down.isDown)
		    {
		      ship.body.moveDown(200);
					if (ship.y <= lngPista - (Ball._HEIGHT/2) && ship.y >= Ball._HEIGHT/2 && escenario != 1){
						this.vidaText.y=ship.y-270;
						this.totalTimeText.y=ship.y-270;
					}
		    }
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

	checkBullet: function(body1, body2) {

	    //  To explain - the post broadphase event has collected together all potential collision pairs in the world
	    //  It doesn't mean they WILL collide, just that they might do.

	    //  This callback is sent each collision pair of bodies. It's up to you how you compare them.
	    //  If you return true then the pair will carry on into the narrow phase, potentially colliding.
	    //  If you return false they will be removed from the narrow phase check all together.

	    //  In this simple example if one of the bodies is our space ship,
	    //  and the other body is the green pepper sprite (frame ID 4) then we DON'T allow the collision to happen.
	    //  Usually you would use a collision mask for something this simple, but it demonstates use.

	    if ((body1.sprite.name == 'shipV' && body2.sprite.name == 'balaV') || (body2.sprite.name == 'shipV' && body1.sprite.name == 'balaV') ){
	        return false;
	    }
	    if ((body1.sprite.name == 'bullet2' && body2.sprite.name == 'bullet2') ){
	        return false;
	    }
	    if ((body1.sprite.name == 'asteroideG' && body2.sprite.name == 'balaV') || (body2.sprite.name == 'asteroideG' && body1.sprite.name == 'balaV') ){
	    	asteroideG.alpha = 0;

	    	if(escena1){
	    		timerExp = this.game.time.create(false);

			    //  Set a TimerEvent to occur after 2 seconds
			    timerExp.loop(1000, this.juego, this);

			    //  Start the timer running - this is important!
			    //  It won't start automatically, allowing you to hook it to button events and the like.
			    timerExp.start();

	    		//this.juego();
	    		controles = true;
	    		escena1 = false;
	    		this.explosion();
	    	}

	        return false;
	    }

	    return true;

	},
	espera: function() {
		//total++;


	},
	render: function() {
		//this.debug.text("Vida: " + vida, 32, 32);

	    //this.debug.text('World bodies: ' + this.physics.p2.total, 32, 32);

	}
};
