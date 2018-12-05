cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:


    onLoad () {
       cc.log(this.getComponent(dragonBones.ArmatureDisplay))
    },

    /*
        mouse_action：
        [0] : mouse_action1 : 鑽土(向左)
        [1] : mouse_action2 : 橫跑(向左)
        [2] : mouse_action3 : 獲得元寶
        [3] : mouse_action4 : 縱跑(向上)
        [4] : mouse_action5 : 待在原地
        var armatre_ary = this.roleArmature.getArmatureNames();
        this.getComponent(dragonBones.ArmatureDisplay).getArmatureNames()[x] 改變armature
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(armatre_ary[x]) 執行animation
    */

    start () {
        this.roleArmature = this.getComponent(dragonBones.ArmatureDisplay)
        this.roleArmature.armatureName = this.roleArmature.getArmatureNames()[0];
        this.roleArmature.playAnimation(this.roleArmature.getAnimationNames(this.roleArmature.getArmatureNames()[0])[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation('mouse_action1');
    },

    // update (dt) {},
});
