var sd = 1; //Math.floor(Math.random()*2)
var lr =1;
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
        if(sd === 0) this.stair_d.active = false;
        else this.stair_s.active = false;

        if(lr === 0) {
            this.arrow_right.active = false;
            this.mouse_right.active = false;
            this.label_right.enabled = false;
            cc.log(this.label_right);
        }else{
            this.arrow_left.active = false;
            this.mouse_left.active = false;
            this.label_left.enabled = false;
            cc.log(this.label_left);
        }

        cc.sys.localStorage.setItem('sd',sd);
        cc.sys.localStorage.setItem('lr',lr);
        // setTimeout(function (){

        // },5000)
    },

    start () {

    },

    // update (dt) {},
});
