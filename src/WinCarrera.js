Ball.WinCarrera = function(game) {};
Ball.WinCarrera.prototype = {

	create: function() {

		this.add.tileSprite(0, 0,800,600, 'HasGanadoCarrera');
		this.add.button(330, 480, 'botonAtlas', this.IrMapa, this, 'over', 'out', 'down');
		this.add.text(336, 480, 'IrMapa', { font: '42px Arial', fill: '#ffffff' })

	},
	IrMapa :function(){
		this.game.state.start('Mapa');
	}
};
