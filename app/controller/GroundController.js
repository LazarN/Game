Ext.define('Game.controller.GroundController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: {
                selector: 'main',
                xtype: 'main'
            },
            ground: {
                selector: '#myGround',
                xtype: 'ground'
            }
        },
        control: {

        }
    },

    // Here we will create obstacles
    launch: function(app) {
        this.createObstacles();
        this.createCoins();
        this.createFlag();
        this.createCrow();
    },

    createObstacles: function() {
        var self = this;
        for (var i = 15 - 1; i >= 0; i--) {
            var position = (Math.random() * 4500) + 200;
            Ext.create('Ext.Img', {
                src: 'resources/icons/fire.gif',
                height: 30,
                width: 30,
                left: position,
                cls: 'obstacle',
                renderTo: self.getGround().element
            });
        };
    },

    createCoins: function() {
        var self = this;
        for (var i = 15 - 1; i >= 0; i--) {
            var position = (Math.random() * 4500) + 200;
            Ext.create('Ext.Img', {
                src: 'resources/icons/coin.gif',
                height: 30,
                width: 30,
                left: position,
                cls: 'coin',
                renderTo: self.getGround().element
            });
        };
    },

    createFlag: function() {
        var self = this;
        Ext.create('Ext.Img', {
            src: 'resources/icons/finish.gif',
            height: 30,
            width: 30,
            left: 4800,
            cls: 'obstacle',
            renderTo: self.getGround().element
        });
    },

    createCrow: function() {
        var self = this;
        Ext.create('Ext.Img', {
            src: 'resources/icons/crowd.jpg',
            height: 70,
            width: 500,
            left: 5100,
            cls: 'crowd',
            renderTo: self.getGround().element
        });
    }
});