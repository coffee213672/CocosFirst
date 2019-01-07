cc.Class({
    extends: cc.Component,

    // properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.top = cc.find('Canvas/black');
        this.inarea = false
        this.node.on('mouseenter',function(event){
            console.log('come in')
            this.inarea = true   
            this.top.active = true
        },this);

        this.node.on('mouseleave',function(event){
            console.log('out')
            this.top.active = false
        },this)

        this.node.on('mousemove',function(event){
            if(this.inarea == true){
                console.log('in here')
                this.top.x = event._x - 411;
                this.top.y = event._y - 375
            }
        },this)
    },

    // start () {
        
    // },

    // update (dt) {},
});
