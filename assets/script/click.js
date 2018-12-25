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
            case 'mouse_action8':
                tn.node.scaleX = 0.3;
                tn.node.scaleY = -0.3;
            break;
            case 'mouse_action5':
                tn.node.scaleX = 1;
                tn.node.scaleY = 1;
            break;
            case 'mouse_action6':
                tn.node.scaleX = 2;
                tn.node.scaleY = 2;
            break;
            case 'mouse_action7':
                tn.node.scaleX = 2;
                tn.node.scaleY = 2;
            break;
            case 'mouse_action9':
                if(direction == 'right'){
                    tn.node.scaleX = -0.4;
                    tn.node.scaleY = 0.4;
                }else{
                    tn.node.scaleX = 0.4;
                    tn.node.scaleY = 0.4;
                }
            break;
        }
    },
    
    goActionZero:function(LR){
        if(LR == 1){
            if(this.whichmouse == 'mouse_left'){
                this.chgAnimation('mouse_action2','right');
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(cc.sequence(cc.moveBy(0.8,80,-5),cc.callFunc(function(){this.chgAnimation('mouse_action1','right');},this)));
            }else{
                var move =  cc.sequence(cc.moveBy(0.8,200,0),cc.callFunc(function(){this.getComponent(dragonBones.ArmatureDisplay).node.active = false},this))
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2','right');
            }
        }else{
            if(this.whichmouse == 'mouse_right_all'){
                this.chgAnimation('mouse_action2');
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(cc.sequence(cc.moveBy(0.8,-80,-5),cc.callFunc(function(){this.chgAnimation('mouse_action1');},this)));
            }else{
                var move =  cc.sequence(cc.moveBy(0.8,-200,0),cc.callFunc(function(){this.getComponent(dragonBones.ArmatureDisplay).node.active = false},this))
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2');
            }
        }
    },

    goAction:function(Mode){
        switch (Mode){
            case 1:
                if(this.whichmouse == 'mouse_left'){
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.8,0,-279),cc.callFunc(function(){
                        this.moneyRight.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.over_black.active = true;
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                    },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            case 2:
                if(this.whichmouse == 'mouse_right_all'){
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.8,0,-279),cc.callFunc(function(){
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.moneyLeft.active = false;
                        this.over_black.active = true;
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                    },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            case 3:
                if(this.whichmouse == 'mouse_left'){
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.5,0,-195),cc.callFunc(function(){
                        this.moneyLeft.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.over_black.active = true;
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                        },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            default:
                if(this.whichmouse == 'mouse_right_all'){
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.5,0,-195),cc.callFunc(function(){
                        this.moneyRight.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.over_black.active = true;
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                        },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
        }
    },

    showresult:function(obj){

        var xdx = this;
        setTimeout(function(){
            if(obj.node.x < 0){
                xdx.chgAnimation('mouse_action6');
            }else{
                xdx.chgAnimation('mouse_action7');
            }
            obj.node.x = 0;
            obj.node.y = 0;
            obj.node.setSiblingIndex(40)
        },3000)
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
        this.whichmouse = this.getComponent(dragonBones.ArmatureDisplay).node.name;
        this.ZactionFlag = false;

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
            }else if(absX > 300){
                this.chgAnimation('mouse_action8');
            }
        }else{
            if(absY < 180){
                if(other.node.x > 0) this.chgAnimation('mouse_action9');
                else this.chgAnimation('mouse_action9','right');
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
        if(cc.sys.localStorage.getItem('lr') != 'undefined' && this.ZactionFlag == false){
            this.lr = cc.sys.localStorage.getItem('lr'); // 0:左邊老鼠   1:右邊老鼠
            if(this.lr == 1) this.actionmouse = this.mouse_left
            else this.actionmouse = this.mouse_right;
            this.goActionZero(this.lr);
            this.ZactionFlag = true
        }

        if(cc.sys.localStorage.getItem('sd') != 'undefined'){
            this.sd = cc.sys.localStorage.getItem('sd'); // 0:少一階梯子 1:正常
            if(this.sd == 3 && this.lr == 1) this.wMode = 1;
            else if(this.sd == 3 && this.lr == 2) this.wMode = 2;
            else if(this.sd == 4 && this.lr == 1) this.wMode = 3;
            else this.wMode = 4;
            this.Xflag = true
            this.goAction(this.wMode)
        }
    },
});
