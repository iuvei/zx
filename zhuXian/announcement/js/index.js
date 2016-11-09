/**
 * Created by Administrator on 2016/8/27.
 */


var topPart = document.getElementById("topPart");
var navBar = document.getElementById("navBar");
var mainPart = document.getElementById("mainPart");


window.onscroll = function () {

    var scrollTop = scroll().top;
    var topHeight = topPart.offsetHeight;

    if(scrollTop > topHeight) {
        //navBar.style.position = "fixed";
        navBar.className = "navChild fixed";


    }else {

        navBar.className = "navChild";


    }
}


function scroll() {

    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
};
