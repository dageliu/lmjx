//重构页面主要逻辑
// 横屏提示
function landscape(isVertical, config) {
    var showWay = isVertical ? "@media screen and (min-aspect-ratio: 12/7){#orientLayer{display:block;} }" :
        "@media all and (orientation : portrait){#orientLayer{display: block;} }";
    var color = config && config.color ? config.color : "#000",
        images = config && config.images ? config.images :
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAXVBMVEUAAAD29vb////x8fH////////x8fH5+fn29vby8vL////5+fn39/f6+vr////x8fH////////+/v7////09PT////x8fH39/f////////////////////x8fH///+WLTLGAAAAHXRSTlMAIpML+gb4ZhHWn1c2gvHBvq1uKJcC6k8b187lQ9yhhboAAAQYSURBVHja7d3blpowFIDhTUIAOchZDkre/zE7ycySrbUUpsRN2/1fzO18KzEqxEVgTiZNfgmmtxRc8iaR8HNe8x4BtjQePKayYCIoyBSgvNNE1AkNSHqZyLqk97EgUCCHBzZ5mkg7ScvIJuIyOyXBRFxgpqWZyGsAZLB1KjsJi8nutHU4JCRbFRH8tmirI9k8Jx2sqNs8K/m0LQkrktO2crgcgXGB4AiTEsB0hJfo9MGgX7CGcYiYwQxmMOOvZwRhBG8tCoMXjBDeXvWCEcHbi14wgCBmMIMZzGAGM5jxETNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxY6E2rUQxnH2tz9cirlJFwFBJedaPnUv0M7++egPDE8iAJcIDmxwH5wwv9vUviw2kLbVO3TJU5uul/EyB0FoLp4x60PdGUd3qPurrWyjGGTc05u+1dcgI7/+tCCPARWGhH7o5Y7RCf+bH9ctXLp6v2BVDxfqz0oPXeSVaNtINo/1SXDv4dck8IIkbhtC2ol+iouEonTBCbYvVMnXOjxww6s/RFrBUpXHh/gw1rHj5d/qhYn9Gpk2FWh6xRBRX5Oj3Znh2Sq49/L6+y8pB26q9GbE2dbA2mVbx6I+7MfBglLCttm73ZQi7AD3iL4HqjFYJHSPRppqaUaJ3ATpGa+ckpGak2hRRMyqjGMkvl+xyFeSMwjAqcsZgGDdyhl0oNTnDN4yenJGZFGxNChP5/Y3efh6SM2rDOJMzboYxkDMqwyjIGcIw6F+io2FU1IxIm1JqRmgXSkvNKNCXeTpGrU0JNSO2c6LIGPgCS8AuDHz9ta0SXWDtxoDRH+MqlbC2Dt2G2JFRadtQZt2qq/orGowdGb2euxYiqWEpVWhTBnszoNAPdStuQwxqf0aocdWKW4Z+DfszIh8pxJqbuCE4YAC+4bm0evtipjpgJHeFnyyt1Ku2xa0bhjxr27p75rECNwyI9ZwvXkHq+7aTaMEV44YYy/spfgjgjNHaWW+GeUhGEX7tLlVinIFDDSgnOwhi1V6bU0b6tVS9eAERe863g4dRrtiHdc6o+nn5vtyVVgR79Cqt4uL6gfHPQyGqtP2vf7HADGbcYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JjhtOM+J/AgT008yDMkN/dPP9hzS8zAMQN3OEYeekp5YU7KOKXwVXqiY+QS7smcinGKABWdiBgpPJTSMHJ4KidhhPBUSMLw4CmPhKHgKUXCkHsygum71ftNSgCX6bsl8FQyfbcL5EdYsDk0R3j7aiA5wpt5AjKg/2gLJEBD/0Hf2OOf/vRrj6z/7GtP4B3nMKyjHA12kIPSjnJs3FEO0TvKkYJHOWCR+rjJH0Vn6fI5PjNbAAAAAElFTkSuQmCC";
    // style
    var nodeStyle = document.createElement('style');
    nodeStyle.setAttribute('type', 'text/css');
    nodeStyle.innerHTML =
        '@-webkit-keyframes rotation{10%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 50%, 60%{transform: rotate(0deg); -webkit-transform: rotate(0deg)} 90%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 100%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} } @keyframes rotation{10%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 50%, 60%{transform: rotate(0deg); -webkit-transform: rotate(0deg)} 90%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} 100%{transform: rotate(90deg); -webkit-transform: rotate(90deg)} } #orientLayer{display: none; z-index: 999999;} ' +
        showWay +
        ' .mod-orient-layer{display: none; position: fixed; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; background: ' +
        color +
        '; z-index: 9997} .mod-orient-layer__content{position: absolute; width: 100%; top: 50%; margin-top: -75px; text-align: center} .mod-orient-layer__icon-orient{background-image: url(' +
        images +
        '); display: inline-block; width: 67px; height: 109px; transform: rotate(90deg); -webkit-transform: rotate(90deg); -webkit-animation: rotation infinite 1.5s ease-in-out; animation: rotation infinite 1.5s ease-in-out; -webkit-background-size: 67px; background-size: 67px} .mod-orient-layer__desc{margin-top: 20px; font-size: 15px; color: #fff}'
    document.getElementsByTagName('body')[0].appendChild(nodeStyle);
    // dom
    var nodeDom = document.createElement('div');
    nodeDom.setAttribute('id', 'orientLayer');
    nodeDom.setAttribute('class', 'mod-orient-layer');
    nodeDom.innerHTML =
        '<div class="mod-orient-layer__content"> <i class="icon mod-orient-layer__icon-orient"></i> </div>';
    document.getElementsByTagName('body')[0].appendChild(nodeDom);
};

