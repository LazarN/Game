Ext.define('Game.controller.CharacterController', {
	extend: 'Ext.app.Controller',
	views: [
		'Game.view.Hero'
	],
	refs: [{
		ref: 'main',
		selector: 'main'
	}],

	init: function() {
		this.control({
			'main #myHero': {
				tap: this.onHeroClick
			}
		})
	},

	onHeroClick: function(){
		alert('hero clicked');
		console.log('clicked');
	}
});