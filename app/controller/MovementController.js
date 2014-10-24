Ext.define('Game.controller.MovementController', {
    extend: 'Ext.app.Controller',

    MAX_LEFT_OFFSET: 50,
    MAX_RIGHT_OFFSET: 150,
    config: {
        refs: {
            hero: {
                selector: '#myHero',
                xtype: 'image',
                autoCreate: true
            }
        },
        control: {},
    },
    onMoveLeft: function() {
        this.changeToRollingImg();
        var hero = this.getHero().element;
        if (hero.getLeft() - 10 > this.MAX_LEFT_OFFSET) {
            hero.setLeft(hero.getLeft() - 10);
        }
        this.changeToNormalImg();
    },
    onMoveRight: function() {
        this.changeToRollingImg();
        var hero = this.getHero().element;
        if (hero.getLeft() + 10 < this.MAX_RIGHT_OFFSET) {
            hero.setLeft(hero.getLeft() + 10);
        }
        this.changeToNormalImg();
    },
    onMoveUp: function() {
        var hero = this.getHero().element;
        hero.setTop(hero.getTop() - 50);

        // Ext.create('Ext.fx.Anim', {
        //     target: hero,
        //     duration: 1000,
        //     from: {
        //         top: hero.getTop()
        //     },
        //     to: {
        //         top: hero.getTop() + 50
        //     }
        // });
debugger;

        hero.setTop(hero.getTop() - 50);
    },

    changeToRollingImg: function() {
        this.getHero().setSrc('resources/icons/hero-rolling.gif');
    },

    changeToNormalImg: function() {
        this.getHero().setSrc('resources/icons/hero.png');
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var self = this;
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