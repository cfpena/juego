Ball.Desarrollo = function(game) {};
Ball.Desarrollo.prototype = {

		create: function() {
			
	   // this.world.setBounds(0, 0, 800, 10000);

	    this.physics.startSystem(Phaser.Physics.P2JS);
	    this.physics.p2.restitution = 0.0;

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;
	    
	    this.physics.p2.gravity.y = 300;
	    barra= this.add.sprite(0, 125, 'panel');
	    
	    caja = this.add.sprite(0, 80, 'nave');
	    this.physics.p2.enable(caja);
	    
	    
	    
	    
	    this.physics.p2.enable(barra);
        
        barra.body.static= true;
        //caja.body.bounce.set(0);
        //caja.body.inmovable=true;
        
        
       
        
        
	  
	   
	    
		

	},

	update:function() {
		
		
			if (!(caja.x<800 && caja.y>1)){
				caja.body.moveRight(1);
				
			
			}
		
		
		
		
		

			
		},

		collisionHandler : function () {
		    

		},

	render: function() {

	    //this.debug.text('World bodies: ' + this.physics.p2.total, 32, 32);

	}
};

