cc.Class({
    
    extends: cc.Component,

    properties: {
        

    },

    onLoad () {
        var diamond_anim = this.getComponent(cc.Animation);
        var diamond_state = diamond_anim.play('diamond_animation');
        diamond_state.wrapMode = cc.WrapMode.Loop;
        diamond_state.repeatCount = Infinity;
    },

    start () {

    },

    // update (dt) {},
});
