Ball.Desarrollo = function(game) {};
Ball.Desarrollo.prototype = {

		create: function() {
			
		this.game.physics.setBoundsToWorld();

	    this.physics.startSystem(Phaser.Physics.P2JS);
	    this.physics.p2.restitution = 0.0;

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;
	    bounds = new Phaser.Rectangle(0, 0, 800, 600);
	    
	    this.physics.p2.gravity.y = 300;
	    barra= this.add.sprite(0, 125, 'panel');
	    grupo =this.add.group();
	   	grupoDecolision = this.physics.p2.createCollisionGroup();
	    //this.physics.p2.updateBoundsCollisionGroup();
	    time=0;
	    cajasPerdidas=0;
	    amarillas=0;
	    azules=0;
	    rojas=0;
		tiempo=this.add.text(64, 10, 'Tiempo: '+ time, { font: '16px Arial', fill: '#ffffff' })
		perdidos=this.add.text(200, 10, 'Perdidos: '+ time, { font: '16px Arial', fill: '#ffffff' })
		amarilloText=this.add.text(500, 10, 'Amarillos: '+ amarillas, { font: '16px Arial', fill: '#ffffff' })
		azulText=this.add.text(500, 30, 'Azules: '+ azules, { font: '16px Arial', fill: '#ffffff' })
		rojoText=this.add.text(500, 60, 'Rojos: '+ rojas, { font: '16px Arial', fill: '#ffffff' })

		botonAmarillo = this.add.button(400, 400, 'botonAtlas', emit.actionOnClick1, this, 'over', 'out', 'down');
		botonAzul = this.add.button(600, 400, 'botonAtlas', emit.actionOnClick2, this, 'over', 'out', 'down');
		botonRojo = this.add.button(400, 300, 'botonAtlas', emit.actionOnClick3, this, 'over', 'out', 'down');

	    
	    
	    
	    
	    
	    this.physics.p2.enable(barra);
        
        barra.body.static= true;
        //caja.body.bounce.set(0);
        //caja.body.inmovable=true;
        
        
       
        
        
	  
	   
	    
		

	},

	update:function() {
		
			time++;
			tiempo.setText("tiempo:  " + Math.round(time/60));
			perdidos.setText("Perdidos:  " + cajasPerdidas);
			amarilloText.setText("Amarillos:  " + amarillas);
			azulText.setText("Azules:  " + azules);
			rojoText.setText("Rojos:  " + rojas);
			if(time%120==2){
				
				
				
				numero=Math.floor((Math.random() * 4) + 1);
				caja=this.add.sprite(0, 80, 'nave-'+numero);
				caja.name=String(numero);
			    this.physics.p2.enable(caja);
			    grupo.add(caja);			
				caja.body.moveRight(1);

			}
			
			if (grupo.getTop()!=null && grupo.getBottom().body.y>=580){
				
				cajita=grupo.getBottom();
				cajasPerdidas++;	
				cajita.kill();
				grupo.remove(cajita);		
				
			}
			
			
		
		
		
		
		

			
		},
		
		
		

		collisionHandler : function (caja,platforms) {
			caja.kill();
		    

		},
		

	render: function() {

	    //this.debug.text('World bodies: ' + this.physics.p2.total, 32, 32);

	}
};
emit = {killCaja: function() { 
	
	if (grupo.getTop()!=null && grupo.getTop().x>200){
			
			cajita=grupo.getBottom();
			
			cajita.kill();
			grupo.remove(cajita);		
			
		}
	}, 
		
		
		actionOnClick1: function() { 
	amarillas++;	
	emit.killCaja();
	
	

}, actionOnClick2: function() { 
	azules++;	
	emit.killCaja();

}, actionOnClick3: function() { 
	rojas++;	
	emit.killCaja();

}	};

