Ext.define('Game.view.TopBar', {
	extend: 'Ext.Panel',
	xtype: 'topbar',
	cls: 'top-bar',
	height: 50,
	config: {
		layout: {
			type: 'hbox',
			align: 'start',
			pack: 'start'
		},
		items: [{
			xtype: 'numberfield',
			itemId: 'scoreView',
			label: 'Score: ',
			value: 0,
			cls: 'top-number-field',
			readOnly: true,
			labelCls: 'top-label',
			fieldCls: 'top-label',
			name: 'score',
			flex: 4
		}, {
			xtype: 'image',
			src: 'resources/icons/heart-icon.png',
			cls: 'heart-image',
			flex: 1,
		}, {
			xtype: 'label',
			html: '3',
			cls: 'red-label',
			flex: 1,
			margin: 12
		}]
	}
});