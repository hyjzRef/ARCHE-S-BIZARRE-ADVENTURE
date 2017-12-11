/**
 * Created by Administrator on 2017/10/22.
 */
app.view.TestScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new app.view.TestLayer();
        this.addChild(layer);
    }
});
app.view.TestLayer = app.view.baseView.extend({
    ctor : function(){
        this._super();
        this.index = 1;
        game.MsgMng.addListener(MsgTypeEnum.None, this.onPlayerMove.bind(this));
    },

    onShow : function(){
        this._frames.push(res.monster_lmmm_plist);
        this._frames.push(res.arche_normal_plist);
    },

    onEnter:function(){
        cc.log("----Enter TestLayer----")
        this._super();
        this._loudUi();
        this.scheduleUpdate();
    },

    _loudUi : function(){
        var widgetInfo = cc.loadCsbEx(res.ccs_test_testLayer, "res/");
        var widget = widgetInfo.node;
        this.addChild(widget);

        var map = new cc.TMXTiledMap(res.maps_test1_tmx);
        this.addChild(map);
        var _layer = map.getLayer("layer1");
        var _size  = cc.size(
            map.getMapSize().width * map.getTileSize().width,
            map.getMapSize().height * map.getTileSize().height
        );

        var bg_sky = Utils.seekWidgetByName(widget, "bg_sky");
        bg_sky.attr({
            width:_size.width,
            height:_size.height
        });
        var bg_1 = Utils.seekWidgetByName(widget, "bg_1");
        bg_1.attr({
            width:_size.width,
            height:_size.height
        });
        var bg_2 = Utils.seekWidgetByName(widget, "bg_2");
        bg_2.attr({
            width:_size.width,
            height:_size.height
        });
        cc.log("layer:",_layer);
        cc.log("mapSize:",map.getMapSize());
        cc.log("tileSize:",map.getTileSize());

        var arche = new app.object.Player(this);
        arche._sprite._camera = new cc.Camera();
        this._camera = arche._sprite._camera;
        game.player = arche;
        var sp = arche._sprite;
        this.runAction(new cc.Follow(sp, cc.rect(0, 0, _size.width, _size.height)));


        var userInput = new app.userInput();
        game.userInput = userInput;

    },

    update : function (dt) {
        if(!game.player) return;
    },

    onPlayerMove : function () {
        cc.log("---------- Player moved %d steps", this.index);
        this.index++;
    }
});