cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad () {
        this.coin = this.getComponent(dragonBones.ArmatureDisplay)
        this.anim_name = this.coin.getAnimationNames('Armature')[0];
        this.timer = 0;
    },

    start () {

    },

    update (dt) {
        if(this.timer > 10) {
            this.coin.playAnimation(this.anim_name,1);
            this.timer = 0;
        }
        this.timer += dt
    },
});