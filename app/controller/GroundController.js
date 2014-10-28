Ext.define('Game.controller.GroundController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
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
        this.createObstacle();
    },

    createObstacle: function() {
        var self = this;
        var fire = Ext.create('Ext.Img', {
            src: 'resources/icons/fire.gif',
            height: 30,
            width: 30,
            renderTo: self.getGround().element
        });


    }
});