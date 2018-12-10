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

        arrow_left: {
            default: null,
            type: cc.Node,
        },

        arrow_right: {
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

        label_left:{
            default: null,
            type: cc.Label,
        },

        label_right:{
            default: null,
            type: cc.Label,
        },

        coin: {
            default: null,
            type: cc.Animation,
        },

        diamond: {
            default: null,
            type: cc.Animation,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // var xdx = this;
        // if(sd === 0) xdx.stair_d.active = false;
        // else xdx.stair_s.active = false;

        // if(lr === 0) {
        //     xdx.arrow_right.active = false;
        //     xdx.mouse_right.active = false;
        //     xdx.label_right.enabled = false;
        // }else{
        //     xdx.arrow_left.active = false;
        //     xdx.mouse_left.active = false;
        //     xdx.label_left.enabled = false;
        // }
        cc.sys.localStorage.setItem('sd','undefined');
        cc.sys.localStorage.setItem('lr','undefined');
        this.Sflag = false;
        this.Lflag = false;
        this.RestartFlag = false;
 
        this.timer = 0;
    },

    start () {
        var xdx = this;
        setTimeout(function(){
            xdx.sd = Math.floor(Math.random()*2);
            xdx.lr = Math.floor(Math.random()*2);
        },3000)
    },

    update (dt) {
        this.checkData();

        if(this.lr == 0){
            //cc.log(this.mouse_left.x+','+this.mouse_left.y)
            if(this.containsX(this.mouse_left.x,this.mouse_left.y,this.checkdot)){
                this.timer += dt
            }
        }else if(this.lr == 1){
            //cc.log(this.mouse_right.x+','+this.mouse_right.y)
            if(this.containsX(this.mouse_right.x,this.mouse_right.y,this.checkdot)){
                this.timer += dt
            }
        }

        if(this.timer > 5){
            this.RestartFlag = true
            this.gameOver();
            return;
         }

    },

    checkData:function(){
        if(typeof this.sd != 'undefined' && this.Sflag == false){
            if(this.sd === 0) this.stair_d.active = false;
            else this.stair_s.active = false;
            cc.sys.localStorage.setItem('sd',this.sd);
            this.Sflag = true;
        }

        if(typeof this.lr != 'undefined' && this.Lflag == false){
            if(this.lr === 0) {
                this.arrow_right.active = false;
                this.mouse_right.active = false;
                this.label_right.enabled = false;
            }else{
                this.arrow_left.active = false;
                this.mouse_left.active = false;
                this.label_left.enabled = false;
            }
            cc.sys.localStorage.setItem('lr',this.lr);
            this.Lflag = true;
        }
        if(this.lr == this.sd) this.checkdot = new cc.Rect(171,-327,2,2);
        else this.checkdot = new cc.Rect(-173,-327,2,2);
    },

    containsX : function (x,y,comXY) {
        return (comXY.x <= x && comXY.x + comXY.width >= x && comXY.y <= y && comXY.y + comXY.height >=y);
    },
    
    gameOver: function () {
        if(this.RestartFlag == true){
            this.RestartFlag = false;
            this.timer = 0;
            cc.director.loadScene('game');
        }
    }
});
