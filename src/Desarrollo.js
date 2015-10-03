Ball.Desarrollo = function(game) {};
Ball.Desarrollo.prototype = {

		create: function() {

		this.game.physics.setBoundsToWorld();

	    this.physics.startSystem(Phaser.Physics.P2JS);
	    this.physics.p2.restitution = 0.0;

	    starfield = this.add.tileSprite(0, 0, 800, 600, 'fabrica');
	    starfield.fixedToCamera = true;
	    



	    this.physics.p2.gravity.y = 300;
	    //barra= this.add.sprite(0, 125, 'panel');
	    grupo =this.add.group();
	    this.world.bringToTop(grupo);

	    time=0;
	    cajasPerdidas=0;
	    verde=0;
	    rojo=0;
	    amarillo=0;
	    azul=0;
	    suma=0;

		tiempo=this.add.text(350, 10, 'Tiempo: '+ time, { font: '24px Arial', fill: '#ffffff' })
		recoleccion=this.add.text(630, 10, 'Recoleccion: '+ suma, { font: '24px Arial', fill: '#ffffff' })


		



		perdidos=this.add.text(480, 10, 'Perdidos: '+ time, { font: '24px Arial', fill: '#ffffff' })
		verdeText=this.add.text(140, 600-70, verde, { font: '42px Arial', fill: '#000000' })
		rojoText=this.add.text(310, 600-70,  rojo, { font: '42px Arial', fill: '#000000' })
		amarilloText=this.add.text(470, 600-70, amarillo, { font: '42px Arial', fill: '#000000' })
		azulText=this.add.text(630, 600-70, azul, { font: '42px Arial', fill: '#000000' })


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
			suma=amarillo+azul+rojo+verde;
			time++;
			tiempo.setText("tiempo:  " + Math.round(time/60));
			tiempo.bringToTop();
			perdidos.setText("Perdidos:  " + cajasPerdidas);
			recoleccion.setText("Recoleccion: " + suma);
			recoleccion.bringToTop();
			perdidos.bringToTop();
			amarilloText.setText(amarillo);
			azulText.setText(azul);
			rojoText.setText(rojo);
			verdeText.setText(verde);



			if (suma>=60) {
				this.game.state.start('WinDesarrollo');
			}


			if(time%velocidad==2){



				numero=Math.floor((Math.random() * 4) + 1);
				numeroCaja=Math.floor((Math.random() * 3) + 1);
				pix=0;
				if(numero==1)pix=140;
				else if (numero==2) pix=310;
				else if (numero==3) pix=470;
				else if (numero==4) pix=630;

				caja=this.add.sprite(pix, 0, 'robot'+numeroCaja);
				caja.scale.set(0.3,0.3 );
				caja.name=String(numero);
			    this.physics.p2.enable(caja);

			    grupo.add(caja);
			    this.world.bringToTop(grupo);



			}

			if (grupo.getTop()!=null && grupo.getBottom().body.y>=600-40){

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
