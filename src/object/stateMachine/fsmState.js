/**
 * Created by Administrator on 2017/10/29.
 */
app.stateMachine.Transition = {
    NULL_TRANSITION : 0,

};

app.stateMachine.StateID = {
    NULL_STATE_ID : "NULL_STATE_ID",
    IDLE          : "IDLE",
    RUN           : "RUN",
    JUMP          : "JUMP",
    WALK          : "WALK",
};

app.stateMachine.FSMState = cc.Class.extend({
    stateID : app.stateMachine.StateID.NULL_STATE_ID,
    ctor : function () {
        //this.map = [];
    },

    // addTransition : function(trans, stateID){
    //     if(trans == app.stateMachine.Transition.NULL_TRANSITION){
    //         cc.log("FSMState Error : NullTransition is not allowed for a real transition");
    //     }
    //     if(stateID == app.stateMachine.StateID.NULL_STATE_ID){
    //         cc.log("FSMState Error : NullStateID is not allowed for a real ID")
    //     }
    //     if(this.map[trans]){
    //         cc.log("FSMState ERROR: State " + stateID.toString() + " already has transition " + trans.toString() +
    //             "Impossible to assign to another state");
    //         return;
    //     }
    //     this.map[trans] = stateID;
    // },
    //
    // deleteTransition : function(trans){
    //     if(trans == app.stateMachine.Transition.NULL_TRANSITION){
    //         cc.log("FSMState Error : NullTransition is not allowed for a real transition");
    //     }
    //     if(this.map[trans]){
    //         delete this.map[trans];
    //         return;
    //     }
    //     cc.log("FSMState ERROR: Transition " + trans.toString() + " was not on the state's transition list");
    // },
    //
    // getOutputState : function (trans) {
    //     if(this.map[trans]){
    //         return this.map[trans];
    //     }
    //     return app.stateMachine.StateID.NULL_STATE_ID;
    // },

    onEnter :　function(){
        cc.log("FSMState Warning : onEnter need to be override");
    },

    onUpdate : function () {
        cc.log("FSMState Warning : onUpdate need to be override");
    },

    onExit : function(){
        cc.log("FSMState Warning : onExit need to be override");
    },
});