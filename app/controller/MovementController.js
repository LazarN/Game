Ext.define('Game.controller.MovementController', {
    extend: 'Ext.app.Controller',
    require: ['Ext.Anim'],

    MAX_LEFT_OFFSET: 50,
    MAX_RIGHT_OFFSET: 250,
    config: {
        refs: {
            hero: {
                selector: '#myHero',
                xtype: 'image',
                autoCreate: true
            },
            ground: {
                selector: '#myGround',
                xtype: 'ground'
            }
        },
        control: {},
    },
    onMoveLeft: function() {
        this.changeToRollingImg();
        var hero = this.getHero().element;
        var ground = this.getGround().element;
        if (hero.getLeft() - 10 > this.MAX_LEFT_OFFSET) {
            hero.setLeft(hero.getLeft() - 10);
        } else {
            ground.setLeft(ground.getLeft() + 10);
        }
        this.changeToNormalImg();
    },

    onMoveRight: function() {
        this.changeToRollingImg();
        var hero = this.getHero().element;
        var ground = this.getGround().element;
        if (hero.getLeft() + 10 < this.MAX_RIGHT_OFFSET) {
            hero.setLeft(hero.getLeft() + 10);
        } else {
            console.log(ground.getLeft());
            ground.setLeft(ground.getLeft() - 10);
        }
        this.changeToNormalImg();
    },

    onMoveUp: function() {
        var hero = this.getHero().element;
        hero.setTop(hero.getTop() - 50);

        // anim = Ext.create('Ext.Anim', {
        //     autoClear: false,
        //     from: {
        //         'left': hero.getTop()
        //     },
        //     to: {
        //         'left': hero.getTop() - 50
        //     },
        //     delay: 1000,
        //     duration: 1000
        // });

        Ext.Function.defer(function() {
            hero.setTop(hero.getTop() + 50);
        }, 200);

        // anim.run(hero);
    },

    changeToRollingImg: function() {
        this.getHero().setSrc('resources/icons/hero-rolling.gif');
    },

    changeToNormalImg: function() {
        this.getHero().setSrc('resources/icons/hero-rolling.gif');
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