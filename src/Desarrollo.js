Ball.Desarrollo = function(game) {};
Ball.Desarrollo.prototype = {

		create: function() {
			
		this.game.physics.setBoundsToWorld();

	    this.physics.startSystem(Phaser.Physics.P2JS);
	    this.physics.p2.restitution = 0.0;

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fondo_carrera');
	    starfield.fixedToCamera = true;
	    
	    
	    this.physics.p2.gravity.y = 300;
	    //barra= this.add.sprite(0, 125, 'panel');
	    grupo =this.add.group();

	    time=0;
	    cajasPerdidas=0;
	    verde=0;
	    rojo=0;
	    amarillo=0;
	    azul=0;
	    
		tiempo=this.add.text(64, 10, 'Tiempo: '+ time, { font: '16px Arial', fill: '#ffffff' })


		botonVerde = this.add.sprite(42,600-95, 'block');
		botonRojo = this.add.sprite(200+42, 600-95, 'block');
		botonAnarillo = this.add.sprite(400+42, 600-95, 'block');
		botonAzul = this.add.sprite(600+42, 600-95, 'block');
		
		perdidos=this.add.text(200, 10, 'Perdidos: '+ time, { font: '16px Arial', fill: '#ffffff' })
		verdeText=this.add.text(100, 600-95, verde, { font: '42px Arial', fill: '#000000' })
		rojoText=this.add.text(300, 600-95,  rojo, { font: '42px Arial', fill: '#000000' })
		amarilloText=this.add.text(500, 600-95, amarillo, { font: '42px Arial', fill: '#000000' })
		azulText=this.add.text(700, 600-95, azul, { font: '42px Arial', fill: '#000000' })
		
		
		q = this.input.keyboard.addKey(Phaser.Keyboard.Q);
		w = this.input.keyboard.addKey(Phaser.Keyboard.W);
		o = this.input.keyboard.addKey(Phaser.Keyboard.O);
		p = this.input.keyboard.addKey(Phaser.Keyboard.P);
		
		q.onDown.add(emit.actionOnClick1, this);
		w.onDown.add(emit.actionOnClick2, this);
		o.onDown.add(emit.actionOnClick3, this);
		p.onDown.add(emit.actionOnClick4, this);
		
	    
	    
		

	},

	update:function() {
		
			time++;
			tiempo.setText("tiempo:  " + Math.round(time/60));
			perdidos.setText("Perdidos:  " + cajasPerdidas);
			amarilloText.setText(amarillo);
			azulText.setText(azul);
			rojoText.setText(rojo);
			verdeText.setText(verde);

			
			if(time%velocidad==2){
				
				
				
				numero=Math.floor((Math.random() * 4) + 1);
				caja=this.add.sprite(numero*100+((numero-1)*100), 0, 'nave-'+numero);
				caja.name=String(numero);
			    this.physics.p2.enable(caja);
			    grupo.add(caja);		
			    caja.bringToTop();
				caja.body.moveRight(1);

			}
			
			if (grupo.getTop()!=null && grupo.getBottom().body.y>=580){
				
				cajita=grupo.getBottom();
				cajasPerdidas++;	
				cajita.kill();
				grupo.remove(cajita);		
				
			}
			if (time>1800){
				//this.gameOver();
				this.game.state.start('GameOverDesarrollo');
			}
			
			
			
			
		
		
		
		
		

			
		},
		
		
		

		
		

	render: function() {

	    //this.debug.text('World bodies: ' + this.physics.p2.total, 32, 32);

	}
};
emit = {	
		
		actionOnClick1: function() { 
			if (grupo.getBottom()!=null && grupo.getBottom().x>0 && grupo.getBottom().x<200 && grupo.getBottom().y>600-95-50){
				
				cajita=grupo.getBottom();
				verde++;
				cajita.kill();
				grupo.remove(cajita);		
				
			}
	
	

}, actionOnClick2: function() { 
	
	
	if (grupo.getTop()!=null && grupo.getBottom().x>200 && grupo.getBottom().x<400 && grupo.getBottom().y>600-95-50){
		
		cajita=grupo.getBottom();
		rojo++;
		cajita.kill();
		grupo.remove(cajita);		
		
	}
	

}, actionOnClick3: function() { 
if (grupo.getTop()!=null && grupo.getBottom().x>400 && grupo.getBottom().x<600 && grupo.getBottom().y>600-95-50){
		
		cajita=grupo.getBottom();
		amarillo++;
		cajita.kill();
		grupo.remove(cajita);		
		
}},
	 actionOnClick4: function() { 
		 if (grupo.getTop()!=null && grupo.getBottom().x>600 && grupo.getBottom().x<800 && grupo.getBottom().y>600-95-50){
		 		
		 		cajita=grupo.getBottom();
		 		azul++;
		 		cajita.kill();
		 		grupo.remove(cajita);		
		 		
		 	}}


	
	};

