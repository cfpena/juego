Ball.ComoJugarCarrera = function(game) {};
Ball.ComoJugarCarrera.prototype = {

	create: function() {

		this.add.button(330, 480, 'botonAtlas', this.IrCarrera, this, 'over', 'out', 'down');
		this.add.text(336, 480, 'Empezar', { font: '42px Arial', fill: '#ffffff' })

	},
	IrCarrera :function(){
		this.game.state.start('Carrera');
	}
};
