Ball.GameOverDesarrollo = function(game) {};
Ball.GameOverDesarrollo.prototype = {

		create: function() {
			
			prestamo = this.add.tileSprite(0, 0,800,600, 'fondo_carrera');

			botonVerde = this.add.button(0, 550, 'botonAtlas', emit2.action1, this, 'over', 'out', 'down');
			botonRojo = this.add.button(200, 550, 'botonAtlas', emit.seguir, this, 'over', 'out', 'down');
			botonAmarillo = this.add.button(400, 550, 'botonAtlas', emit.menu, this, 'over', 'out', 'down');
			
			
		    

		}};
emit2 = {
	action1 :function(){
		velocidad=20;
		
		this.game.state.start('Desarrollo');
	},
action2 :function(){
		
		
	},
action3 :function(){
		
		
	},
		
};

		