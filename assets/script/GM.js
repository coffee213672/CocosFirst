cc.Class({
    extends: cc.Component,
    properties: {
        speed: 1,
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

        hotbar_left:{
            default: null,
            type: cc.ProgressBar,
        },

        hotbar_right:{
            default: null,
            type: cc.ProgressBar,
        },

        barValueLeft:{
            default: null,
            type: cc.Label,
        },

        barValueRight:{
            default: null,
            type: cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.sys.localStorage.setItem('sd','undefined');
        cc.sys.localStorage.setItem('lr','undefined');
        this.Sflag = false;
        this.Lflag = false;
        this.RestartFlag = false;
        this.timer = 0;

        //下注條
        this.allpercent = Math.floor(Math.random()*100);
        this.hotLeft =  this.allpercent/100;
        this.hotRight = (100 - this.allpercent)/100;
        this.barValueLeft._string = Math.round(this.hotLeft * 100) +' %'
        this.barValueRight._string = Math.round(this.hotRight * 100) +' %'

        // this.Xurl = 'http://localhost/build/web-desktop/test.php';
        // cc.log(this.Xurl);
        this.xhrTimer = 0;
    },

    start () {
        var xdx = this;
        setTimeout(function(){
            xdx.sd = Math.floor(Math.random()*2);
            xdx.lr = Math.floor(Math.random()*2);
        },20000)
        this._updateProgressBar(this.hotbar_left,this.hotLeft);
        this._updateProgressBar(this.hotbar_right,this.hotRight);
    },

    update (dt) {
        this.checkData();

        if(this.lr == 0){
            if(this.containsX(this.mouse_left.x,this.mouse_left.y,this.checkdot)){
                this.timer += dt
            }
        }else if(this.lr == 1){
            if(this.containsX(this.mouse_right.x,this.mouse_right.y,this.checkdot)){
                this.timer += dt
            }
        }

        if(this.timer > 5){
            this.RestartFlag = true
            this.gameOver();
            return;
        }

        // if(this.xhrTimer > 5){
        //     this.xhrChangeData();
        //     this.xhrTimer = 0
        // }
        // this.xhrTimer += dt;
        // this._updateProgressBar(this.testX,dt);
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
    },

    _updateProgressBar: function(progressBar, dt){

        var progress = progressBar.progress;
        progress = dt * this.speed;
        progressBar.progress = progress;
    },

    xhrChangeData:function(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                cc.log("http data返回:", response);
                //var resData = JSON.parse(response);
                
            }
        }

        xhr.open("POST", this.Xurl, true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var sdata={
            data: [1,2,3]
        };
        cc.log('post data:', sdata);
        xhr.send(sdata);
    },
});
