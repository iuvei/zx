/**
 * Created by tang on 2016/8/30.
 */
$(function () {
    //显示隐藏头部中间部分图片
    $(".thcenter>img").mouseenter(function () {
        $(".thcenter>a").show();
    });
    $(".thcenter>img").mouseleave(function () {
        $(".thcenter>a").hide();
    });
    //显示与隐藏头部右边栏部分
    $(".thright .lia a").mouseenter(function () {
        $(".thright .lia .product").show();
    });
    $(".thright .lia a").mouseleave(function () {
        $(".thright .lia .product").hide();
    });
    //给box注册一个滚动事件
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }
    var tLogo = document.getElementById("tLogo");
    window.onscroll = function () {
        var scrollTop = scroll().top;
        if(scrollTop > 55){
            tLogo.className = "fixd tLogo";
        }else{
            tLogo.className = "tLogo";
        }
    }
    //tab切换
    $(".tith li").mouseenter(function () {
        $(this).css({
            "backgroundColor":"white",
            "color":"black"
        }).siblings().css({
            "backgroundColor":"#585858",
            "color":"white"
        })
        var idx = $(this).index();
        $(".tpart .main").eq(idx).addClass("selected").siblings().removeClass("selected");

    });
    //正则表单校验
    //验证手机
    var inp2 = document.getElementById("inp2");
    var phoneReg = /^(13[0-9]|14[57]|15[0-9]|170|177|18[0-9])\d{8}$/;
    checkReg(inp2, phoneReg);

    //验证密码
    var inp3 = document.getElementById("inp3");
    var emailReg = /^\w{6,18}$/;
    checkReg(inp3, emailReg);

    function checkReg(element, regExp) {
        element.onblur = function () {
            if (regExp.test(this.value)) {
                this.nextElementSibling.innerHTML = "正确";
                this.nextElementSibling.className = 'right';

            } else {
                this.nextElementSibling.innerHTML = "错误";
                this.nextElementSibling.className = "wrong";

            }
        }
    }
});