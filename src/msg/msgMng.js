/**
 * Created by Administrator on 2017/11/8.
 */
app.message.MsgMng = cc.Class.extend({
    //主字典{ id : { msgType : [onCallBack] } }
    _mainDic:{},
    ctor : function(){
        this._addListener(11,MsgTypeEnum.None, this.onTestCall.bind(this));
        this._addListener(12,MsgTypeEnum.None, this.onTestCall.bind(this));
        this._addListener(13,MsgTypeEnum.None, this.onTestCall.bind(this));
        this._removeListenerById(11);
        this._removeListenerAll();
    },

    onTestCall : function () {
        cc.log("调用%d成功",11);
    },

    /**
     * 添加监听器
     * @param id 唯一标识
     * @param msgType 消息类型
     * @param callBack 回调函数
     * @private
     */
    _addListener : function (id, msgType, callback) {
        if(!this._mainDic.hasOwnProperty(id)) {
            this._mainDic[id] = {};
        }
        if(!this._mainDic[id].hasOwnProperty(msgType)){
            this._mainDic[id][msgType] = [];
        }
        if(this._mainDic[id][msgType].length != 0){
            throw new Error("MsgError: listener already register", id, msgType);
            return;
        }
        this._mainDic[id][msgType].push(callback);
        cc.log("注册成功，id = %d",id);
    },

    /**
     * 派发消息
     * @param id 唯一标识
     * @param msgType 消息类型
     * @param args 参数
     * @private
     */
    _dispatch : function (id, msgType, args) {
        if(!this._mainDic.hasOwnProperty(id) || !this._mainDic[id].hasOwnProperty(msgType)){
            return;
        }
        var actionList = this._mainDic[id][msgType];
        for(var index = actionList.length; index >= 0; --index){
            var cb = actionList[index];
            if(!cb){
                delete actionList[index];
            }
        }

        if(0 == this._mainDic[id][msgType].length){
            delete this._mainDic[id][msgType];
            if(0 == ObjectUtils.getLength(this._mainDic[id])){
                delete this._mainDic[id];
            }
            return;
        }

        for(var index = 0; index < actionList.length; index++){
            actionList[index](new app.message.Msg(id, msgType, args));
        }
    },

    /**
     * 延迟派发消息
     * @param second
     * @param id
     * @param msgType
     * @param args
     * @private
     */
    _dispatchLater : function (second, id, msgType, args) {
        if(second < 0){
            throw new Error("MsgError: can not send message to past")
        }else if(0 == second){
            this._dispatch(id, msgType, args);
        }else{
            var that = this;
            this.scheduleOnce(function () {
                that._dispatch(id, msgType, args);
            },second);
        }
    },

    /**
     * 移除监听器
     * @param id 唯一标识
     * @param msgType 消息类型
     * @param callBack 回调函数
     * @private
     */
    _removeListener : function (id, msgType, callback) {
        if(null == callback){
            if(!this._mainDic.hasOwnProperty(id) || !this._mainDic[id].hasOwnProperty(msgType)){
                return;
            }

            delete this._mainDic[id][msgType];

            if(0 == ObjectUtils.getLength(this._mainDic[id])){
                delete this._mainDic[id];
            }
        }else{
            if(!this._mainDic.hasOwnProperty(id) ||
               !this._mainDic[id].hasOwnProperty(msgType) ||
                this._mainDic[id][msgType].length == 0){
                return;
            }

            this._mainDic[id][msgType].shift();

            if(0 == this._mainDic[id][msgType].length){
                delete this._mainDic[id][msgType];
                if(0 == ObjectUtils.getLength(this._mainDic[id])){
                    delete this._mainDic[id];
                }
            }
        }
        cc.log("删除成功，id = %d",id);
    },

    /**
     * 移除监听器（根据唯一标识）
     * @param id
     * @private
     */
    _removeListenerById : function (id) {
        if(this._mainDic.hasOwnProperty(id)){
            delete this._mainDic[id];
        }
    },

    /**
     * 移除监听器（根据消息类型）
     * @param msgType
     * @private
     */
    _removeListenerByMsgType : function (msgType) {
        var emptyArray = [];
        for(var key in this._mainDic){
            if(this._mainDic[key].hasOwnProperty(msgType)){
                delete this._mainDic[key][msgType];
            }
            if(0 == ObjectUtils.getLength(this._mainDic[key])){
                emptyArray.push(key);
            }
        }
        for(var id in emptyArray){
            delete this._mainDic[emptyArray[id]];
        }
    },

    /**
     * 移除所有监听器
     * @private
     */
    _removeListenerAll : function () {
        for(var key in this._mainDic){
            delete this._mainDic[key];
        }
    },

    /*
     添加监听器
     */
    addListener : function (id, msgType, callback) {
        switch(arguments.length){
            case 3:
                this._addListener(id, msgType, callback);
                break;
            case 2:
                this._addListener(Number.MAX_VALUE, arguments[0], arguments[1]);
                break;
            default:
                throw new Error("MsgError: Argument must be non-nil ");
                break;
        }
    },

    /*
     派发消息
     */
    dispatch : function (id, msgType, args) {
        switch(arguments.length){
            case 3:
                if(msgType%100 == args.length){
                    this._dispatch(id, msgType, args);
                }else{
                    throw new Error("MsgError: Incorrect number of parameters, it should be %d ", msgType%100);
                }
                break;
            case 2:
                this._dispatch(Number.MAX_VALUE, arguments[0], arguments[1]);
                break;
            case 1:
                if(arguments[0]%100 == 0){
                    this._dispatch(Number.MAX_VALUE, arguments[0], []);
                }else{
                    throw new Error("MsgError: Incorrect number of parameters, it should be 0 ");
                }
                break;
            default:
                throw new Error("MsgError: Argument must be non-nil ");
                break;
        }
    },

    /*
     延迟派发消息
     */
    dispatchLater : function (second, id, msgType, args) {
        switch(arguments.length){
            case 3:
                this._dispatchLater(second, id, msgType, args);
                break;
            case 2:
                this._dispatchLater(arguments[0], Number.MAX_VALUE, arguments[1], arguments[2]);
                break;
            default:
                throw new Error("MsgError: Argument must be non-nil ");
                break;
        }
    },

    /*
     移除监听器
     */
    removeListener :　function (id, msgType, callback) {
        switch(arguments.length){
            case 3:
                this._removeListener(id, msgType, callback);
                break;
            case 2:
                this._removeListener(Number.MAX_VALUE, arguments[0], arguments[1]);
                break;
            default:
                throw new Error("MsgError: Argument must be non-nil ");
                break;
        }
    },

    /*
     移除监听器（通过唯一标识）
     */
    removeListenerById : function (id) {
        if(Number.MAX_VALUE != id){
            this._removeListenerById(id);
        }else{
            throw new Error("MsgError: Number.MAX_VALUE cant be id ")
        }
    },

    /*
     移除监听器（通过消息类型）
     */
    removeListenerByMsgType : function (msgType) {
        this._removeListenerByMsgType(msgType);
    },

    /*
     移除所有监听器
     */
    removeListenerAll : function () {
        this._removeListenerAll();
    }
});
app.message.Msg = cc.Class.extend({
    //唯一ID
    _id:0,
    //消息类型
    _msgType:0,
    //消息枚举
    _msgTypeEnum:{},
    //参数数组
    _args:[],
    ctor : function(id, msgType, args){
        this._id = id;
        this._msgType = msgType;
        this._args = args;
    },

    //获取参数数组的第index个参数
    getParam : function(index){
        if(index < this._args.length && index >= 0){
            return this._args[index];
        }else{
            cc.log("MsgError: IndexOutOfBoundsException!");
            return null;
        }
    },

    getType : function () {
        return this._msgType;
    },

    getArgs : function () {
        return this._args;
    }
});