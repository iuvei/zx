/**
 * Created by Administrator on 2016/8/28.
 */
$(function(){
    //轮播图

   $(".square1 span").mouseenter(function(){
      $(this).addClass("current").siblings().removeClass("current");
       var idx =$(this).index();
       var piclength=$(".picc li").width();
       var targart=-piclength*idx;
       $(".pic ul").animate({"left":targart+"px"})

   });


    $(".square2 p").mouseenter(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var idx =$(this).index();
        var piclength=$(".ser").width();
        var targart=-piclength*idx;
        $(".service ul").animate({"left":targart+"px"})

    });


    $(".footer .wm").mouseenter(function(){
            $(this).prev(".libox").show(1000)
    });
    $(".footer .wm").mouseleave(function(){
       $(this).prev(".libox").slideToggle(500)
    });




    // 返回顶部小火箭
    $(window).scroll(function () {
        if ($(window).scrollTop() >=0) { //向下滚动像素大于这个值时，即出现小火箭~
            $('.actGotop').fadeIn(110); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.actGotop').fadeOut(110); //火箭淡出的时间，越小消失的越快~
        }
    });
    //火箭动画停留时间，越小消失的越快~
    $('.actGotop').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 3000);

    });



});



