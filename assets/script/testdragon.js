cc.Class({
    extends: cc.Component,

    properties: {
       
    },


    onLoad () {
        this.aa = this.getComponent(dragonBones.ArmatureDisplay);
        this.dot = new cc.Rect(153.5,258.5,3,3);
    },

    dragonAction:function(){
        var actionchg = cc.moveTo(1,154,259);
        var action2 = cc.moveTo(1,54,259);
        var action = cc.sequence(actionchg,action2);
        this.aa.node.runAction(action);
        // this.aa.node.runAction(action2);
    },

    dragonAnimation:function(anim){
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(anim);
    },

    start () {
        var xdx = this;
        setTimeout(function(){
            xdx.dragonAction();
        },3000)
       
    },

    containsX : function (x,y,comXY) {
        return (comXY.x <= x && comXY.x + comXY.width >= x && comXY.y <= y && comXY.y + comXY.height >=y);
    },

    update (dt) {
        if(this.containsX(this.getComponent(dragonBones.ArmatureDisplay).node.x,this.getComponent(dragonBones.ArmatureDisplay).node.y,this.dot)){
            cc.log('yes')
            this.getComponent(dragonBones.ArmatureDisplay).playAnimation('jump');
        }
        //cc.log(this.getComponent(dragonBones.ArmatureDisplay).node.x+','+this.getComponent(dragonBones.ArmatureDisplay).node.y)
    },
});
