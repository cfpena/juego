Ball.Howto = function(game) {
};
Ball.Howto.prototype = {
	create: function() {
		this.buttonContinue = this.add.button(0, 0, 'intro', this.startGame, this);
		index = 0; 
		line = "";
		dialogo = [
		   		'',
		   		'en un futuro cercano, una malvada empresaria \nllamada Malena desea apoderarse de la galaxia, \nsin embargo una valiente joven de nombre\n Valentina hace todo lo posible por restaurar \nel orden en su galaxia. \nPero ella no cuenta con los\nrecursos suficientes para enfrentar a Malena, \nsin embargo la galaxia cuenta\ncon un apoyo incondicional de una empresa\n llamada CFN... \nTodo dependera de sus buenas decisiones.'
		   		];
			dialogoAnim = this.game.add.bitmapText(10,0,'future-earth');
	     dialogoAnim.scale.setTo(0.38,0.38);
	     this.nextLine();
		
		
	},
	startGame: function() {
		this.game.state.start('Mapa');
	},
	update: function() {
		
	     var tStep = Math.sin( counter ) ;






	    counter += step ;

   },

	updateLine: function(){
		if (line.length < dialogo[index].length)
   		{
       		line = dialogo[index].substr(0, line.length + 1);
       		dialogoAnim.text = line;
   		}
   	else
   		{
       		this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
   		}
	},

	nextLine: function() {

   	index++;

   	if (index < dialogo.length)
  	 	{
       	line = '';
       	this.time.events.repeat(80, dialogo[index].length + 1, this.updateLine, this);
   	}else{
   		ayuda.visible=false;
   	}

	}};
