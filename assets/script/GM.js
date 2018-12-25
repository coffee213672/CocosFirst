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
            if(this.sd === 3) this.stair_d.active = false;
            else this.stair_s.active = false;
            cc.sys.localStorage.setItem('sd',this.sd);
            this.Sflag = true;
        }

        if(typeof this.lr != 'undefined' && this.Lflag == false){
            if(this.lr === 1) {
                this.arrow_right.active = false;
                // this.mouse_right.active = false;
                this.label_right.enabled = false;
            }else{
                this.arrow_left.active = false;
                // this.mouse_left.active = false;
                this.label_left.enabled = false;
            }
            cc.sys.localStorage.setItem('lr',this.lr);
            this.Lflag = true;
        }
    },

    containsX : function (x,y,comXY) {
        return (comXY.x <= x && comXY.x + comXY.width >= x && comXY.y <= y && comXY.y + comXY.height >=y);
    },
    
    gameOver: function () {
        if(this.RestartFlag == true){
            this.RestartFlag = false;
            this.timer = 0;
            // var superInfo = cc.find('superInfo');
            // superInfo.audioIO = Math.floor(Math.random()*2);
            cc.director.loadScene('game');
        }
    },

    _updateProgressBar: function(progressBar, dt){

        var progress = progressBar.progress;
        var countX = dt * 100;
        for(var i=0;i<countX;i++){
            progress += (i / 100) * this.speed;
            this.wait(progressBar,progress)

        }
        
        
    },

    wait:function(progressBar,progress){
        setTimeout(function(){
            progressBar.progress = progress;
        },100)
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
        
        //super
        var superInfo = cc.find('superInfo');
        if(typeof superInfo.audioIO == 'undefined' || superInfo.audioIO == 0){
            superInfo.audioIO = 0;
            this.audioID = cc.audioEngine.playMusic(this.bgm, true, 0.5);
        }else if(superInfo.audioIO == 1){
            this.audioID = cc.audioEngine.playMusic(this.bgm, true, 0.5);
            cc.audioEngine.pauseMusic();
        }
        this.hotbar_left.progress = 0.4

    },



    start () {
        var xdx = this;
        setTimeout(function(){
            xdx.lr = Math.floor(Math.random()*2)+1;
        },10000)

        setTimeout(function(){
            xdx.sd = Math.floor(Math.random()*2)+3;
            xdx.wood.runAction(cc.fadeOut(4.0))
        },20000)
        
        var all = Math.floor(Math.random()*100)
        this.hotLeft =  all/100;
        this.hotRight = (100-all)/100;

        //下注條
        // this._updateProgressBar(this.hotbar_left,this.hotLeft);
        // this._updateProgressBar(this.hotbar_right,this.hotRight);

    },

    update (dt) {
        this.checkData();

        if(this.lr == 1){
            if(this.mouse_left.x == 0 &&this.mouse_left.y == 0){
                this.timer += dt
            }
        }else if(this.lr == 2){
            if(this.mouse_right.x == 0 && this.mouse_right.y == 0){
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

        if(cc.find('superInfo').audioIO == 1){
            cc.audioEngine.pauseMusic();
        }else if(cc.find('superInfo').audioIO == 0){
            cc.audioEngine.resumeMusic(this.audioID);
        }
        // cc.log(this.hotbar_left.progress)
        // this._updateProgressBar(this.hotbar_right,dt);
        // this._updateProgressBar(this.hotbar_left,dt);
    },
    
});
