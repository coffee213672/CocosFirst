cc.Class({
    extends: cc.Component,

    properties: {
        label_left:{
            default: null,
            type: cc.Node,
        },
        label_right: {
            default: null,
            type: cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    givemewhoru:function(){
        cc.log(this);
    },

    onLoad () {
        cc.log(cc.systemEvent);
       // 使用枚举类型来注册
       cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_DOWN, function (event) {
          console.log('Mouse down');
        }, this);
        // 使用事件名来注册
        cc.systemEvent.on('mousedown', function (event) {
          console.log('Mouse down');
        }, this);
    },

    start () {

    },

    // update (dt) {},
});
