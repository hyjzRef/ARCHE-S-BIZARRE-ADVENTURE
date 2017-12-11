
app.view.LogoScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new app.view.LogoLayer();
        this.addChild(layer);
    }
});

app.view.LogoLayer = cc.Layer.extend({
    ctor : function(){
        this._super();
    },

    onEnter:function(){
        cc.log("----Enter LogoLayer----")
        this._super();
        this._loudUi();
    },

    _loudUi : function(){
        var widgetInfo = cc.loadCsbEx(res.ccs_logo_logoLayer, "res/");
        var widget = widgetInfo.node;
        this.addChild(widget);
        /*
        var txt = new cc.LabelTTF("dsada为倒萨大","res/resources/font2.ttf");
        txt.attr({
            x: 568 +200 ,
            y: 360,
        });
        this.addChild(txt);
        */
        // 加载背景
        var bg = app.helper.seekWidgetByName(widget, "bg");
        bg.loadTexture("res/resources/logobg.jpg");
        bg.setVisible(false);

        // 加载开始
        var startBtn = app.helper.seekWidgetByName(widget, "btn_start");
        startBtn.addClickEventListener(this.onStartGame.bind(this));
        // 加载继续
        var continueBtn = app.helper.seekWidgetByName(widget, "btn_continue");
        continueBtn.addClickEventListener(this.onContinueGame.bind(this));
        // 加载测试
        var testBtn = app.helper.seekWidgetByName(widget, "btn_test");
        testBtn.addClickEventListener(this.onTestGame.bind(this));

        /*
        // 动画帧测试
        var sprite = new cc.Sprite();
        var animation = new cc.Animation();
        for(var i = 1; i < 10; i++){
            var file = "lmmm_" + i + ".png";
            cc.log(file);
            var frame = cc.spriteFrameCache.getSpriteFrame(file);
            if(frame){
                cc.log("true");
                animation.addSpriteFrame(frame);
            }
        }
        animation.setDelayPerUnit(1/14);
        animation.setLoops(5);
        var action = cc.animate(animation);
        sprite.runAction(cc.repeatForever(action));
        sprite.attr({
            x: bg.x,
            y: bg.y,
        });
        this.addChild(sprite);

        // 主角测试
        var sprite2 = new cc.Sprite();
        var animation2 = new cc.Animation();
        for(var i = 7; i < 15; i++){
            var file = "arche_normal_" + i + ".png";
            cc.log(file);
            var frame = cc.spriteFrameCache.getSpriteFrame(file);
            if(frame){
                animation2.addSpriteFrame(frame);
            }
        }
        animation2.setDelayPerUnit(1/13);
        var action2 = cc.animate(animation2);
        sprite2.runAction(cc.repeatForever(action2));
        sprite2.attr({
            x: bg.x + 100,
            y: bg.y,
        });
        this.addChild(sprite2);
        */
    },

    onStartGame : function(){
        
    },

    onContinueGame : function(){

    },

    onTestGame : function () {
        game.GameBridge.gotoTestScene();
    },

    onExit : function(){

    }
});
