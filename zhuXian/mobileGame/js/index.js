/**
 * Created by Administrator on 2016/8/28 0028.
 */
$(function () {
    //上中轮播图

    //$(".dots>li").mouseenter(function () {
    //    $(this).addClass("active").siblings().removeClass("active");
    //    var idx=$(this).index();
    //    var target="-"+idx*100+"%";
    //    $(".screen>ul").stop().animate({"left":target},500);
    //})
    //最上二维码
    $(".tc_tit").mouseenter(function () {
       $(".pic1").css("display","none");
        $(".code2D").css("display","block");
    });
    $(".tc_tit").mouseleave(function () {
       $(".code2D").css("display","none");
        $(".pic1").css("display","block");
    });
    var timer=null;
    var clonen=$(".screen>ul>li")[0].cloneNode(true);
    $(".screen>ul").append(clonen);
    var pic=null;
    var square=null;
    $(".dots>li").mouseenter(function () {
       $(this).addClass("active").siblings().removeClass("active");
        var idx=$(this).index();
        var target=-idx*100+"%";
        $(".screen>ul").stop().animate({"left":target},500);
        pic=square=idx;
    });
    $(".screen").mouseenter(function () {
        clearInterval(timer);
    });
    $(".screen").mouseleave(function () {
       timer=setInterval(move,3000);
    });
    timer=setInterval(move,3000);
    function move(){
        if(pic==$(".dots>li").length){
            pic=0;
            $(".screen>ul").css("left","0px");
        }
        pic++;
        var target=-pic*100+"%";
        $(".screen>ul").stop().animate({"left":target},500);
        if(square==$(".dots>li").length-1){
            square=0;
        }
        else{
            square++;
        }
        $(".dots>li").eq(square).addClass("active").siblings().removeClass("active");
    }

    //上右tab栏切换
   $(".news>ul>li").mouseenter(function () {
     $(this).addClass("on").siblings().removeClass("on");

    var idx=$(this).index();
    $(".news_ul").eq(idx).css("display","block").siblings().css("display","none");
   });
    //下中角色切换
    $(".role_list>a").click(function () {
       $(this).addClass("on").siblings().removeClass("on");
       var idx=$(this).index();
        $(".role_img>ul>li").eq(idx).fadeIn(800).siblings().fadeOut(800);

    });
    //左侧新手
    $(".guanfang").mouseenter(function () {
        $(this).css({
            "border":"2px solid #29F0FF",
            "height":"112px",
            "width":"300px"
        });
    })
    $(".guanfang").mouseleave(function () {
        $(this).css({
            "border":"",
            "height":"116px"
        })
    });
    $(".xinshou").mouseenter(function () {
        $(this).css({
            "border":"2px solid #29F0FF",
            "height":"104px"
        });
    })
    $(".xinshou").mouseleave(function () {
        $(this).css({
            "border":"",
            "height":"108px"
        })
    });
    $(".gaoshou").mouseenter(function () {
        $(this).css({
            "border":"2px solid #29F0FF",
            "height":"104px"
        });
    })
    $(".gaoshou").mouseleave(function () {
        $(this).css({
            "border":"",
            "height":"108px"
        })
    });
    //媒体合作高亮
    $(".pichigh li").mouseenter(function () {
        $(this).find("span").css("display","block");
        $(this).siblings().find("span").css("display","none");
    });
    $(".pichigh").mouseleave(function () {
        $(this).find("span").css("display","none");
    });

//top
// 返回顶部小火箭
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) { //向下滚动像素大于这个值时，即出现小火箭~
        $('.actGotop').fadeIn(300); //火箭淡入的时间，越小出现的越快~
    } else {
        $('.actGotop').fadeOut(300); //火箭淡出的时间，越小消失的越快~
    }
});
//火箭动画停留时间，越小消失的越快~
$('.actGotop').click(function () {
    $('html,body').animate({scrollTop: '0px'},1000);

});
});
