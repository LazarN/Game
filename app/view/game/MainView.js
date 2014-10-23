Ext.define('Game.view.game.MainView', {
	extend: 'Ext.Container',
	xtype:'mainscreen',
	layout:'fit',
	items:[{
		xtype:'container',
		html: '<div id="clouds"><div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div>'
	}]
});