Ext.define('Game.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar'
    ],
    config: {

        items: [{
            title: 'MyGame',
            iconCls: 'home',
            height: 1000,
            cls: 'main',
            html: '<div id="clouds"><div class="cloud x1"></div><div class="cloud x2"></div><div class="cloud x3"></div><div class="cloud x4"></div><div class="cloud x5"></div>',
            items: [{
                xtype: 'image',
                itemId: 'myHero',
                src: 'resources/css/hero.png',
                widht: 50,
                height: 70,
                cls: 'charcater',
            }, ]
        }, {
            docked: 'bottom',
            xtype: 'ground'
        }]
    },

    listeners: {
        click: {
            fn: function() {
                console.log("Tapped on this panel");
            }
        }
    }
});