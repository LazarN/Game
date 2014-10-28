Ext.define('Game.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar'
    ],
    config: {

        items: [{
            xtype: 'topbar',
            docked: 'top',
        }, {
            xtype: 'panel',
            title: 'MyGame',
            iconCls: 'home',
            cls: 'main',
            // The divs and css for the clouds
            html: '<div id="clouds"><div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div>',
        }, {
            docked: 'bottom',
            xtype: 'ground',
        }, {
            docked: 'bottom',
            xtype: 'image',
            itemId: 'myHero',
            src: 'resources/icons/hero-rolling.gif',
            cls: 'charcater',
        }]
    }
});