/**
 * Created by Administrator on 2017/10/28.
 */
app.object.Player = cc.Node.extend({
    _sprite : null,
    _xPos : 0,
    _yPos : 0,
    _Velocity1 : 2,
    _Velocity2 : 4,

    fsmMachine : null,

    animationCtrl : null,

    dataCtrl : null,
    ctor : function (root) {
        this.root = root
        this._init();
        cc.log("Player: All init complete!");
    },

    _init : function () {
        game.MsgMng.addListener(MsgTypeEnum.User_Input, this._onEvent.bind(this));

        this._sprite = new cc.Sprite();
        // cc.director.getRunningScene().addChild(this._sprite);
        this.root.addChild(this._sprite);
        this._sprite.attr({
            x:568,
            y:320,
            anchorX:0.5,
            anchorY:0,
            scaleX:1.5,
            scaleY:1.5,
        });

        this.fsmMachine = new app.stateMachine.FSMMachine(this);
        this.fsmMachine.changeState(app.stateMachine.StateID.IDLE);
        cc.log("Player: FSMMachine init complete!");

        this.animCtrl = new app.animation.AnimCtrl(this);
        this.animCtrl.changeFrame(app.stateMachine.StateID.IDLE);
        cc.log("Player: AnimationCtrl init complete!");

        // TODO 暂时野着用
        //this.scheduleUpdate();
    },

    setPlayerData : function () {
        if(arguments.length <= 0){ return ;}
        var ids = app.stateMachine.StateID;
        var sprite = this._sprite;
        var velocity = arguments[1] ? this._Velocity2 : this._Velocity1;
        switch(this.fsmMachine.getCurrentStateID()){
            case ids.IDLE:
                break;
            case ids.WALK:
                if(arguments[0].x != 0){
                    sprite.setFlippedX(arguments[0].x < 0);
                }
                sprite.x += arguments[0].x * velocity;
                break;
            case ids.RUN:
                if(arguments[0].x != 0){
                    sprite.setFlippedX(arguments[0].x < 0);
                }
                sprite.x += arguments[0].x * velocity;
                break;
            case ids.JUMP:
                break;
        }

    },

    update : function() {

        this.fsmMachine.onUpdate();
    },

    getAnimationCtrl : function () {
        return this.animCtrl;
    },

    _onEvent : function (msg) {
        var args = msg.getArgs();
        switch(msg.getType()){
            case MsgTypeEnum.User_Input:
                this._onUserInput(args);
                break;
            default:break;
        }
    },

    _onUserInput : function (args) {
        var posInfo = args[0];
        var isSpeed2 = args[1];
        if(posInfo.x != 0 && posInfo.y != 0){
            // game.MsgMng.dispatch(MsgTypeEnum.None);
            cc.log("疯狂收到输入");
        }

        this.fsmMachine.getCurrentState().handleInput(posInfo, isSpeed2);
        this.setPlayerData(posInfo, isSpeed2);
    },

});