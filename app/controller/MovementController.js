Ext.define('Game.controller.MovementController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {

        },
        control: {
            'body': {
                move_left: function() {
                    console.log('dasdadasdasdasdasdasasddasdasdasdas');
                    this.onMoveLeft();
                },
                move_left: 'onMoveLeft'
            },'window': {
                move_left: function() {
                    console.log('dasdadasdasdasdasdasasddasdasdasdas');
                    this.onMoveLeft();
                },
                move_left: 'onMoveLeft'
            },
        },
        listen: {}
    },

    onMoveLeft: function(argument) {
        console.log('lqlqlqlql')
    }
});