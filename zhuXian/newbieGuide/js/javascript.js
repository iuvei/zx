/**
 * Created by Administrator on 2016/8/29 0029.
 */

$(function () {
    $("#image2").mouseenter(function () {
        $("#big").css("display", "block");
    });
    $("#image2").mouseleave(function () {
        $("#big").css("display", "none");
    });

    $(".headerWrap .right li").click(function(){
        $(this).css("color","red").siblings().css("color","black");
    });
    $(".image .top li").click(function(){
        $(this).css("color","red").siblings().css("color","black");
    });

    $(".bot .center li").mouseenter(function(){
        $(this).css("color","red").siblings().css("color","black");
    });

    $(".bot .center li").mouseleave(function(){
        $(this).css("color","black").siblings().css("color","black");
    });

    $(".link .one").mouseenter(function(){
        $(this).css("backgroundPosition","-150px -350px");
    });
    $(".link .one").mouseleave(function(){
        $(this).css("backgroundPosition","0px -350px");
    });
    $(".link .two").mouseenter(function(){
        $(this).css("backgroundPosition","-150px 0px");
    });
    $(".link .two").mouseleave(function(){
        $(this).css("backgroundPosition","0px 0px");
    });
    $(".link .three").mouseenter(function(){
        $(this).css("backgroundPosition","-150px -324px");
    });
    $(".link .three").mouseleave(function(){
        $(this).css("backgroundPosition","0px -324px");
    });
    $(".link .four").mouseenter(function(){
        $(this).css("backgroundPosition","-150px -25px");
    });
    $(".link .four").mouseleave(function(){
        $(this).css("backgroundPosition","0px -25px");
    });
    $(".link .five").mouseenter(function(){
        $(this).css("backgroundPosition","-150px -374px");
    });
    $(".link .five").mouseleave(function(){
        $(this).css("backgroundPosition","0px -374px");
    });
    $(".right2 img").mouseenter(function(){
        $(this).fadeOut();
    });
    $(".right3 img").mouseenter(function(){
        $(this).fadeOut();
    });
    $(".right4 img").mouseenter(function(){
        $(this).fadeOut();
    });
    $(".right5 img").mouseenter(function(){
        $(this).fadeOut();
    });
    $(".right6 img").mouseenter(function(){
        $(this).fadeOut();
    });

});
