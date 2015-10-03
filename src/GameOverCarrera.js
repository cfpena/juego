Ball.GameOverCarrera = function(game) {};
Ball.GameOverCarrera.prototype = {

		create: function() {

			this.add.tileSprite(0, 0,800,600, 'screen-gameoverc');
			if (!NaveNueva){
				botonVerde = this.add.button(200, 400, 'botonAtlas', this.irCarreraNueva, this, 'over', 'out', 'down');
				this.add.text(432, 407, 'NaveNueva', { font: '20px Arial', fill: '#ffffff' })
			}else{

			}
			botonRojo = this.add.button(400, 400, 'botonAtlas', this.irCarrera, this, 'over', 'out', 'down');
			this.add.text(432, 407, 'Volver a Jugar', { font: '20px Arial', fill: '#ffffff' })

			botonAmarillo = this.add.button(600, 400, 'botonAtlas', this.irMapa, this, 'over', 'out', 'down');
			this.add.text(632, 407, 'Mapa', { font: '20px Arial', fill: '#ffffff' })

		},
		irCarreraNueva:function(){
			this.game.state.start('Carrera');
			NaveNueva = true;
			EscenarioNave = 2;
		},
		irCarrera :function(){
			this.game.state.start('Carrera');
		},
		irMapa :function(){
			this.game.state.start('Mapa');
		},

};
