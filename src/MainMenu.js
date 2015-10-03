Ball.MainMenu = function(game) {};
Ball.MainMenu.prototype = {
	create: function() {
		this.add.sprite(0, 0, 'back');
		this.gameTitle = this.add.sprite(400, 50, 'title');
		this.gameTitle.scale.set(1.3,1.1 );
		this.gameTitle.alpha = 0;
		this.gameTitle.anchor.set(0.5,0);
		tween = this.game.add.tween(this.gameTitle).to( { alpha: 1 }, 2000, "Linear", true);

		this.startButton = this.add.button(400, 400, 'button-start', this.startGame, this, 2, 0, 1);
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
