/**
 *
 * Created by y on 2016/8/28.
 */

// 入口函数
$(document).ready(function () {
    //动态生成图片
    //同人大赏动态生成
    var datas_ap = [
        {"content": "牙签+502,原创手工“翠微...", "name": "作者：执念..°"},
        {"content": "同人壁纸:新学期,手机快...", "name": "作者：元宝小哥哥"},
        {"content": "跟秋天更配的当然还是枫叶...", "name": "作者：乀杭灬丹青丶"},
        {"content": "跟着女王打天下:逆黑白,墨...", "name": "作者：言一_rem"},
        {"content": "同人COS:五年天下路,一身白...", "name": "作者：爱喝酒的沉圆怡"},
        {"content": "同人壁纸:行走大荒，勿失本...", "name": "作者：阿顾"},
        {"content": "同跟着女王打天下:女王的背...", "name": "作者：子隐-折戟沉沙秋水溟"},
        {"content": "同人绘画:冥心归太虚,天...", "name": "作者：吸毒养身体"}
    ];
    var datas_apr = document.getElementById("datas_apr");
    var str = "";
    for (var i = 0; i < datas_ap.length; i++) {
        str += '<div class="div1"><div class="img"><img src="images/a' + (i + 1) + '.jpg" alt=""></div><p>' + datas_ap[i]["content"] + '</p><p>' + datas_ap[i]["name"] + '</p></div>'
    }

    datas_apr.innerHTML = str;



    //导航栏显示出现
    $(".navul>li").mouseover(function () {
        $(this).children(".ahover").stop().animate({"opacity": "1"}, 300);
    });
    $(".navul>li").mouseout(function () {
        $(this).children(".ahover").stop().animate({"opacity": "0"}, 100);
    });


    //新闻tab栏
    $(".news-tab li").mouseenter(function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        var idx = $(this).index();
        $(".products div").eq(idx).addClass("selected").siblings("div").removeClass("selected")
    })


//同人大赏hover
    // 给div1注册放大事件
    $("#datas_apr .div1").mouseenter(function () {
        $(this).find("img").stop().animate({"width": "120%", "height": "120%", "left": "-10%", "top": "-10%"}, 300).siblings().find("img");
    })
    // 注册缩小事件
    $("#datas_apr .div1").mouseleave(function () {
        $("#datas_apr .div1 img").stop().animate({"width": "100%", "height": "100%", "left": "0", "top": "0"}, 300)
    })

//设置li标签的padding
    $(".jobs-tab>li:even").css("padding-bottom", "50px");
    $(".jobs-tab>li:odd").css("padding-top", "50px");


    //鼠标一上来显示border渐变
    //角色展示opacity显示
    $(".jobs-tab>li:eq(0)").css({
        "border": "2px solid RGBa(255,124,0,1)",
        "outline": "solid 1px #FFCB99",
        "outline-offset": "-5px"
    });
    $(".center>.job:eq(0)").css("opacity", "1").siblings("div").css("opacity", "0");


    $(".jobs-tab>li").mouseenter(function () {
        $(this).css({
            "border": "2px solid RGBa(255,124,0,1)",
            "outline": "solid 1px #FFCB99",
            "outline-offset": "-5px"
        }).siblings().css({
            "border": "",
            "outline": "",
            "outline-offset": ""
        });
        var idx = $(this).index();
        // console.log(idx);

        //待优化,调整stop()参数修复bug

        $(".center>.job").eq(idx).css("opacity", "0").stop(true, false).animate({"opacity": "1"}, 1000).siblings("div").stop(true, true).animate({"opacity": "0"}, 1000);
    })
    /*$(".center>.job").eq(idx).fadeIn(500).siblings("div").fadeOut(500);
     })*/

//设置纪年中的文字滚动
    $("#jinian_list").animate({"top": "-5000px"}, 200000, "linear");
    $("#jinian_list").mouseover(function () {
        $("#jinian_list").stop();
    })
    $("#jinian_list").mouseout(function () {
        $("#jinian_list").animate({"top": "-5000px"}, 200000, "linear");
    })


// 设置白条消息滚动
//长长滚动条
    $(function () {
        $(".main-body .download .rolling span").stop().animate({"left": -100000 + "px"}, 6000000, "linear")
    })

    //设置右侧鼠标放上去长条变宽
    $(".role .right div").mouseenter(function (){
            $(this).find("span.line").stop().animate({"width":300},500);
    })
    //鼠标移开长度变回去
    $(".role .right div").mouseleave(function (){
        $(this).find("span.line").stop().animate({"width":0},500);
    })


    //蝴蝶随机运动
    function moveRandomX() {
        return {
            x: parseInt(Math.random() * 1200),
            y: parseInt(Math.random() * 500)
        }
    }
    $(".hudie:eq(0)").css({"left":moveRandomX().x,"top":moveRandomX().y});
    $(".hudie:eq(1)").css({"left":moveRandomX().x,"top":moveRandomX().y});
    $(".hudie:eq(2)").css({"left":moveRandomX().x,"top":moveRandomX().y});
    setInterval(function (){
        $(".hudie:eq(0)").animate({"left":moveRandomX().x,"top":moveRandomX().y},8000);
        $(".hudie:eq(1)").animate({"left":moveRandomX().x,"top":moveRandomX().y},8000);
        $(".hudie:eq(2)").animate({"left":moveRandomX().x,"top":moveRandomX().y},8000);
    },500)




    //设置二维码动画
    $(".watch .right .bottom li:eq(0)").mouseenter(function (){
        // $(this).stop().animate({"opacity":"0"},500);
        $(this).find(".img_hover").stop().animate({"top":"10px"},500);
    })
    $(".watch .right .bottom li:eq(0)").mouseleave(function (){
        $(this).find(".img_hover").stop().animate({"top":"120px"},500);
    })
    $(".watch .right .bottom li:eq(1)").mouseenter(function (){
        $(this).find(".img_hover").stop().animate({"top":"5px"},500);
    })
    $(".watch .right .bottom li:eq(1)").mouseleave(function (){
        $(this).find(".img_hover").stop().animate({"top":"120px"},500);
    })


    //手风琴
    $(function () {
        //给每一个li添加一个动态图片
        var $li = $(".fold_wrap li");
        for(var i = 0; i < $li.length;i++) {
            $li.eq(i).css("backgroundImage", "url('images/t"+(i+1)+".jpg')");
        }

        $li.mouseenter(function () {
            $(this).stop().animate({"width": "475px"}, 200).siblings().stop().animate({"width": "120px"}, 200);
            $(this).children(".mask_b").hide();
        });

        $li.mouseleave(function () {
            $li.stop().animate({"width": "171px"}, 200)
            $(this).children(".mask_b").show();
        });
    });



    //share
    $(".share span").mouseover(function(){
        $(".main-body .share .share_more").css("display","block");
    })
    $(".main-body .share .share_more").mouseleave(function(){
        $(".main-body .share .share_more").css("display","none");
    })
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

})































