/**
 * Created by Administrator on 2016-08-28.
 */

//长长滚动条
$(function(){

})



//游戏下载
$(function () {
    $(".main-body .download .left .bottom span").mouseenter(function () {
        $(this).stop().animate({"fontSize": "20px"}, 100).siblings().css({
            "fontSize": "18px",
        });
    })
    $(".main-body .download .left .bottom span").mouseleave(function () {
        $(this).stop().animate({"fontSize": "18px"}, 100);
    })
})


//轮播图
$(function () {
    clearInterval(timer);
    var timer = null;
//左右箭头
    $(".main-body .download .center").mouseenter(function () {
        $("#arr").stop().show(1000);
        clearInterval(timer);
    })
    $(".main-body .download .center").mouseleave(function () {
        $("#arr").stop().hide(1000);
        timer = setInterval(function () {
            $("#right").click();
        }, 3500)
    })
//小圆点击
    var pic = 0;
    var sq = 0;
    var $lis = $(".main-body .download .center ul li")
    var $olis = $("ol li")
    $olis.click(function () {
        $(this).css("backgroundColor", "#ff7219").siblings().css("backgroundColor", "");
        var idx = $(this).index();
        $(".main-body .download .center ul").stop().animate({"left": -idx * 600 + "px"}, 1000);
        pic = idx;
        sq = idx;
    })
//左右焦点
    //右焦点
    $("#right").click(function () {
        if (pic == $lis.length - 1) {
            pic = 0;
            $(".main-body .download .center ul").css("left", "0px")
        }
        pic++;
        var target = -600 * pic;
        $(".main-body .download .center ul").stop().animate({"left": target + "px"}, 1000)
        //右同步
        if (sq == $olis.length - 1) {
            sq = 0;
        } else {
            sq++;
        }
        $olis.eq(sq).css("backgroundColor", "#ff7219").siblings().css("backgroundColor", "")
    })
    //左焦点
    $("#left").click(function () {
        if (pic == 0) {
            pic = $lis.length - 1;
            $(".main-body .download .center ul").css("left", -pic * 600 + "px")
        }
        pic--;
        var target = -600 * pic;
        $(".main-body .download .center ul").stop().animate({"left": target + "px"}, 1000)
        //左同步
        if (sq == 0) {
            sq = $olis.length - 1;
        } else {
            sq--;
        }
        $olis.eq(sq).css("backgroundColor", "#ff7219").siblings().css("backgroundColor", "")
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

    })
    //自动播放
    timer = setInterval(function () {
        $("#right").click();
    }, 3500)
})