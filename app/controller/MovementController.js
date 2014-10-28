Ext.define('Game.controller.MovementController', {
    extend: 'Ext.app.Controller',
    require: ['Ext.Anim'],

    MAX_LEFT_OFFSET: 50,
    MAX_RIGHT_OFFSET: 250,
    position: {
        LEFT: 'left',
        RIGHT: 'right'
    },
    currentPosition: 'right',

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
        this.changeToLeft();
        this.moveLeft();
    },

    moveLeft: function() {
        var hero = this.getHero().element;
        var ground = this.getGround().element;
        if (hero.getLeft() - 10 > this.MAX_LEFT_OFFSET) {
            hero.setLeft(hero.getLeft() - 10);
        } else {
            ground.setLeft(ground.getLeft() + 10);
        }
    },

    onMoveRight: function() {
        this.changeToRight();
        this.moveRight();
    },

    moveRight: function() {
        var hero = this.getHero().element;
        var ground = this.getGround().element;
        if (hero.getLeft() + 10 < this.MAX_RIGHT_OFFSET) {
            hero.setLeft(hero.getLeft() + 10);
        } else {
            ground.setLeft(ground.getLeft() - 10);
        }
    },

    onMoveUp: function() {
        var hero = this.getHero().element,
            self = this,
            ground = this.getGround().element;

        // if (hero.getTop() > 615) {
        hero.setTop(hero.getTop() - 50);
        Ext.Function.defer(function() {
            hero.setTop(hero.getTop() + 50);
            if (self.currentPosition === self.position.LEFT) {
                if (hero.getLeft() - 10 < this.MAX_RIGHT_OFFSET) {
                    hero.setLeft(hero.getLeft() - 10);
                } else {
                    ground.setLeft(ground.getLeft() + 10);
                }
            } else {
                if (hero.getLeft() + 10 < this.MAX_RIGHT_OFFSET) {
                    hero.setLeft(hero.getLeft() + 10);
                } else {
                    ground.setLeft(ground.getLeft() - 10);
                }
            }
        }, 200);
        // }
    },

    changeToLeft: function() {
        this.currentPosition = this.position.LEFT;
        this.getHero().element.setStyle('-webkit-transform', 'scaleX(-1)');
    },

    changeToRight: function() {
        this.currentPosition = this.position.RIGHT;
        this.getHero().element.setStyle('-webkit-transform', 'scaleX(1)');
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        var self = this;
        window.onkeydown = function(event) {
            switch (event.keyCode) {
                case 39:
                    self.onMoveRight();
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