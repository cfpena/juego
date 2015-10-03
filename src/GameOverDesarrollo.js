Ball.GameOverDesarrollo = function(game) {};
Ball.GameOverDesarrollo.prototype = {

		create: function() {

			;

			if (!prestamoDesarrollo){
				prestamo = this.add.tileSprite(0, 0,800,600, 'screen-gameover')


				botonVerde = this.add.button(200, 400, 'botonAtlas', emit3.action1, this, 'over', 'out', 'down');
				this.add.text(207, 407, 'Prestamo', { font: '42px Arial', fill: '#ffffff' })


			}
			else{
				prestamo = this.add.tileSprite(0, 0,800,600, 'screen-gameover2')


			}

			botonRojo = this.add.button(400, 400, 'botonAtlas', emit3.action2, this, 'over', 'out', 'down');
			this.add.text(432, 407, 'Seguir', { font: '42px Arial', fill: '#ffffff' })

			botonAmarillo = this.add.button(600, 400, 'botonAtlas', emit3.action3, this, 'over', 'out', 'down');
			this.add.text(632, 407, 'Mapa', { font: '42px Arial', fill: '#ffffff' })




		}};
emit3 = {
	action1 :function(){
		velocidad=20;
		prestamoDesarrollo=true;
		this.game.state.start('Desarrollo');
	},
action2 :function(){

	this.game.state.start('Desarrollo');


	},
action3 :function(){
	this.game.state.start('Mapa');

	},

};
