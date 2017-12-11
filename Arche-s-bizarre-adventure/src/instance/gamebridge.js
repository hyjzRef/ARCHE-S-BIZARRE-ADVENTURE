app.common.GameBridge = cc.Class.extend({
    ctor : function(){
        cc.log("Init app.common.GameBridge");
    },

    gotoLogoScene : function(){
        cc.log("---------- Goto LogoScene!")
        cc.director.runScene(new app.view.LogoScene());
    },

    gotoTestScene : function(){
        cc.log("---------- Goto TestScene!")
        cc.director.runScene(new app.view.TestScene());
    },
});