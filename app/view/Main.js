Ext.define('Game.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar'
    ],
    config: {

        items: [{
            xtype:'topbar',
            docked:'top',
        },{
            xtype: 'panel',
            title: 'MyGame',
            // region: 'center',
            // flex: 8,
            iconCls: 'home',
            cls: 'main',
            // The divs and css for the clouds
            html: '<div id="clouds"><div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div>',
            items: [{
                xtype: 'image',
                itemId: 'myHero',
                src: 'resources/icons/hero-rolling.gif',
                widht: 50,
                height: 70,
                cls: 'charcater',
            }, ]
        }, {
            docked: 'bottom',
            xtype: 'ground',
            // region: 'south',
            // flex: 2
        }]
    }
});