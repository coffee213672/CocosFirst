cc.Class({
    extends: cc.Component,

    properties: {
        stair_s: {
            default: null,
            type: cc.Node,
        },

        stair_d: {
            default: null,
            type: cc.Node,
        },

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
        period:{
            default: null,
            type: cc.Label,
        },
        single_three:{
            default: null,
            type: cc.Node,
        },

        single_four:{
            default: null,
            type: cc.Node,
        },
        double_three:{
            default: null,
            type: cc.Node,
        },
        double_four:{
            default: null,
            type: cc.Node,
        },
        result_single:{
            default: null,
            type: cc.Node,
        },
        result_double:{
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
        cc.sys.localStorage.setItem('chgflag',false)
        if(LR == 1){
            if(this.whichmouse == 'mouse_left'){
                this.controlmask()
                this.chgAnimation('mouse_action2','right');
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(cc.sequence(cc.moveBy(0.8,80,-5),cc.callFunc(function(){this.chgAnimation('mouse_action1','right');},this)));
            }else{
                var move =  cc.sequence(cc.moveBy(0.8,200,0),cc.callFunc(function(){this.getComponent(dragonBones.ArmatureDisplay).node.active = false},this))
                this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                this.chgAnimation('mouse_action2','right');
            }
        }else{
            if(this.whichmouse == 'mouse_right_all'){
                this.controlmask()
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
                    this.controlwoodmaskS()
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.8,0,-268),cc.callFunc(function(){
                        this.moneyRight.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                    },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            case 2:
                if(this.whichmouse == 'mouse_right_all'){
                    this.controlwoodmaskS()
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.8,0,-268),cc.callFunc(function(){
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.moneyLeft.active = false;
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                    },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            case 3:
                if(this.whichmouse == 'mouse_left'){
                    this.controlwoodmaskD()
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.5,0,-185),cc.callFunc(function(){
                        this.moneyLeft.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                        },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
                break;
            case 4:
                if(this.whichmouse == 'mouse_right_all'){
                    this.controlwoodmaskD()
                    var move = cc.sequence(cc.moveBy(0.25,0,-79),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,-344,0),cc.moveBy(0.25,0,-84),cc.moveBy(1,344,0),cc.moveBy(0.5,0,-185),cc.callFunc(function(){
                        this.moneyRight.active = false;
                        var superInfo = cc.find('superInfo');
                        if(superInfo.audioIO == 0) cc.audioEngine.playMusic(this.getmusic, false, 0.5);
                        this.showresult(this.getComponent(dragonBones.ArmatureDisplay))
                        },this));
                    this.getComponent(dragonBones.ArmatureDisplay).node.runAction(move);
                    this.chgAnimation('mouse_action8');
                }
            break;
        }
    },

    showresult:function(obj){
        var xdx = this;
        setTimeout(function(){
            if(obj.node.x < 0){
                obj.node.x = 0;
                obj.node.y = 0;
                obj.node.active = false;
                xdx.result_single.active = true
                xdx.result_single.getComponent(dragonBones.ArmatureDisplay).playAnimation('mouse_action6');
                xdx.period.string = '期數 '+cc.sys.localStorage.getItem('sn')
            }else{
                obj.node.x = 0;
                obj.node.y = 0;
                obj.node.active = false;
                xdx.result_double.active = true
                xdx.result_double.getComponent(dragonBones.ArmatureDisplay).playAnimation('mouse_action7');
                xdx.period.string = '期數 '+cc.sys.localStorage.getItem('sn')
                xdx.period.node.y = -53;
            }

            xdx.period.node.active = true
            if(xdx.sd == 3 && xdx.lr == 1) {
                xdx.double_three.active = true;
                xdx.double_three.setSiblingIndex(50);
            }else if(xdx.sd == 3 && xdx.lr == 2) {
                xdx.single_three.active = true;
                xdx.single_three.setSiblingIndex(50);
            }else if(xdx.sd == 4 && xdx.lr == 1) {
                xdx.single_four.active = true;
                xdx.single_four.setSiblingIndex(50);
            }else {
                xdx.double_four.active = true;
                xdx.double_four.setSiblingIndex(50);
            }
            xdx.period.node.setSiblingIndex(51);
        },2000)
    },

    chgAnimation:function(anim,gowhere){
        this.aa = anim;
        if(typeof gowhere == undefined) this.setMouseValue(this.aa,this.chgArmature);
        else this.setMouseValue(this.aa,this.chgArmature,gowhere);
        this.chgArmature.armatureName = this.aa;
        this.getComponent(dragonBones.ArmatureDisplay).playAnimation(this.aa);
    },

    controlmask:function(){
        var mh =  this.stair_s._parent.height
        var countsq = 0;
        for(var i=mh;i>=100;i--){
            this.controlmasktimeout(i,countsq)
            countsq += 1;
        }
    },

    controlmasktimeout:function(MaskHeight,delayT){
        var xdx = this;
        setTimeout(function(){
            xdx.stair_s._parent.height = MaskHeight
        },50+delayT*10)
    },

    controlwoodmaskD:function(){
        var wh =  this.stair_d._parent.height
        var countsq = 0;
        for(var i=wh;i>=0;i--){
            this.controlwoodtimeoutD(i,countsq)
            countsq += 1;
        }
    },

    controlwoodtimeoutD:function(WoodHeight,delayT){
        var xdx = this;
        setTimeout(function(){
            xdx.stair_d._parent.height = WoodHeight
        },50+delayT*30)
    },


    controlwoodmaskS:function(){
        var wh =  this.stair_d._parent.height
        var countsq = 0;
        for(var i=wh;i>=0;i--){
            this.controlwoodtimeoutS(i,countsq)
            countsq += 1;
        }
    },

    controlwoodtimeoutS:function(WoodHeight,delayT){
        var xdx = this;
        setTimeout(function(){
            xdx.stair_s._parent.height = WoodHeight
        },50+delayT*30)
    },

    onLoad () {
        this.chgArmature = this.getComponent(dragonBones.ArmatureDisplay);
        this.aa = '';
        this.Xflag = false;
        this.whichmouse = this.getComponent(dragonBones.ArmatureDisplay).node.name;
        this.ZactionFlag = false;
        this.period.node.active = false


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
            if(absY < 170){
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
        if(cc.sys.localStorage.getItem('lr') != 'undefined' && this.lr != cc.sys.localStorage.getItem('lr')) this.lr = cc.sys.localStorage.getItem('lr');
        if(cc.sys.localStorage.getItem('sd') != 'undefined' && this.sd != cc.sys.localStorage.getItem('sd')) this.sd = cc.sys.localStorage.getItem('sd');
        if(this.ZactionFlag == false) this.checkDataMouse(this.lr);
        if(this.Xflag == false) this.checkDataMouse2(this.sd)
    },

    checkDataMouse:function(leftright){
        if(leftright != undefined && leftright != '' && this.ZactionFlag == false){
            this.ZactionFlag = true
            // 0:左邊老鼠   1:右邊老鼠
            if(leftright == 1) this.actionmouse = this.mouse_left
            else this.actionmouse = this.mouse_right;
            this.goActionZero(leftright);
        }
    },

    checkDataMouse2:function(singledouble){
        if(singledouble != undefined && singledouble != ''){
            if(singledouble == 3 && this.lr == 1) this.wMode = 1;
            else if(singledouble == 3 && this.lr == 2) this.wMode = 2;
            else if(singledouble == 4 && this.lr == 1) this.wMode = 3;
            else if(singledouble == 4 && this.lr == 2) this.wMode = 4;
            this.goAction(this.wMode)
            this.Xflag = true
        }
    },
});
