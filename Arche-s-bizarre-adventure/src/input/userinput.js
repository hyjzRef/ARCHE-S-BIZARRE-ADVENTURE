/**
 * Created by Administrator on 2017/11/1.
 */
app.userInput = cc.Class.extend({
    owner : null,
    inputData : {},
    ctor : function(){
        this.joystickInput = new Joystick(res.joystick_bg, res.joystick, 50, TouchType.DEFAULT, DirectionType.ALL, null);
        this.initJoystick();
    },

    initJoystick : function(){
        var joystick = this.joystickInput;
        joystick.setPosition(cc.p(150, 150));
        joystick.setOpacity(86);
        //joystick.setEnable(true);
        joystick.callback = function(posInfo, isSpeed2){
            game.MsgMng.dispatch(MsgTypeEnum.User_Input, [posInfo, isSpeed2]);
        };
        cc.director.getRunningScene().addChild(joystick, 0, 101);
    },

    getInputData : function () {
        return this.inputData;
    }
});