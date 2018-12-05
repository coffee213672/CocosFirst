cc.Class({
    extends: cc.Component,

    properties: {
        distance : 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log(this.getComponent(cc.Animation))
        this.mouse_act = this.getComponent(cc.Animation);
        this.mouse_state = this.mouse_act.play('mouse_action1');
        this.mouse_state.wrapMode = cc.WrapMode.Loop;
        this.mouse_state.repeatCount = Infinity;
        this.mouse_act.pause();
    },


    start () {
        var xdx = this;
        var goaction = cc.moveBy(12, -500, 0);
        var ACTION_TAG = 1; 
        
        // cc.log(sss)
        // this.mouse_act.resume();
        xdx.mouse_act.resume();
        xdx.node.runAction(goaction);
        goaction.setTag(ACTION_TAG);
        xdx.node.getActionByTag(ACTION_TAG);
        setTimeout(function (){    
            xdx.node.stopActionByTag(ACTION_TAG);
            xdx.mouse_state = xdx.mouse_act.play('mouse_action2');
        },2000);

    },

    // update (dt) {},
});
