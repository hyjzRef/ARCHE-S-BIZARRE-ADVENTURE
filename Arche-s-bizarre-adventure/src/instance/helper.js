/**
 * Created by yangyi on 6/5/15.
 */
app.helper = {};

(function(){
    var helper = app.helper;

    /**
     * 加载公共资源
     */
    helper.loadCommonRes = function() {
        cc.spriteFrameCache.addSpriteFrames(res.common_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_common_plist);
        cc.spriteFrameCache.addSpriteFrames(res.game_table_chuntianplist);
        cc.spriteFrameCache.addSpriteFrames(res.popup_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_dialog_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_matchInfo_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newcommon_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newlobby_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newbag_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newfriend_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newgeneral_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newgame_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newlogin_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newmail_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newmatch_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newmonthcard_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_icons);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newadd_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newadd2_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newtable_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_treasure_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_exchange_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newtreasure_plist);
        cc.spriteFrameCache.addSpriteFrames(res.giftmatch);
        cc.spriteFrameCache.addSpriteFrames(res.pdk_cards_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_newrank_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_holiday_plist);
    };

    /**
     * 卸载公共资源
     */
    helper.unloadCommonRes = function() {
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.common_plist);
    };

    /**
     * 加载大厅资源
     */
    helper.addLobbySpriteFrames = function(){
        cc.spriteFrameCache.addSpriteFrames(res.pdk_index_plist);
        cc.spriteFrameCache.addSpriteFrames(res.pdk_singleWarn_plist);
        cc.spriteFrameCache.addSpriteFrames(res.pdk_chat_voice_plist);
        cc.spriteFrameCache.addSpriteFrames(res.pdk_voiceAnim_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_littleAcount_plist);
        cc.spriteFrameCache.addSpriteFrames(res.ddz_personPic_plist);
//        cc.spriteFrameCache.addSpriteFrames(res.ddz_roomOther_plist);

        cc.spriteFrameCache.addSpriteFrames(res.ddz_shown_plist);

        //--add
        cc.spriteFrameCache.addSpriteFrames(res.pdk_voice_yuying_plist);
        cc.spriteFrameCache.addSpriteFrames(res.game_table_plist);
        //cc.spriteFrameCache.addSpriteFrames(res.lobby_joingame_plist);
        cc.spriteFrameCache.addSpriteFrames(res.lobby_backpack_plist);
        //remove 
        //cc.spriteFrameCache.addSpriteFrames(res.ddz_fastChat_plist);
    };
    /**
     * 卸载大厅资源
     */
    helper.removeLobbySpriteFrames = function(){
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.pdk_cards_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.pdk_singleWarn_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.pdk_chat_voice_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.pdk_voiceAnim_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_littleAcount_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_personPic_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_roomOther_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_login_plist);
     
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_shown_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_dialog_plist);

        //add
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.pdk_voice_yuying_plist);
        //cc.spriteFrameCache.removeSpriteFramesFromFile(res.game_table_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.lobby_joingame_plist);
        cc.spriteFrameCache.removeSpriteFramesFromFile(res.lobby_backpack_plist);
        //remove 
        //cc.spriteFrameCache.removeSpriteFramesFromFile(res.ddz_fastChat_plist);
    };



    //预加载动画资源 
    helper.loadAnimationRes = function(){
        cc.textureCache.addImage(res.pdk_index_bg_jpg);
        cc.textureCache.addImage(res.ddz_mb_png);
        cc.textureCache.addImage(res.ddz_dh_createRoom_png );
        cc.textureCache.addImage(res.ddz_dh_png);
        cc.textureCache.addImage(res.ddz_dh_shengli_png);
    };

    /**
     *生成通用描述文字
     * @param prefix 前导字符
     * @param chip 金币
     * @param schip 特殊金币-点券
     * @param endfix 结束
     */
    helper.generateStr001 = function(prefix, chip, schip, endfix) {
        var str = prefix;
        if(chip>0) {
            str += chip + Lang.common_chip;
        }
        if(schip > 0) {
            if(chip > 0) str += '、';
            str += schip + Lang.common_schip;
        }
        str += endfix;
        return str;
    };

    /**
     * 生成通用描述文字
     * @param prefix
     * @param chip
     * @param schip
     * @param {Array} items [[itemid, numb], ....]
     * @param endfix
     */
    helper.generateStr002 = function(prefix, chip, schip, items, endfix) {
        var str = prefix;
        if(chip) {
            str += chip + Lang.common_chip;
        }
        if(schip && schip != "0") {
            if(chip) str += '、';
            str += schip + Lang.common_schip;
        }
        if(items && items.length > 0) {
            if(chip || schip) str += '、';
            var len = items.length;
            var vo;
            for(var i=0; i<len; i++) {
                vo = game.staticInfo.getItemVoByItemId(items[i][0]);
                if(vo) {
                    if(i >0) str += '、';
                    if(items[i][2]) {
                        str = str + vo.name + ':' + Lang.shop_014 +app.helper.generateStr002(items[i][2]);
                    }else {
                        str = str + vo.name + 'X' + items[i][1];
                    }
                }
            }
        }
        str += endfix;
        return str;
    };

    /**
     * 格式化时间秒
     * @param second
     * @return {String}
     */
    helper.formatTimeSecond = function(second) {
        var h = Math.floor(second / 3600);
        var m = Math.floor(second % 3600 / 60);
        var s = second % 60;
        var ret = app.stringUtils.getBitNumberString(h, 2) + ":" + app.stringUtils.getBitNumberString(m, 2) + ":" + app.stringUtils.getBitNumberString(s,2);
        return ret;
    };

    /**
     * 格式化时间秒
     * @param second
     * @return {String}
     */
    helper.formatTimeSecond002 = function(second) {
        var date = new Date(second*1000);
        var year = date.getFullYear();
        var month = app.stringUtils.getBitNumberString(date.getMonth(), 2);
        var day = app.stringUtils.getBitNumberString(date.getDate(), 2);
        var h = app.stringUtils.getBitNumberString(date.getHours(), 2);
        var m = app.stringUtils.getBitNumberString(date.getMinutes(), 2);
        var s = app.stringUtils.getBitNumberString(date.getSeconds(), 2);
        var ret = app.stringUtils.substitute(Lang.common_time001, [year, month, day, h, m, s]);
        return ret;
    };

    /**
     *返回性别字符串
     * @param genderValue
     * @returns {Number}
     */
    helper.getGenderStr = function(genderValue) {
        if(genderValue == 1) {
            return Lang.common_sex003;
        }else {
            return Lang.common_sex004;
        }
    };

    /**
     * 获取大段文本sprite
     * @param paramxxx
     * @returns {cc.Node}
     */
    helper.getLargeTextSprite = function(diyParam) {
        /**
         * @type {{words: Array, size: (cc.Size|*), color1: number, color2: number, labelSize1: number, labelSize2: number, margin1: number, margin2: number}}
         */
        var _param = {
            words:[],   //文本
            size:cc.size(100),  //文本容器的大小
            color1:0xffffff,    //第一级文本的颜色
            color2:0x80ad64,    //第二级文本的颜色
            labelSize1:22,      //第一级文本的大小
            labelSize2:20,      //第二级文本的大小
            margin1:15,         //第一级文本的间距
            margin2:8,           //第二级文本的间距
            fontName:""
        };
        app.utils.ArrayUtils.copyPropertyUseObj(_param, diyParam);
        var words = _param.words;
        var size = _param.size;
        var container = new cc.Node();
        var len = words.length;
        var preLabel;
        var label;
        var flag = 0;
        var preFlag = -1;
        var margin = 0;
        var node = new cc.Node();
        var tempSize;
        for(var i=0; i<len; i++) {
            flag = words[i][0];
            if(flag == 0) {
                label = app.utils.ui.getSimpleLabel(words[i][1], _param.labelSize1, '', _param.color1);
                if(_param.fontName!="") label.setFontName(_param.fontName);
                node.addChild(label);
            } else if (flag == 1) {
                label = app.utils.ui.getSimpleLabel(words[i][1], _param.labelSize2, '', _param.color2);
                if(_param.fontName!="") label.setFontName(_param.fontName);
                node.addChild(label);
            }
            label.setDimensions(size.width, 0);

            if(preFlag == -1) {
                margin = 0;
            }else if(preFlag == 0) {
                margin = _param.margin1;
            }else if(preFlag == 1) {
                if(flag == 0) {
                    margin = _param.margin1;
                }else {
                    margin = _param.margin2;
                }
            }
            if(preLabel) {
                app.utils.ui.alignBelowBottomL(preLabel, label, margin);
            }else {
                tempSize = label.getContentSize();
                label.x = tempSize.width/2;
                label.y = -tempSize.height/2;
            }
            preLabel = label;
            preFlag = flag;
        }
        tempSize = label.getContentSize();
        node.y = -label.y + tempSize.height/2;
        container.setContentSize(cc.size(size.width, node.y));
        container.addChild(node);
        return container;
    };

    /**
     *节点遍历查找
     * @param root 根节点  name 要查找的节点名
     * @return 节点
     *
     */
    helper.seekWidgetByName = function(root, name) {
        if(!root)
            return null;
        if(root.getName() === name)
            return root;
        var arrayRootChildren = root.getChildren();
        var length = arrayRootChildren.length;
        for(var i = 0; i < length; i++) {
            var child = arrayRootChildren[i];
            var res = helper.seekWidgetByName(child, name);
            if(res !== null)
                return res;
        }
        return null;
    };

    /*
    * 添加自定义事件
    * @param 事件名
    * @param 事件回调
    */
    helper.registerEvent = function(name, callback) {
        if ( name === undefined || callback === undefined ){
            cc.log("------[registerEvent]注册事件失败");
            return;
        }
        var eventListenter = cc.EventListener.create({
            event :cc.EventListener.CUSTOM,
            eventName :name,
            callback :callback
        });
        cc.eventManager.addListener(eventListenter,1);

        return eventListenter;
    };

    /**
     *消息分发
     * @param name 事件类型  cmd 命令 data 参数
     *
     */
    helper.dispatchEvent = function(name, cmd, data) {
        var info = {};
        info.cmd = cmd;
        info.data = data;
        
        var event = new cc.EventCustom(name);
        event.setUserData(info);
        cc.eventManager.dispatchEvent(event);
    };

    /*
     * 销毁自定义事件
     * @param 事件
     */
    helper.unregisterEvent = function(event) {
        if ( event )
            cc.eventManager.removeListener(event);
    };

    /*
    * 获得头像自适应缩放
    * @param pic大小  framsize框大小 scale 指定缩放大小
    */
    helper.getHandScale = function(picSize, framSize, scale){
        var wid = picSize.width;
        var hei = picSize.height;
        if(wid>hei){
            return (picSize.width/framSize.width)*scale;
        }else{
            return (picSize.height/framSize.height)*scale;
        };
    };

    /*
    * 格式化昵称
    * @param
    */
    helper.formatNick = function(nick, maxlen) {
        if (!nick || 0 >= nick.length) return "";

        var newNick = nick;
        var len = (maxlen) ? maxlen : 5;
        if (len < nick.length){
            newNick = nick.substring(0, len);
            newNick = newNick + ".."
        }

        return newNick;
    };

    /**
     *获得一个范围的随机值
     * @param min：最小值 max:最大值
     * @return 随机值
     *
     */
    helper.getRandValueFromLimit = function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min, 10);
    };

    /**
     *检查是否是游客登录
     *
     */
    helper.checkIsGuest = function() {
        var list = [2,3,5,6];
        if(list.indexOf(conf.channel)>=0){
            return true;
        }else{
            return false;
        };
    };

    /*
    创建spine动画
     */
    helper.createSpineAnim = function(jsonFile, atlasFile){
        var animation = new sp.SkeletonAnimation(jsonFile, atlasFile, 1);
        return animation;
    };

})();
