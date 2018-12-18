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
                this.dotz = new cc.Rect(-253.5,244.5,3,3);
                this.dot0 = new cc.Rect(-192.5,244.5,3,3);
                this.dot1 = new cc.Rect(-173,243,3,3);
                this.dot2 = new cc.Rect(-173,160,3,3);
                this.dot3 = new cc.Rect(171,160,3,3);
                this.dot4 = new cc.Rect(171,76,3,3);
                this.dot5 = new cc.Rect(-173,76,3,3);
                this.dot6 = new cc.Rect(-173,-4,3,3);
                this.dot7 = new cc.Rect(171,-4,3,3);
                this.dot8 = new cc.Rect(171,-288,3,3);
            break;
            case 2:
                this.dotz = new cc.Rect(251.5,244.5,3,3);
                this.dot0 = new cc.Rect(191.5,244.5,3,3);
                this.dot1 = new cc.Rect(171,243,3,3);
                this.dot2 = new cc.Rect(171,160,3,3);
                this.dot3 = new cc.Rect(-173,160,3,3);
                this.dot4 = new cc.Rect(-173,76,3,3);
                this.dot5 = new cc.Rect(171,76,3,3);
                this.dot6 = new cc.Rect(171,-4,3,3);
                this.dot7 = new cc.Rect(-173,-4,3,3);
                this.dot8 = new cc.Rect(-173,-288,3,3);
            break;
            case 3:
                this.dotz = new cc.Rect(-253.5,244.5,3,3);
                this.dot0 = new cc.Rect(-192.5,244.5,3,3);
                this.dot1 = new cc.Rect(-173,244,3,3);
                this.dot2 = new cc.Rect(-173,160,3,3);
                this.dot3 = new cc.Rect(171,160,3,3);
                this.dot4 = new cc.Rect(171,76,3,3);
                this.dot5 = new cc.Rect(-173,76,3,3);
                this.dot6 = new cc.Rect(-173,-4,3,3);
                this.dot7 = new cc.Rect(171,-4,3,3);
                this.dot8 = new cc.Rect(171,-88,3,3);
                this.dot9 = new cc.Rect(-173,-88,3,3);
                this.dot10 = new cc.Rect(-173,-288,3,3);
            break;
            default:
                this.dotz = new cc.Rect(251.5,244.5,3,3);
                this.dot0 = new cc.Rect(191.5,244.5,3,3);
                this.dot1 = new cc.Rect(171,244,3,3);
                this.dot2 = new cc.Rect(171,160,3,3);
                this.dot3 = new cc.Rect(-173,160,3,3);
                this.dot4 = new cc.Rect(-173,76,3,3);
                this.dot5 = new cc.Rect(171,76,3,3);
                this.dot6 = new cc.Rect(171,-4,3,3);
                this.dot7 = new cc.Rect(-173,-4,3,3);
                this.dot8 = new cc.Rect(-173,-88,3,3);
                this.dot9 = new cc.Rect(171,-88,3,3);
                this.dot10 = new cc.Rect(171,-288,3,3);
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
    
    startAction:function(lr){
        if(lr == 1) {
            this.goAction('mouse_action2',0.5,-60,0);
        }else{ 
            this.goAction('mouse_action2',0.5,60,0,'right');
        }
    },

    goAction:function(Mode){
        switch (Mode){
            case 1:
                var move = cc.sequence(cc.moveBy(0.8,80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.8,0,-284));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                break;
            case 2:
                var move = cc.sequence(cc.moveBy(0.8,-80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.8,0,-284));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                break;
            case 3:
                var move = cc.sequence(cc.moveBy(0.8,80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.5,0,-200));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                break;
            default:
                var move = cc.sequence(cc.moveBy(0.8,-80,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.5,0,-200));
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
        }
        this.AnimFlag = true;
    },

    chgAnimation:function(anim,gowhere){
        this.aa = anim;
        if(typeof gowhere == undefined) this.setMouseValue(this.aa,this.chgArmature);
        else this.setMouseValue(this.aa,this.chgArmature,gowhere);
        this.chgArmature.armatureName = this.aa;
        this.chgArmature.playAnimation(this.chgArmature.getAnimationNames(this.aa)[0], 9);
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
    },

    allAction:function(Mode){
        switch (Mode){
            case 1:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dotz)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.chgAnimation('mouse_action1','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.moneyRight.active = false;
                    this.chgAnimation('mouse_action3');
                }
            break;
            case 2:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dotz)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.chgAnimation('mouse_action1');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.moneyLeft.active = false;
                    this.chgAnimation('mouse_action3');
                }
            break;
            case 3:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dotz)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.chgAnimation('mouse_action1','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot9)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot10)){
                    this.moneyLeft.active = false;
                    this.chgAnimation('mouse_action3');
                }
            break;
            default:
                if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dotz)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot0)){
                    this.chgAnimation('mouse_action1');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot1)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot2)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot3)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot4)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot5)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot6)){
                    this.chgAnimation('mouse_action2');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot7)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot8)){
                    this.chgAnimation('mouse_action2','right');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot9)){
                    this.chgAnimation('mouse_action4');
                }else if(this.containsX(this.chgArmature.node.x,this.chgArmature.node.y,this.dot10)){
                    this.moneyRight.active = false;
                    this.chgAnimation('mouse_action3');
                }
            break;
        }
        
    },

    containsX : function (x,y,comXY) {
        return (comXY.x <= x && comXY.x + comXY.width >= x && comXY.y <= y && comXY.y + comXY.height >=y);
    },

    firstraycast:function(){
        var p1 = cc.v2(this.actionmouse.x+411,this.actionmouse.y+375)
        if(this.distance == 0){ 
            if(this.lr == 1){
                this.chgAnimation('mouse_action2');
                var p2 = cc.v2(this.actionmouse.x-50+411,this.actionmouse.y+375)
            }else{
                this.chgAnimation('mouse_action2','right');
                var p2 = cc.v2(this.actionmouse.x+50+411,this.actionmouse.y+375)
            }
            var results = this.phyM.rayCast(p1,p2,cc.RayCastType.Closest);
            this.moveFlag = true;

            if(results.length > 0){
                if(this.colliderName != results[0].collider.node._name){
                    var point = results[0].point;
                    this.colliderName = results[0].collider.node._name;
                    var actionX = cc.moveBy(0.5,cc.v2(point.x-this.node.x-411,point.y-this.node.y-375));   
                    this.node.runAction(actionX);
    
                    this.distance = point.x-this.node.x-411 + point.y-this.node.y-375;
                    // cc.log(this.distance);
                }
            }
        }else{
            if(Math.abs(this.distance) < 50){
                if(this.distance > 0) {
                    this.chgAnimation('mouse_action1','right');
                    var p2 = cc.v2(this.actionmouse.x+this.distance+411,this.actionmouse.y+375);
                }else{ 
                    this.chgAnimation('mouse_action1');
                    var p2 = cc.v2(this.actionmouse.x+this.distance+411,this.actionmouse.y+375);
                }
                var results = this.phyM.rayCast(p1,p2,cc.RayCastType.Closest);
                cc.log(this.distance)
            }else{
                switch (this.howtomove){
                    case 0:  //0:往下 1:往左右
                        this.chgAnimation('mouse_action1');
                        var p2 = cc.v2(this.actionmouse.x+411,this.actionmouse.y+this.distance+375);
                        var results = this.phyM.rayCast(p1,p2,cc.RayCastType.Closest);
                        this.howtomove = 1;
                        cc.log('asd')
                    break;
                    case 1:
                        if(this.distance > 0) this.chgAnimation('mouse_action2','right');
                        else this.chgAnimation('mouse_action2');
                        var p2 = cc.v2(this.actionmouse.x+this.distance+411,this.actionmouse.y+this.distance+375);
                        var results = this.phyM.rayCast(p1,p2,cc.RayCastType.Closest);
                        this.howtomove = 0;
                        cc.log('zxc')
                    break;
                }
                
            }

            if(results.length > 0){
                if(this.colliderName != results[0].collider.node._name){
                    var point = results[0].point;
                    this.colliderName = results[0].collider.node._name;
                    var actionX = cc.moveBy(0.5,cc.v2(point.x-this.node.x-411,point.y-this.node.y-375));   
                    this.node.runAction(actionX);
    
                    this.distance = point.x-this.node.x-411 + point.y-this.node.y-375;
                    cc.log(results[0].collider.node._name);
                }
            }
            
        }
        
        
    },

    onLoad () {
        this.chgArmature = this.getComponent(dragonBones.ArmatureDisplay);
        this.armature_ary = this.chgArmature.getArmatureNames();
        this.aa = '';
        this.Xflag = false;
        this.AnimFlag = false;

        this.moveFlag = false;
        this.distance = 0; //移動距離
        this.howtomove = 0; //0:往下 1:往左右
        this.colliderName = '';

        this.phyM = cc.director.getPhysicsManager();
        this.phyM.enabled = true;
        this.phyM.enabledDrawBoundingBox = true
        this.phyM.enabledAccumulator = true

        this.phyM.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
    },

    start () {
       
    },

    update (dt) {
        if(this.Xflag != true) this.checkDataMouse();
        //if(typeof cc.sys.localStorage.getItem('sd') != 'undefined' && typeof cc.sys.localStorage.getItem('lr') != 'undefined' && this.AnimFlag == true) //this.allAction(this.wMode);
        if(typeof cc.sys.localStorage.getItem('sd') != 'undefined' && typeof cc.sys.localStorage.getItem('lr') != 'undefined' && this.moveFlag == true) this.firstraycast();
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
            var xx = this.wMode
            this.getDot(xx);
            this.Xflag = true
            this.firstraycast();
            // this.goAction(this.wMode)
            //this.startAction(this.lr);
        }
    },
});
