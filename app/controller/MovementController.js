Ext.define('Game.controller.MovementController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {

        },
        control: {
        },
    },
    onMoveLeft: function() {
        console.log('LEFT')
    },
    onMoveRight: function() {
        console.log('RIGHT')
    },
    onMoveUp: function() {
        console.log('UP')
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var self = this;
        debugger;
        window.onkeydown = function(event) {
            switch (event.keyCode) {
                case 39:
                    self.onMoveRight()
                    break;
                case 38:
                    self.onMoveUp();
                    break;
                case 37:
                    self.onMoveLeft();
                    break;
            }
        }
    }
});