// facebook
function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

if (!isFacebookApp()) {
    landscape(0);
}

//弹窗  调用方法试例：TGDialogS('pop1')
function TGDialogS(e) {
    closeDialog();
    $("#" + e).css("display", "block");
    $(".pop_mask").remove();
    $("body").append("<div class='pop_mask'></div>");
    $("#" + e).css({
        "position": "fixed",
        "left": "50%",
        "top": "50%",
        "z-index": "999",
    })
    $("#" + e).addClass("pop_block")
}

function closeDialog() {
    $(".pop_block").css("display", "none");
    $(".pop_mask").remove();
}

//设置滚动条
function scroll(className) {
    $(className).each(function(i, ele) {
        OverlayScrollbars(ele, {
            overflowBehavior: {
                x: 'hidden',
                y: 'scroll'
            },
            scrollbars: {
                clickScrolling: true
            }
        })
    });
}
scroll(".task-ls");
scroll(".pop-scroll");
scroll(".rule-ls");


//抽奖方法
var swf=function(){
    var offon=true; //是否可以再次抽奖
    var random=-1; //prizeIndex代表奖品的下标,顺时针依次递增,初次为0
    var prizeAttr=null; //抽到的奖品地址
    var lottIdx= -1; //设置抽奖的下标,0代表1次,1代表10次
    //点击开始抽奖 通知js  flash->js
    function callJsToStarto(){
        //alert(11);
    //测试
        callFlashToRollo(random);
    }
    //开发获得抽奖结果 通知flash开始播放效果 js->flash
    function callFlashToRollo(id){
        //alert(22)
        //通知转盘转到对应的中奖产品的id （序号从0,1,2.....，0是指针初始指示的位置，沿着顺时针的方向递增）
        if(SWFOBJo)SWFOBJo.stopRoll(id);
    }
    //3、flash动画完成通知js  flash->js
    function callJsToCompleteo(){
        SWFOBJo.enable();
        offon=true;
        $(".swf-lightbox").removeClass("ani");
        if(lottIdx==0){
            TGDialogS('popOnePrize');
        }
        if(lottIdx==1){
            TGDialogS('popTenPrize');
        }
    }
    //初始化抽奖对象的SWFOBJ 
    //转盘的中心点坐标为（0,0））
    var SWFOBJo= new Lottery({
        'r':9,//奖品总数
        'contentId' : 'swfcontent',//嵌入swf 的div层的 id 
        'onClickRollEvent' : callJsToStarto,//对应上面接口
        'onCompleteRollEvent':callJsToCompleteo //对应上面接口
    });

    //设置抽取的下标以及对应的uc消耗
    $(".swf-btns a").click(function(){
        lottIdx=$(this).index();
        if($(this).find(".num") !=null){
            $(".pop-text .num").html($(this).find(".num").html());
        }
    });
    //抽奖动画开始
    $(".pop-buy .pop-btn-ok").click(function(){
        if(offon){
            random=Math.floor(Math.random()*9);
            SWFOBJo.stopRoll(random);
            offon=false;
            $(".swf-lightbox").addClass("ani");
        }

    });
}

//执行抽奖方法
swf();

// 任务栏按钮事件
$(".task-ls a").click(function(){
    if($(this).attr("id")=="goShare"){
        $(".share-point").show();
    }else{
        TGDialogS('popGetChance');
    }
});

//视频弹窗
var videoPlay = (function() {
    var player;
    var firstPlay = true;

    function playVideo(vid) {
        player = new YT.Player("player", {
            width: "100%",
            height: "100%",
            videoId: vid,
            events: {
                "onReady": function(event) {
                    event.target.playVideo();
                },
                "onStateChange": function() {
                    // onPlayerStateChange();
                }
            }
        });
    }

    $(".pop-video .pop-clo").click(function() {
        player.stopVideo();
        // player.pauseVideo();
        $("#player").remove();
        $(".pop-video-box").append('<div id="player"></div>');
    });

    $(".btn-vid").click(function() {
        TGDialogS('popVideo');
        playVideo("4zgqE40mpgk");
    });
}());


