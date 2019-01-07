cc.Class({
    
    extends: cc.Component,

    properties: {
        

    },

    onLoad () {
        this.diamond = this.getComponent(dragonBones.ArmatureDisplay)
        this.anim_name = this.diamond.getAnimationNames('Sprite')[0];
        this.timer = 0;
    },

    start () {

    },

    update (dt) {
        if(this.timer > 5) {
            this.diamond.playAnimation(this.anim_name,1);
            this.timer = 0;
        }
        this.timer += dt;
    },
});
