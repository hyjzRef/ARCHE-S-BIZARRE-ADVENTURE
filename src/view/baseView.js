/**
 * Created by Administrator on 2017/10/22.
 */
app.view.baseView = cc.Layer.extend({
    ctor : function(){
        this._super();
        this._frames = [];
    },

    onEnter : function(){
        this._super();
        if(this.onShow) {this.onShow();}
        if(this._frames.length != 0){
            for(var i = 0; i < this._frames.length; i++){
                cc.spriteFrameCache.addSpriteFrames(this._frames[i]);
            }
        }
    },

    onExit : function(){
        if(this.onClose) {this.onClose();}
        if(this._frames.length != 0){
            for(var i = 0; i < this._frames.length; i++){
                cc.spriteFrameCache.removeSpriteFramesFromFile(this._frames[i]);
            }
        }
        this._super();
    }
});