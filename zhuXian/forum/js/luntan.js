/**
 * Created by Administrator on 2016/8/30 0030.
 */

$(function () {

//        让左右箭头隐藏
    var timer = null;

    $(".slider").mouseenter(function () {
        $(".slider .z1").show();
        $(".slider .r1").show();

        clearInterval(timer);

    })
    $(".slider").mouseleave(function () {
        $(".slider .z1").hide();
        $(".slider .r1").hide();
        //鼠标离开box的时候，继续自动播放
        timer = setInterval(function () {
            $("#right").click();//触发点击事件
        }, 3000);
    })
//        点击右箭头，图片向右移
    var pic = 0;
    var square = 0; //记录小方块高亮的下标
    var imgWidth = $(".slider").width();//获得宽度
    $("#right").click(function () {
        if (pic == $(".slider li").length - 1) {
            pic = 0;
            $(".slider ul").stop().css("left", "0px");
        }
        pic++;
        $(".slider ul").stop().animate({
            "left": -pic * imgWidth + "px"
        }, 1000);


        if (square ==$(".slider .xia span") .length - 1) {
            square = 0;
        } else {
            square++;
        }
//            console.log(square);
        //  清除所有的span的className让square亮起来
        $(".slider .xia span").eq(square).addClass("current").siblings().removeClass("current");


    })
//            左箭头
    $("#left").click(function () {
        if (pic == 0) {
            pic = $(".slider li").length - 1;
            $(".slider ul").stop().css("left", -pic * imgWidth + "px");
        }
        pic--;
        $(".slider ul").stop().animate({
            "left": -pic * imgWidth + "px"
        }, 1000);


        if (square == 0) {
            square = $(".slider .xia span").length - 1;
        } else {
            square--;
        }
        $(".slider .xia span").eq(square).addClass("current").siblings().removeClass("current");

    });


    timer = setInterval(function () {
        $("#right").click();//触发点击事件
    }, 3000);

    //给span注册事件

    $(".slider .xia span").mouseenter(function () {
        var idx=$(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(".slider ul").stop(). animate({
            "left": -idx * imgWidth + "px"
        },1000 );
        pic=idx;
        square = idx;

    });

        $("#hui").click(function () {
            $(".jumbotron").css("display","block")
        })
})
