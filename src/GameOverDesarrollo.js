Ball.GameOverDesarrollo = function(game) {};
Ball.GameOverDesarrollo.prototype = {

		create: function() {
			
			prestamo = this.add.tileSprite(0, 0,800,600, 'fondo_carrera');

			botonVerde = this.add.button(0, 550, 'botonAtlas', emit3.action1, this, 'over', 'out', 'down');
			botonRojo = this.add.button(200, 550, 'botonAtlas', emit3.action2, this, 'over', 'out', 'down');
			botonAmarillo = this.add.button(400, 550, 'botonAtlas', emit3.action3, this, 'over', 'out', 'down');
			
			
		    

		}};
emit3 = {
	action1 :function(){
		velocidad=20;
		
		this.game.state.start('Desarrollo');
	},
action2 :function(){
	
	this.game.state.start('Desarrollo');
		
		
	},
action3 :function(){
	this.game.state.start('Mapa');
		
	},
		
};

		