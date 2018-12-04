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
        goaction.setTag(ACTION_TAG);
        // this.mouse_act.resume();
        setTimeout(function (){
            xdx.mouse_act.resume();
        },2000);
        xdx.node.runAction(goaction);
        xdx.node.getActionByTag(goaction);
        xdx.node.stopActionByTag(goaction);
    },

    // update (dt) {},
});
