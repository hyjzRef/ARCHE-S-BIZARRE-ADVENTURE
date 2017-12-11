/**
 * Created by zuxiong on 2017/4/6.
 */

cc.loadCsbEx = function(fileName, filePath){
    if(cc.sys.isNative){
        var index = fileName.lastIndexOf(".");
        if(index < 0){
            cc.log("ERROR ! file name =" +  fileName);
            return null;
        }

        fileName = fileName.substr(0, index) + ".csb";
        var _node = UtilsEx.loadCsb(fileName);
        var _action = UtilsEx.createTimeline(fileName);

        return {node : _node, action : _action }
    }else{
        var widget = ccs.load(fileName, filePath);
        var _node = widget.node;
        var _action = widget.action

        return {node : _node, action : _action }
    }
};

var Utils = {};
Utils.seekWidgetByName = function(root, name){
    if(!root)
        return null;
    if(root.getName() === name)
        return root;
    var arrayRootChildren = root.getChildren();
    var length = arrayRootChildren.length;
    for(var i = 0; i < length; i++) {
        var child = arrayRootChildren[i];
        var res = Utils.seekWidgetByName(child, name);
        if(res !== null)
            return res;
    }
    return null;
};


var StringUtils = {};
StringUtils.doubleNum = function(num){
    if(!num) return;
    return num < 10 ? "0" + num : num;
};

var ObjectUtils = {};
ObjectUtils.getLength = function(obj){
    var i = 0;
    for(var o in obj){
        i++;
    }
    return i;
};

var MathUtils = {};
MathUtils.addRandom = function (rate, yesCb, noCb) {
    if(arguments.length == 0){return;}
    if(rate > 1){rate = 1;}
    if(rate < 0){rate = 0;}
    var random = Math.random();
    var result = random < rate ? true : false;
    if(result){
        if(yesCb && typeof(yesCb) === "function"){yesCb();}
    }else{
        if(noCb && typeof(noCb) === "function"){noCb();}
    }
};
MathUtils.runRandomByAverage = function () {
    if(arguments.length == 0){return;}
    if(arguments.length == 1 && typeof(arguments[0]) === "function"){arguments[0]();}
    var random = Math.random();
    for(var i = 0; i < arguments.length; i++){
        if(i/arguments.length <= random && (i+1)/arguments.length > random){
            if(arguments[i] && typeof(arguments[i]) === "function"){arguments[i]();}
        }
    }
};

//Array
var ArrayUtils = {};
ArrayUtils.contains = function (array, item) {
    for(var i=0 ;i<array.length; i++){
        if(array[i] == item)
            return true;
    }
    return false;
};
