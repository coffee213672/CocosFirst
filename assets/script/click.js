cc.Class({
    extends: cc.Component,

    properties: {
        moveX:0,
        moveY:0,
        moneyRight:{
            default: null,
            type: cc.Node,
        },
        moneyLeft:{
            default: null,
            type: cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:


    onLoad () {
        this.chgArmature = this.getComponent(dragonBones.ArmatureDisplay);
        this.armature_ary = this.chgArmature.getArmatureNames();
        this.aa = '';
        this.sd = cc.sys.localStorage.getItem('sd'); // 0:少一階梯子 1:正常
        this.lr = cc.sys.localStorage.getItem('lr'); // 0:左邊老鼠   1:右邊老鼠
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        if(this.sd == 0){
            if(this.lr == 0){

            }else{

            }
        }else{
            if(this.lr == 0){

            }else{
                this.dot1 = new cc.Rect(171.5,244.5,1,1);
                this.dot2 = new cc.Rect(171.5,160.5,1,1);
                this.dot3 = new cc.Rect(-172.5,160.5,1,1);
                this.dot4 = new cc.Rect(-172.5,76.5,1,1);
                this.dot5 = new cc.Rect(171.5,76.5,1,1);
                this.dot6 = new cc.Rect(171.5,-3.5,1,1);
                this.dot7 = new cc.Rect(-172.5,-3.5,1,1);
                this.dot8 = new cc.Rect(-172.5,-87.5,1,1);
                this.dot9 = new cc.Rect(171.5,-87.5,1,1);
                this.dot10 = new cc.Rect(171.5,-327.5,1,1);
            }
        }
    },

    /*
        mouse_action：
        [0] : mouse_action1 : 鑽土(向左) position  scale (0.5,0.5)
        [1] : mouse_action2 : 橫跑(向左) position  scale (0.5,0.5)
        [2] : mouse_action3 : 獲得元寶 position  scale (0.5,0.5)
        [3] : mouse_action4 : 縱跑(向上) position  scale (0.4,-0.4)
        [4] : mouse_action5 : 待在原地  position (250,244) ,scale (1,1)
        var armatre_ary = this.chgArmature.getArmatureNames();
        this.getComponent(dragonBones.ArmatureDisplay).getArmatureNames()[x] 改變armature
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(armatre_ary[x]) 執行animation
    */

    setMouseValue:function(act,tn,direction){
        switch(act){
            case 'mouse_action1':
                tn.node.scaleX = 0.5;
                tn.node.scaleY = 0.5;
                //tn.node.y = 245;
            break;
            case 'mouse_action2':
                if(direction == 'right'){
                    tn.node.scaleX = -0.4;
                    tn.node.scaleY = 0.4;
                }else{
                    tn.node.scaleX = 0.4;
                    tn.node.scaleY = 0.4;
                }
                //tn.node.y = 245;
            break;
            case 'mouse_action3':
                tn.node.scaleX = 0.5;
                tn.node.scaleY = 0.5;
                tn.node.y = tn.node.y - 40
                cc.log(tn.node)
            break;
            case 'mouse_action4':
                tn.node.scaleX = 0.3;
                tn.node.scaleY = -0.3;
                //tn.node.y = 245;
            break;
            case 'mouse_action5':
                tn.node.scaleX = 1;
                tn.node.scaleY = 1;
               // tn.node.y = 245;
            break;
        }
    },

    onKeyDown: function (event) {
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.aa = this.armature_ary[0];
                cc.log(this.aa);
            break;
            case cc.macro.KEY.e:
                this.aa = this.armature_ary[1];
                cc.log(this.aa);
            break;
            case cc.macro.KEY.a:
                this.aa = this.armature_ary[2];
                cc.log(this.aa);
            break;
            case cc.macro.KEY.s:
                this.aa = this.armature_ary[3];
                cc.log(this.aa);
            break;
            case cc.macro.KEY.d:
                this.aa = this.armature_ary[4];
                cc.log(this.aa);
            break;
        }
        this.setMouseValue(this.aa,this.chgArmature);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
    },

    start () {
        cc.log(Math.round(this.chgArmature.node.x)+','+Math.round(this.chgArmature.node.y))
        this.goAction('mouse_action2',0.5,-80,0);   //(252,245)
    },

    goAction:function(act,speed,sX,sY,gowhere){
        this.aa = act;
        var move1 = cc.moveBy(speed,cc.v2(sX,sY));
        if(typeof gowhere == undefined) this.setMouseValue(this.aa,this.chgArmature);
        else this.setMouseValue(this.aa,this.chgArmature,gowhere);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
        this.node.runAction(move1);
    },

    update (dt) {
        //cc.log(dt)

        if(this.dot1.contains(this.chgArmature.node.x,this.chgArmature.node.y)){
            this.goAction('mouse_action4',0.5,0,-42);
        }

        // if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == 245){ //(172,245)
        //     this.goAction('mouse_action4',0.5,0,-42);           
        // }else if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == 161){ //(172,161)
        //     this.goAction('mouse_action2',0.95,-172,0);
        // }else if(Math.round(this.chgArmature.node.x) == -172 && Math.round(this.chgArmature.node.y) == 161){ //(-172,161)
        //     this.goAction('mouse_action4',0.5,0,-42);
        // }else if(Math.round(this.chgArmature.node.x) == -172 && Math.round(this.chgArmature.node.y) == 77){ //(-172,77)
        //     this.goAction('mouse_action2',0.95,172,0,'right');
        // }else if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == 77){ //(172,77)
        //     this.goAction('mouse_action4',0.5,0,-40);
        // }else if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == -3){ //(172,-3)
        //     this.goAction('mouse_action2',0.95,-172,0);
        // }else if(Math.round(this.chgArmature.node.x) == -172 && Math.round(this.chgArmature.node.y) == -3){ //(-172,-3)
        //     this.goAction('mouse_action4',0.5,0,-42);
        // }else if(Math.round(this.chgArmature.node.x) == -172 && Math.round(this.chgArmature.node.y) == -87){ //(-172,-87)
        //     this.goAction('mouse_action2',0.95,172,0,'right');
        // }else if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == -87){ //(172,-87)
        //     this.goAction('mouse_action4',0.5,0,-100);
        // }else if(Math.round(this.chgArmature.node.x) == 172 && Math.round(this.chgArmature.node.y) == -287){ //(172,-327)
        //     this.moneyRight.active = false;
        //     this.aa = 'mouse_action3';
        //     this.setMouseValue(this.aa,this.chgArmature);
        //     this.chgArmature.armatureName = this.aa;
        //     this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        //     this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
        //     cc.log(Math.round(this.chgArmature.node.x)+','+Math.round(this.chgArmature.node.y))
        // }
        //cc.log(Math.round(this.chgArmature.node.x)+','+Math.round(this.chgArmature.node.y))
    },
});
