Ext.define('Game.controller.ScoreController', {
    extend: 'Ext.app.Controller',
    
    COIN_VALUE: 100,

    config: {
        refs: {
            score: {
                selector: '#scoreView',
                xtype: 'numberfield'
            }
        },
        control: {
            "image#coin": {
                coin_collected: 'onCoinCollected'
            }
        }
    },

    onCoinCollected: function(coinView) {
        var score = this.getScore();
        coinView.hide();
        score.setValue(score.getValue() + this.COIN_VALUE);
    },
});