Ball.WinDesarrollo = function(game) {};
Ball.WinDesarrollo.prototype = {

		create: function() {

			prestamo = this.add.tileSprite(0, 0,800,600, 'fondo_carrera');

			botonVerde = this.add.button(0, 550, 'botonAtlas', emit2.action1, this, 'over', 'out', 'down');
			botonRojo = this.add.button(200, 550, 'botonAtlas', emit2.action2, this, 'over', 'out', 'down');

		}};
emit2 = {
	action1 :function(){


		this.game.state.start('Desarrollo');
	},
action2 :function(){

	this.game.state.start('Mapa');
	}
};
