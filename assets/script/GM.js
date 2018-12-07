var sd = Math.floor(Math.random()*2); //Math.floor(Math.random()*2)
var lr = Math.floor(Math.random()*2);
cc.Class({
    extends: cc.Component,
    properties: {
        stair_s: {
            default: null,
            type: cc.Node,
        },

        stair_d: {
            default: null,
            type: cc.Node,
        },

        arrow_left: {
            default: null,
            type: cc.Node,
        },

        arrow_right: {
            default: null,
            type: cc.Node,
        },

        mouse_left: {
            default: null,
            type: cc.Node,
        },

        mouse_right: {
            default: null,
            type: cc.Node,
        },

        label_left:{
            default: null,
            type: cc.Label,
        },

        label_right:{
            default: null,
            type: cc.Label,
        },

        coin: {
            default: null,
            type: cc.Animation,
        },

        diamond: {
            default: null,
            type: cc.Animation,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var xx = this.getComponent(dragonBones.ArmatureDisplay);
        var xdx = this;
        setTimeout(function(){
            if(sd === 0) xdx.stair_d.active = false;
            else xdx.stair_s.active = false;

            if(lr === 0) {
                xdx.arrow_right.active = false;
                xdx.mouse_right.active = false;
                xdx.label_right.enabled = false;
                // cc.log(xdx.label_right);
            }else{
                xdx.arrow_left.active = false;
                xdx.mouse_left.active = false;
                xdx.label_left.enabled = false;
                // cc.log(xdx.label_left);
            }

            cc.sys.localStorage.setItem('sd',sd);
            cc.sys.localStorage.setItem('lr',lr);
        },5000)
    },

    start () {

    },

    // update (dt) {},
});
