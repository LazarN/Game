Ext.define('Game.view.InitialView', {
	extend: 'Ext.tab.Panel',
	xtype:'initialscreen',
	layout:'border',
	items:[{
		region:'north',
		xtype:'topbar'
	},{
		region:'center',
		xtype:'mainscreen'
	},{
		region:'south',
		xtype:'ground'
	}]

});