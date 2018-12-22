cc.Class({
    extends: cc.Component,

    properties: {
        moveX:0,
        moveY:0,

        mouse_left: {
            default: null,
            type: cc.Node,
        },

        mouse_right: {
            default: null,
            type: cc.Node,
        },

        moneyRight:{
            default: null,
            type: cc.Node,
        },
        moneyLeft:{
            default: null,
            type: cc.Node,
        },

        getmusic:{
            default: null,
            type: cc.AudioClip
        },

        over_black: {
            default: null,
            type: cc.Node,
        },
    },

    setMouseValue:function(act,tn,direction){
        switch(act){
            case 'mouse_action1':
                if(direction == 'right'){
                    tn.node.scaleX = -0.425;
                    tn.node.scaleY = 0.425;
                }else{
                    tn.node.scaleX = 0.425;
                    tn.node.scaleY = 0.425;
                }
            break;
            case 'mouse_action2':
                if(direction == 'right'){
                    tn.node.scaleX = -0.4;
                    tn.node.scaleY = 0.4;
                }else{
                    tn.node.scaleX = 0.4;
                    tn.node.scaleY = 0.4;
                }
            break;
            case 'mouse_action3':
                tn.node.scaleX = 0.5;
                tn.node.scaleY = 0.5;
                tn.node.y = tn.node.y - 40
            break;
            case 'mouse_action4':
                tn.node.scaleX = 0.3;
                tn.node.scaleY = -0.3;
            break;
            case 'mouse_action5':
                tn.node.scaleX = 1;
                tn.node.scaleY = 1;
            break;
        }
    },
    

    goAction:function(Mode){
        switch (Mode){
            case 1:
                var move = cc.sequence(cc.moveBy(0.8,80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.8,0,-279),cc.callFunc(function(){this.moneyRight.active = false;cc.audioEngine.play(this.getmusic, false, 0.5);this.over_black.active = true},this));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2','right');
                break;
            case 2:
                var move = cc.sequence(cc.moveBy(0.8,-80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.8,0,-279),cc.callFunc(function(){this.moneyLeft.active = false;cc.audioEngine.play(this.getmusic, false, 0.5);this.over_black.active = true},this));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2');
                break;
            case 3:
                var move = cc.sequence(cc.moveBy(0.8,80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.5,0,-195),cc.callFunc(function(){this.moneyLeft.active = false;cc.audioEngine.play(this.getmusic, false, 0.5);this.over_black.active = true},this));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2','right');
                break;
            default:
                var move = cc.sequence(cc.moveBy(0.8,-80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.5,0,-195),cc.callFunc(function(){this.moneyRight.active = false;cc.audioEngine.play(this.getmusic, false, 0.5);this.over_black.active = true},this));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2');
        }
    },

    chgAnimation:function(anim,gowhere){
        this.aa = anim;
        if(typeof gowhere == undefined) this.setMouseValue(this.aa,this.chgArmature);
        else this.setMouseValue(this.aa,this.chgArmature,gowhere);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
    },

    onLoad () {
        this.over_black.active = false;
        this.chgArmature = this.getComponent(dragonBones.ArmatureDisplay);
        this.aa = '';
        this.Xflag = false;

        cc.director.getCollisionManager().enabled = true
        cc.director.getCollisionManager().enabledDebugDraw = false

    },

    onCollisionEnter: function (other, self) {
        var dX = this.recordX - other.node.x;
        var dY = this.recordY - other.node.y;
        var absX = Math.abs(dX);
        var absY = Math.abs(dY);

        if(absX != 0){
            if(absX > 30 && absX < 70){
                if(dX > 0) this.chgAnimation('mouse_action1');
                else this.chgAnimation('mouse_action1','right');
            }else if(absX > 300 ||  absX < 30){
                this.chgAnimation('mouse_action4');
            }
        }else{
            if(absY < 180){
                if(other.node.x > 0) this.chgAnimation('mouse_action2');
                else this.chgAnimation('mouse_action2','right');
            }else{
                this.chgAnimation('mouse_action3','right');
            }
        }
        
        this.recordX = other.node.x;
        this.recordY = other.node.y;
    },

    start () {
        this.recordX = this.node.x;
        this.recordY = this.node.y;
    },


    update (dt) {
        if(this.Xflag != true) this.checkDataMouse();
    },

    checkDataMouse:function(){
        if(cc.sys.localStorage.getItem('sd') != 'undefined' && cc.sys.localStorage.getItem('lr') != 'undefined'){
            this.sd = cc.sys.localStorage.getItem('sd'); // 0:少一階梯子 1:正常
            this.lr = cc.sys.localStorage.getItem('lr'); // 0:左邊老鼠   1:右邊老鼠
            if(this.lr == 0) this.actionmouse = this.mouse_left
            else this.actionmouse = this.mouse_right;
            if(this.sd == 0 && this.lr == 0) this.wMode = 1;
            else if(this.sd == 0 && this.lr == 1) this.wMode = 2;
            else if(this.sd == 1 && this.lr == 0) this.wMode = 3;
            else this.wMode = 4;
            this.Xflag = true
            this.goAction(this.wMode)
        }
    },
});
