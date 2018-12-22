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

        wood:{
            default: null,
            type: cc.Node,
        },

        bgm:{
            default: null,
            type: cc.AudioClip
        },

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
        if(this.lr == this.sd) this.checkdot = new cc.Rect(170,-328,10,5);
        else this.checkdot = new cc.Rect(-175,-328,10,5);
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
        progress += dt * this.speed;
        progressBar.progress = progress;
    },

    xhrChangeData:function(){
        var xhr = new XMLHttpRequest();
        var xdx = this;
       
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                var resData = JSON.parse(response);
                xdx.hotLeft =  resData[0]/100;
                xdx.hotRight = resData[1]/100;
                xdx.barValueLeft.string = resData[0] + ' %';
                xdx.barValueRight.string = resData[1] + ' %';
          
                xdx._updateProgressBar(xdx.hotbar_left,xdx.hotLeft);
                xdx._updateProgressBar(xdx.hotbar_right,xdx.hotRight);
            }
        }

        xhr.open("POST", this.Xurl, true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var axa = 'asd=asd'
        xhr.send(axa);
    },

    // getResult:function(){
    //     var xhr = new XMLHttpRequest();
    //     var xdx = this;
       
    //     xhr.onreadystatechange = function(){
    //         if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                
    //         }
    //     }

    //     xhr.open("POST", this.Xurl, true);
    //     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //     var sdata={
    //         data: [1,2,3]
    //     };
    //     xhr.send(sdata);
    // },

    onLoad () {
        cc.sys.localStorage.setItem('sd','undefined');
        cc.sys.localStorage.setItem('lr','undefined');
        this.Sflag = false;
        this.Lflag = false;
        this.RestartFlag = false;
        this.timer = 0;

        //下注條
        this.hotLeft =  0;
        this.hotRight = 0;
        this.barValueLeft._string = '0 %'
        this.barValueRight._string = '0 %'

        this.Xurl = 'http://localhost/test.php';
        this.xhrTimer = 0;
        

        //bgm
        var audioID = cc.audioEngine.playMusic(this.bgm, true, 0.5);
        // if(cc.audioEngine.getState(0) == 1 && audioID != 0) cc.audioEngine.stop(audioID);
        

    },



    start () {
        var xdx = this;
        setTimeout(function(){
            xdx.sd = Math.floor(Math.random()*2);
            xdx.lr = Math.floor(Math.random()*2);
            var action = cc.fadeOut(4.0);
            xdx.wood.runAction(action)
        },10000)
        var all = Math.floor(Math.random()*100)
        this.hotLeft =  all/100;
        this.hotRight = (100-all)/100;

        //下注條
        cc.log(this.hotbar_left.progress)
        // this._updateProgressBar(this.hotbar_left,this.hotLeft);
        // this._updateProgressBar(this.hotbar_right,this.hotRight);

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

        if(this.xhrTimer > 5){
            this.xhrChangeData();
            this.xhrTimer = 0
        }
        this.xhrTimer += dt;
        this._updateProgressBar(this.hotbar_right,dt);
        this._updateProgressBar(this.hotbar_left,dt);
    },
    
});
