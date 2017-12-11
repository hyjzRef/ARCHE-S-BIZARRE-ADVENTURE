/**
 * Created by Administrator on 2017/10/31.
 */
app.animation.AnimCtrl = cc.Class.extend({
    ctor : function(owner){
        this.owner = owner;
        /** {fsmStateID, [animate1, animate2, ...]} */
        this.anims = {};
        this.sprite = owner._sprite;
        this._addAllFrames();
    },

    _addAllFrames : function(){
        var stateList = app.stateMachine.StateID;
        for(var state in stateList){
            if(state != stateList.NULL_STATE_ID){
                this._addFrame(state);
            }
        }
    },

    _addFrame : function(fsmStateID){
        if(!fsmStateID){
            cc.log("FSM Error: Null reference is not allowed!");
        }
        for(var stateID in this.anims){
            if(stateID == fsmStateID){
                cc.log("AnimCtrl Error: Impossible to add state " + fsmStateID.toString() +
                    " because state has already been added");
                return;
            }
        }
        var AnimInfo = app.animation.AnimInfo;
        var _frameInfos = [];
        switch (fsmStateID){
            case app.stateMachine.StateID.IDLE:
                _frameInfos.push(AnimInfo.arche_idle_breath_1);
                _frameInfos.push(AnimInfo.arche_idle_breath_2);
                _frameInfos.push(AnimInfo.arche_idle_breath_3);
                _frameInfos.push(AnimInfo.arche_idle_breath_4);
                _frameInfos.push(AnimInfo.arche_idle_stretch_1);
                _frameInfos.push(AnimInfo.arche_idle_stretch_2);
                _frameInfos.push(AnimInfo.arche_idle_stretch_3);
                 break;
            case app.stateMachine.StateID.JUMP:
                _frameInfos.push(AnimInfo.arche_jump);
                 break;
            case app.stateMachine.StateID.RUN:
                _frameInfos.push(AnimInfo.arche_run);
                 break;
            case app.stateMachine.StateID.WALK:
                _frameInfos.push(AnimInfo.arche_walk);
                break;
            default :
                cc.log("AnimCtrl Error: You enter a incorrect values!");
                return;
        }
        var actions = [];
        for(var i = 0; i < _frameInfos.length; i ++){
            var _spriteFrames = _frameInfos[i].spriteFrames;
            var _delay        = _frameInfos[i].delay;
            var _animation    = new cc.Animation();
            for(var k = 0; k < _spriteFrames.length; k++){
                _animation.addSpriteFrame(cc.spriteFrameCache.getSpriteFrame(_spriteFrames[k]));
            }
            _animation.setDelayPerUnit(_delay);
            actions.push(cc.animate(_animation));
        }
        this.anims[fsmStateID] = actions;
    },

    deleteFrame : function(fsmStateID){
        for(var stateID in this.anims){
            if(stateID == fsmStateID){
                delete this.anims[stateID];
                return;
            }
        }
        cc.log("AnimCtrl Error: there is no this stateID!");
    },

    changeFrame : function(fsmStateID){
        var actions = this.anims[fsmStateID];
        var seq = [];
        switch (fsmStateID){
            case app.stateMachine.StateID.IDLE:
                for(var i = 0; i < 6; i++){
                    MathUtils.runRandomByAverage(
                        function () {seq.push(actions[0]);},
                        function () {seq.push(actions[0]);},
                        function () {seq.push(actions[0]);},
                        function () {seq.push(actions[1]);},
                        function () {seq.push(actions[2]);},
                        function () {seq.push(actions[3]);}
                    );
                }
                MathUtils.runRandomByAverage(
                    function () {seq.push(actions[4]);},
                    function () {seq.push(actions[5]);},
                    function () {seq.push(actions[6]);}
                );

                break;
            case app.stateMachine.StateID.JUMP:
                 break;
            case app.stateMachine.StateID.RUN:
                seq.push(actions[0]);
                 break;
            case app.stateMachine.StateID.WALK:
                seq.push(actions[0]);
                break;
            default :
                cc.log("AnimCtrl Error: You enter a incorrect values!");
                return;
        }
        this.sprite.stopAllActions();
        this.sprite.runAction(cc.repeatForever(cc.sequence(seq)));
    },
});