/**
 * Created by Administrator on 2017/10/29.
 */
app.stateMachine.FSMMachine = cc.Class.extend({
    ctor : function (owner) {
        this._states = {};
        this._currentStateID = app.stateMachine.StateID.NULL_STATE_ID;
        this._previousStateID = app.stateMachine.StateID.NULL_STATE_ID;
        this._globalStateID = app.stateMachine.StateID.NULL_STATE_ID;
        this._owner = owner;
        this.createAllState();
    },

    createAllState : function(){
        var stateList = app.stateMachine.StateID;
        for(var fsmStateID in stateList){
            if(fsmStateID != stateList.NULL_STATE_ID){
                switch (fsmStateID){
                    case app.stateMachine.StateID.IDLE:
                        this._states[fsmStateID] = new app.stateMachine.IdleState(this); break;
                    case app.stateMachine.StateID.JUMP:
                        this._states[fsmStateID] = new app.stateMachine.JumpState(this); break;
                    case app.stateMachine.StateID.RUN:
                        this._states[fsmStateID] = new app.stateMachine.RunState(this); break;
                    case app.stateMachine.StateID.WALK:
                        this._states[fsmStateID] = new app.stateMachine.WalkState(this); break;
                    default :
                        cc.log("FSM Error: You enter a incorrect values!")
                }
            }
        }
    },

    deleteState : function(fsmStateID){
        if (fsmStateID == app.stateMachine.StateID.NULL_STATE_ID)
        {
            cc.log("FSM Error: NullStateID is not allowed for a real state");
            return;
        }
        for(var stateID in this._states){
            if(stateID == fsmStateID){
                delete this._states[fsmStateID];
                return;
            }
        }
        cc.log("FSM Error: There is no this stateID!");
    },

    onUpdate : function(){
        //call by player
        var curState = this.getCurrentState();
        if(curState && curState.onUpdate){curState.onUpdate();}
        var gloState = this.getGlobalState();
        if(gloState && gloState.onUpdate){gloState.onUpdate();}
    },

    changeState : function(fsmStateID){
        this._previousStateID = this._currentStateID;
        var curState = this.getCurrentState();
        if(curState && curState.onExit){curState.onExit();}
        this._currentStateID = fsmStateID;
        curState = this.getCurrentState();
        if(curState && curState.onEnter){curState.onEnter();}
    },

    getCurrentStateID : function(){
        return this._currentStateID;
    },

    getCurrentState : function(){
        if(this._currentStateID == app.stateMachine.StateID.NULL_STATE_ID){
            return;
        }
        return this._states[this._currentStateID];
    },

    getPreviousState : function () {
        if(this._previousStateID == app.stateMachine.StateID.NULL_STATE_ID){
            cc.log("FSM Error: NullStateID is not allowed for a real state")
            return;
        }
        return this._states[this._previousStateID];
    },

    getGlobalState : function () {
        if(this._globalStateID == app.stateMachine.StateID.NULL_STATE_ID){
            return;
        }
        return this._states[this._globalStateID];
    }
});