/**
 * Created by Administrator on 2017/10/23.
 */
var errorLayer = cc.Layer.extend({
    ctor:function () {
        //////////////////////////////

        this._super();
        var size = new cc.size(1136, 640);

        errorLog = this.getWidth(errorLog,"",18,600);
        var errorMsg = new cc.LabelTTF(errorLog,"",22);
        errorMsg.x = size.width/2;
        errorMsg.y = size.height/2;
        this.addChild(errorMsg);

        var button = new ccui.Button();
        button.setTitleText("确定");
        button.addClickEventListener(this._buttonHandle.bind(this));
        button.x = size.width/2;
        button.y = 165;

        return true;
    },
    getWidth:function(str,fontName,fontSize,width){
        var totalLong = 0;
        var tmpLabel = cc.LabelTTF.create(str, fontName, fontSize);
        var fontWidth = tmpLabel.getContentSize().width;
        totalLong += fontWidth;

        var length = parseInt(width/fontSize);
        var strList = [];

        while(true){
            if(totalLong<=width){
                strList.push(str);
                break;
            }else{
                var linshiStr = str.substring(0,length);
                str = str.substring(length,str.length);
                strList.push(linshiStr);
                totalLong -= width;
            };
        };

        var newStr = "";
        for(var i=0;i<strList.length;i++){
            newStr = newStr + strList[i] + "\n";
        };

        return newStr;
    },
    _buttonHandle:function(target) {
        cc.sys.restartVM();
    }
});

var errorScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new errorLayer();
        this.addChild(layer);
    }
});