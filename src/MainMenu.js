Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {
		this.add.sprite(0, 0, 'fondo2');
		this.gameTitle = this.add.sprite(Ball._WIDTH*0.5, 40, 'title');
		this.gameTitle.alpha = 0;
		this.gameTitle.anchor.set(0.5,0);
		tween = this.game.add.tween(this.gameTitle).to( { alpha: 1 }, 2000, "Linear", true);

		this.startButton = this.add.button(Ball._WIDTH*0.5, 200, 'button-start', this.startGame, this, 2, 0, 1);
		this.startButton.anchor.set(0.5,0);
		this.startButton.alpha = 0;
		this.startButton.input.useHandCursor = true;
		tween = this.game.add.tween(this.startButton).to( { alpha: 1 }, 2000, "Linear", true);
		// button to "read the article"
	},
	startGame: function() {
		this.game.state.start('Howto');
	}
};