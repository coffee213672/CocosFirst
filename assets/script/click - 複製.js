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

        路線1： 
                第零個切換動作座標點(-192,245)
                第一個切換動作座標點(-172,245)
                第二個切換動作座標點(-172,161)
                第三個切換動作座標點(172,161)
                第四個切換動作座標點(172,77)
                第五個切換動作座標點(-172,77)
                第六個切換動作座標點(-172,-3)
                第七個切換動作座標點(172,-3)
                第八個切換動作座標點(172,-287)

        路線2：
                第零個切換動作座標點(192,245)
                第一個切換動作座標點(172,245)
                第二個切換動作座標點(172,161)
                第三個切換動作座標點(-172,161)
                第四個切換動作座標點(-172,77)
                第五個切換動作座標點(172,77)
                第六個切換動作座標點(172,-3)
                第七個切換動作座標點(-172,-3)
                第八個切換動作座標點(-172,-287)

        路線3：
                第零個切換動作座標點(-192,245)
                第一個切換動作座標點(-172,245)
                第二個切換動作座標點(-172,161)
                第三個切換動作座標點(172,161)
                第四個切換動作座標點(172,77)
                第五個切換動作座標點(-172,77)
                第六個切換動作座標點(-172,-3)
                第七個切換動作座標點(172,-3)
                第八個切換動作座標點(172,-87)
                第九個切換動作座標點(-172,-87)
                第十個切換動作座標點(-172,-287)

        路線4：
                第零個切換動作座標點(192,245)
                第一個切換動作座標點(172,245)
                第二個切換動作座標點(172,161)
                第三個切換動作座標點(-172,161)
                第四個切換動作座標點(-172,77)
                第五個切換動作座標點(172,77)
                第六個切換動作座標點(172,-3)
                第七個切換動作座標點(-172,-3)
                第八個切換動作座標點(-172,-87)
                第九個切換動作座標點(172,-87)
                第十個切換動作座標點(172,-287)
    */

    getDot:function(xx){
         switch (xx){
            case 1:
                this.dot0 = new cc.Rect(-192.5,244.5,1,1);
                this.dot1 = new cc.Rect(-172.5,244.5,1,1);
                this.dot2 = new cc.Rect(-172.5,160.5,1,1);
                this.dot3 = new cc.Rect(171.5,160.5,1,1);
                this.dot4 = new cc.Rect(171.5,76.5,1,1);
                this.dot5 = new cc.Rect(-172.5,76.5,1,1);
                this.dot6 = new cc.Rect(-172.5,-3.5,1,1);
                this.dot7 = new cc.Rect(171.5,-3.5,1,1);
                this.dot8 = new cc.Rect(171.5,-287.5,2,2);
            break;
            case 2:
                this.dot0 = new cc.Rect(191.5,244.5,1,1);
                this.dot1 = new cc.Rect(171.5,244.5,1,1);
                this.dot2 = new cc.Rect(171.5,160.5,1,1);
                this.dot3 = new cc.Rect(-172.5,160.5,1,1);
                this.dot4 = new cc.Rect(-172.5,76.5,1,1);
                this.dot5 = new cc.Rect(171.5,76.5,1,1);
                this.dot6 = new cc.Rect(171.5,-3.5,1,1);
                this.dot7 = new cc.Rect(-172.5,-3.5,1,1);
                this.dot8 = new cc.Rect(-172.5,-287.5,2,2);
            break;
            case 3:
                this.dot0 = new cc.Rect(-192.5,244.5,1,1);
                this.dot1 = new cc.Rect(-172.5,244.5,1,1);
                this.dot2 = new cc.Rect(-172.5,160.5,1,1);
                this.dot3 = new cc.Rect(171.5,160.5,1,1);
                this.dot4 = new cc.Rect(171.5,76.5,1,1);
                this.dot5 = new cc.Rect(-172.5,76.5,1,1);
                this.dot6 = new cc.Rect(-172.5,-3.5,1,1);
                this.dot7 = new cc.Rect(171.5,-3.5,1,1);
                this.dot8 = new cc.Rect(171.5,-87.5,1,1);
                this.dot9 = new cc.Rect(-172.5,-87.5,1,1);
                this.dot10 = new cc.Rect(-172.5,-287.5,1,1);
            break;
            default:
                this.dot0 = new cc.Rect(191.5,244.5,1,1);
                this.dot1 = new cc.Rect(171.5,244.5,1,1);
                this.dot2 = new cc.Rect(171.5,160.5,1,1);
                this.dot3 = new cc.Rect(-172.5,160.5,1,1);
                this.dot4 = new cc.Rect(-172.5,76.5,1,1);
                this.dot5 = new cc.Rect(171.5,76.5,1,1);
                this.dot6 = new cc.Rect(171.5,-3.5,1,1);
                this.dot7 = new cc.Rect(-172.5,-3.5,1,1);
                this.dot8 = new cc.Rect(-172.5,-87.5,1,1);
                this.dot9 = new cc.Rect(171.5,-87.5,1,1);
                this.dot10 = new cc.Rect(171.5,-287.5,1,1);
         }
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
                    //tn.node.y = 245;
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
                //tn.node.y = 245;
            break;
            case 'mouse_action3':
                tn.node.scaleX = 0.5;
                tn.node.scaleY = 0.5;
                tn.node.y = tn.node.y - 40
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
            break;
            case cc.macro.KEY.e:
                this.aa = this.armature_ary[1];
            break;
            case cc.macro.KEY.a:
                this.aa = this.armature_ary[2];
            break;
            case cc.macro.KEY.s:
                this.aa = this.armature_ary[3];
            break;
            case cc.macro.KEY.d:
                this.aa = this.armature_ary[4];
            break;
        }
        this.setMouseValue(this.aa,this.chgArmature);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
    },

    startAction:function(lr){
        if(lr == 1) this.goAction('mouse_action2',0.5,-60,0);
        else this.goAction('mouse_action2',0.5,60,0,'right');
    },

    goAction:function(act,speed,sX,sY,gowhere){
        this.aa = act;
        var move1 = cc.speed(cc.moveBy(speed,cc.v2(sX,sY)),0.5);
        if(typeof gowhere == undefined) this.setMouseValue(this.aa,this.chgArmature);
        else this.setMouseValue(this.aa,this.chgArmature,gowhere);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
        this.node.runAction(move1);
        // cc.log(this.node.x+','+this.node.y)
    },

    allAction:function(Mode){
        switch (Mode){
            case 1:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.goAction('mouse_action1',1,4,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.goAction('mouse_action4',0.5,0,-40);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.goAction('mouse_action4',1,0,-142);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.moneyRight.active = false;
                    this.aa = 'mouse_action3';
                    this.setMouseValue(this.aa,this.chgArmature);
                    this.chgArmature.armatureName = this.aa;
                    this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
                    this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
                }
            break;
            case 2:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.goAction('mouse_action1',1,-4,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.goAction('mouse_action4',0.5,0,-40);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.goAction('mouse_action4',1,0,-142);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.moneyLeft.active = false;
                    this.aa = 'mouse_action3';
                    this.setMouseValue(this.aa,this.chgArmature);
                    this.chgArmature.armatureName = this.aa;
                    this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
                    this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
                }
            break;
            case 3:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.goAction('mouse_action1',1,4,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.goAction('mouse_action4',0.5,0,-40);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot9)){
                    this.goAction('mouse_action4',1,0,-100);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot10)){
                    this.moneyLeft.active = false;
                    this.aa = 'mouse_action3';
                    this.setMouseValue(this.aa,this.chgArmature);
                    this.chgArmature.armatureName = this.aa;
                    this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
                    this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
                }
            break;
            default:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.goAction('mouse_action1',1,-4,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.goAction('mouse_action4',0.5,0,-40);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.goAction('mouse_action2',0.95,-172,0);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.goAction('mouse_action4',0.5,0,-42);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.goAction('mouse_action2',0.95,172,0,'right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot9)){
                    this.goAction('mouse_action4',1,0,-100);
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot10)){
                    this.moneyRight.active = false;
                    this.aa = 'mouse_action3';
                    this.setMouseValue(this.aa,this.chgArmature);
                    this.chgArmature.armatureName = this.aa;
                    this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
                    this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
                }
            break;
        }
        
    },

    containsX : function (x,y,comXY) {
        return (comXY.x <= x && comXY.x + comXY.width >= x && comXY.y <= y && comXY.y + comXY.height >=y);
    },

    onLoad () {
        this.chgArmature = this.getComponent(dragonBones.ArmatureDisplay);
        this.armature_ary = this.chgArmature.getArmatureNames();
        this.aa = '';
        this.Xflag = false;
    },

    start () {
        // this.startAction(this.lr)

    },

    update (dt) {
        //cc.log(dt)
        if(this.Xflag != true) this.checkDataMouse();
        if(typeof cc.sys.localStorage.getItem('sd') != 'undefined' && typeof cc.sys.localStorage.getItem('lr') != 'undefined' && this.Xflag == true) this.allAction(this.wMode);    
        //cc.log(cc.sys.localStorage.getItem('sd')+','+cc.sys.localStorage.getItem('lr'))
        
    },

    checkDataMouse:function(){
        if(cc.sys.localStorage.getItem('sd') != 'undefined' && cc.sys.localStorage.getItem('lr') != 'undefined'){
            this.sd = cc.sys.localStorage.getItem('sd'); // 0:少一階梯子 1:正常
            this.lr = cc.sys.localStorage.getItem('lr'); // 0:左邊老鼠   1:右邊老鼠
            if(this.sd == 0 && this.lr == 0) this.wMode = 1;
            else if(this.sd == 0 && this.lr == 1) this.wMode = 2;
            else if(this.sd == 1 && this.lr == 0) this.wMode = 3;
            else this.wMode = 4;
            var xx = this.wMode
            this.getDot(xx);
            this.Xflag = true
            this.startAction(this.lr);
        }
    },
});
