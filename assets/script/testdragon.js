cc.Class({
    extends: cc.Component,

    properties: {
       
    },


    onLoad () {
        this.aa = this.getComponent(dragonBones.ArmatureDisplay);
    },

    start () {
        var zz = this.aa;
        setTimeout(function(){
            zz.playAnimation('walk');
            var xxx = cc.moveBy(12, -500, 0);
            zz.node.runAction(xxx);
        },2000)
        
    },

    update (dt) {
        if(this.node.x < -372){
            this.aa.playAnimation('stand')
        }
    },
});
