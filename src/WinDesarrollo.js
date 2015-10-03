Ball.WinDesarrollo = function(game) {};
Ball.WinDesarrollo.prototype = {

		create: function() {

			prestamo = this.add.tileSprite(0, 0,800,600, 'fondo_carrera');
			this.add.text(30, 30, '           HAS GANADO\n Derrotaste a Malena, pero aun puedes seguir produciendo,\n quieres seguir?', { font: '42px Arial', fill: '#ffffff' })

			

			botonRojo = this.add.button(400, 400, 'botonAtlas', emit3.action2, this, 'over', 'out', 'down');
			this.add.text(432, 407, 'Seguir', { font: '42px Arial', fill: '#ffffff' })


			botonAmarillo = this.add.button(600, 400, 'botonAtlas', emit3.action3, this, 'over', 'out', 'down');
			this.add.text(632, 407, 'Mapa', { font: '42px Arial', fill: '#ffffff' })








		}};
emit2 = {
	action1 :function(){


		this.game.state.start('Desarrollo');
	},
action2 :function(){

	this.game.state.start('Mapa');
	}
};
