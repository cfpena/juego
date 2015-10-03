Ball.ComoJugarDesarrollo = function(game) {};
Ball.ComoJugarDesarrollo.prototype = {

		create: function() {

			prestamo = this.add.tileSprite(0, 0,800,600, 'ComoJugarDesarrollo');

			this.add.button(330, 480, 'botonAtlas', emit4.action1, this, 'over', 'out', 'down');
			this.add.text(336, 480, 'Empezar', { font: '42px Arial', fill: '#ffffff' })





		}};
emit4 = {
	action1 :function(){


		this.game.state.start('Desarrollo');
	}};
