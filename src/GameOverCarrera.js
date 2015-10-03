Ball.GameOverCarrera = function(game) {};
Ball.GameOverCarrera.prototype = {

		create: function() {

			if (!NaveNueva){
				this.add.tileSprite(0, 0,800,600, 'screen-gameoverrenova');
				botonRojo = this.add.button(400, 400, 'botonAtlas', this.irCarrera, this, 'over', 'out', 'down');
				this.add.text(432, 407, 'Si', { font: '20px Arial', fill: '#ffffff' })

				botonAmarillo = this.add.button(600, 400, 'botonAtlas', this.irMapa, this, 'over', 'out', 'down');
				this.add.text(632, 407, 'No', { font: '20px Arial', fill: '#ffffff' })
			}else{
				this.add.tileSprite(0, 0,800,600, 'screen-gameover2');
				botonRojo = this.add.button(400, 400, 'botonAtlas', this.irCarrera, this, 'over', 'out', 'down');
				this.add.text(432, 407, 'Volver a Jugar', { font: '20px Arial', fill: '#ffffff' })

				botonAmarillo = this.add.button(600, 400, 'botonAtlas', this.irMapa, this, 'over', 'out', 'down');
				this.add.text(632, 407, 'Mapa', { font: '20px Arial', fill: '#ffffff' })
			}

		},
		irCarrera :function(){
			this.game.state.start('Carrera');
			NaveNueva = true;
			EscenarioNave = 2;
		},
		irMapa :function(){
			this.game.state.start('Mapa');
		},

};
