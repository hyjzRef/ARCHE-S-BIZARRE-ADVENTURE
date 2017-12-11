/**
 * Created by Administrator on 2017/10/20.
 */
if(!game){
    var game = {};
}else{
    throw new Error("repeat load gameinstance!");
}

game.LogoCtrl = app.controller.LogoCtrl;
game.GameBridge = new app.common.GameBridge();
game.player = null;
game.userInput = null;
game.MsgMng = new app.message.MsgMng();