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
            type: cc.Node,
        },

        label_right:{
            default: null,
            type: cc.Node,
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

        draw_title:{
            default: null,
            type: cc.Node,
        },

        over_black: {
            default: null,
            type: cc.Node,
        },
        period_top:{
            default: null,
            type: cc.Label,
        }
    },

    checkData:function(){
        if(this.sn != 0){
            this.period_top_content = this.sn
            this.period_top.string = '第'+this.sn+'期'; 
        }
        if(this.sd != 0 && this.Sflag == false){
            if(this.sd == 4){
                this.stair_s.active = false;
                this.stair_d.active = true;
            }
            this.wood.runAction(cc.fadeOut(4.0))
            cc.sys.localStorage.setItem('sd',this.sd);
            this.Sflag = true;
        }

        if(this.lr != 0 && this.Lflag == false){
            if(this.lr == 1) {
                this.arrow_right.active = false;
                // this.mouse_right.active = false;
                this.label_right.active = false;
            }else{
                this.arrow_left.active = false;
                // this.mouse_left.active = false;
                this.label_left.active = false;
            }
            this.stair_s.active = true;
            this.stair_s.opacity = 0;
            this.stair_s.runAction(cc.fadeIn(2));
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

    _updateProgressBar: function(progressBar, newvalue, barvalue, bs, oldvalue){ //哪條進度條,數值,哪條的顯示label
        // var countX = newvalue * 100;
        if(bs == 'b'){
            cc.log(this.oldleft+'+'+newvalue)
            for(var i=this.oldleft;i<=newvalue;i++){
                this.wait(progressBar,i,barvalue)
            }
            this.oldleft = newvalue
            this.olflag = false

        }else{
            cc.log(this.oldleft+'-'+newvalue)
            for(var i=this.oldleft;i>=newvalue;i--){
                this.wait(progressBar,i,barvalue)
            }
            this.oldleft  = newvalue
            this.olflag = false

        }
        
        
    },

    wait:function(progressBar,percent,barvalue){
        setTimeout(function(){
            progressBar.progress = (percent / 100);
            barvalue.string = percent+' %';
            cc.log(barvalue.string)
        },100 + (percent*30))
    },

    onLoad () {
        cc.sys.localStorage.setItem('sd','undefined');
        cc.sys.localStorage.setItem('lr','undefined');
        cc.sys.localStorage.setItem('pbl','undefined');
        cc.sys.localStorage.setItem('pbr','undefined');
        // cc.sys.localStorage.setItem('sn','undefined');
        this.Sflag = false;
        this.Lflag = false;
        this.RestartFlag = false;
        this.timer = 0;
        this.draw_title.active = false
        this.over_black.active = false
        this.period_top_content = '';
        cc.log(this.period_top)

        this.sn = 0;
        this.lr = 0;
        this.sd = 0;
        
        //進度條數字
        this.oldleft = 0;
        this.oldright = 0; 
        this.olflag = false;
        this.orflag = false;

        //梯子
        this.stair_d.active = false
        this.stair_s.active = false

        //下注條
        this.hotLeft =  0;
        this.hotRight = 0;
        this.barValueLeft._string = '0 %'
        this.barValueRight._string = '0 %'

        
        //super
        var superInfo = cc.find('superInfo');
        if(cc.sys.localStorage.getItem('audioIO') == 1) superInfo.audioIO = 1
        if(typeof superInfo.audioIO == 'undefined' || superInfo.audioIO == 0){
            superInfo.audioIO = 0;
            this.audioID = cc.audioEngine.playMusic(this.bgm, true, 0.5);
        }else if(superInfo.audioIO == 1){
            this.audioID = cc.audioEngine.playMusic(this.bgm, true, 0.5);
            cc.audioEngine.pauseMusic();
        }

        this.timeTT = 0
    },



    start () {
        // var xdx = this;
        // setTimeout(function(){
        //     xdx.lr = Math.floor(Math.random()*2)+1;
        // },5000)

        // setTimeout(function(){
        //     xdx.sd = Math.floor(Math.random()*2)+3;
        //     xdx.wood.runAction(cc.fadeOut(4.0))
        // },10000)
        
        var all = Math.floor(Math.random()*100)
        this.hotLeft =  all/100;
        this.hotRight = (100-all)/100;
        //下注條
        // this._updateProgressBar(this.hotbar_left,this.hotLeft,this.barValueLeft);
        // this._updateProgressBar(this.hotbar_right,this.hotRight,this.barValueRight);

    },

    update (dt) {
        this.checkData();
        if(cc.sys.localStorage.getItem('sn') != null){ 
            if(this.sn != 0 && this.sn != cc.sys.localStorage.getItem('sn')){
                this.RestartFlag = true
                this.gameOver();
                return;
            }else this.sn = cc.sys.localStorage.getItem('sn');

        }
        if(cc.sys.localStorage.getItem('lr') != 'undefined') this.lr = cc.sys.localStorage.getItem('lr');
        if(cc.sys.localStorage.getItem('sd') != 'undefined') this.sd = cc.sys.localStorage.getItem('sd');

        if(this.lr == 1){
            if(this.mouse_left.x == 0 &&this.mouse_left.y == 0){
                if(this.draw_title.active == false) this.draw_title.active = true
                if(this.over_black.active == false) this.over_black.active = true
                this.timer += dt
            }
        }else if(this.lr == 2){
            if(this.mouse_right.x == 0 && this.mouse_right.y == 0){
                if(this.draw_title.active == false) this.draw_title.active = true
                if(this.over_black.active == false) this.over_black.active = true
                this.timer += dt
            }
        }

        if(this.timer > 4){
            this.RestartFlag = true
            this.gameOver();
            return;
        }

        if(cc.find('superInfo').audioIO == 1){
            cc.audioEngine.pauseMusic();
        }else if(cc.find('superInfo').audioIO == 0){
            cc.audioEngine.resumeMusic(this.audioID);
        }

        if(cc.sys.localStorage.getItem('pbl') != 'undefined' && cc.sys.localStorage.getItem('pbl') != '' && cc.sys.localStorage.getItem('pbl') != this.hotLeft && this.olflag == false){
            this.olflag = true
            this.hotLeft = cc.sys.localStorage.getItem('pbl');
            cc.log(this.oldleft > this.hotLeft)
            if(this.oldleft > this.hotLeft){
                this._updateProgressBar(this.hotbar_left,this.hotLeft,this.barValueLeft,'s',this.oldleft);
            }else{
                this._updateProgressBar(this.hotbar_left,this.hotLeft,this.barValueLeft,'b',this.oldleft);
            }
        }

        if(this.timeTT >10){
            cc.sys.localStorage.setItem('pbl',Math.floor(Math.random()*100))
            cc.log(cc.sys.localStorage.getItem('pbl'))
            this.timeTT = 0;
        }
        this.timeTT += dt;
        
    },
    
});
