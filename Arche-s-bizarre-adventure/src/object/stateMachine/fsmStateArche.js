/**
 * Created by Administrator on 2017/11/2.
 */
app.stateMachine.IdleState = app.stateMachine.FSMState.extend({
    ctor : function(fsmMachine){
        this._super();
        this.fsmMachine = fsmMachine;
        this.stateID = app.stateMachine.StateID.IDLE;

    },

    handleInput : function(pos, isSpeed2){
        if(pos.x != 0){
            if(isSpeed2)
                {this.fsmMachine.changeState(app.stateMachine.StateID.RUN);}
            else
                {this.fsmMachine.changeState(app.stateMachine.StateID.WALK);}
        }
    },

    onEnter : function(){
        if(game.player && game.player.getAnimationCtrl)
            game.player.getAnimationCtrl().changeFrame(app.stateMachine.StateID.IDLE);
        cc.log("State Change: Enter IdleState!");
    },

    onUpdate : function(){
        //cc.log("State Change: Update IdleState!");
    },

    onExit : function(){
        cc.log("State Change: Exit IdleState!");
    }

});
app.stateMachine.JumpState = app.stateMachine.FSMState.extend({
    ctor : function(fsmMachine){
        this._super();
        this.fsmMachine = fsmMachine;
        this.stateID = app.stateMachine.StateID.JUMP;
    },

    handleInput : function(){

    },

    onEnter : function(){
        cc.log("State Change: Enter JumpState!");
    },

    onUpdate : function(){
        //cc.log("State Change: Update JumpState!");
    },

    onExit : function(){
        cc.log("State Change: Exit JumpState!");
    }

});
app.stateMachine.WalkState = app.stateMachine.FSMState.extend({
    ctor : function(fsmMachine){
        this._super();
        this.fsmMachine = fsmMachine;
        this.stateID = app.stateMachine.StateID.WALK;
    },

    handleInput : function(pos, isSpeed2){
        if(pos.x != 0){
            if(isSpeed2)
            {this.fsmMachine.changeState(app.stateMachine.StateID.RUN);}
        }else{
            this.fsmMachine.changeState(app.stateMachine.StateID.IDLE);
        }
    },

    onEnter : function(){
        game.player.getAnimationCtrl().changeFrame(app.stateMachine.StateID.WALK);
        cc.log("State Change: Enter WalkState!");
    },

    onUpdate : function(){
        //cc.log("State Change: Update WalkState!");
    },

    onExit : function(){
        cc.log("State Change: Exit WalkState!");
    }

});
app.stateMachine.RunState = app.stateMachine.FSMState.extend({
    ctor : function(fsmMachine){
        this._super();
        this.fsmMachine = fsmMachine;
        this.stateID = app.stateMachine.StateID.RUN;
    },

    handleInput : function(pos, isSpeed2){
        if(pos.x != 0){
            if(!isSpeed2)
            {this.fsmMachine.changeState(app.stateMachine.StateID.WALK);}
        }else{
            this.fsmMachine.changeState(app.stateMachine.StateID.IDLE);
        }
    },

    onEnter : function(){
        game.player.getAnimationCtrl().changeFrame(app.stateMachine.StateID.RUN);
        cc.log("State Change: Enter RunState!");
    },

    onUpdate : function(){
        //cc.log("State Change: Update RunState!");
    },

    onExit : function(){
        cc.log("State Change: Exit RunState!");
    }

});