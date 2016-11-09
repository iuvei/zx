/**
 * Created by Jelly on 2016/8/29.
 */
$(function () {
    //背景音乐
    $('.sound_control').on('click',function(){
        var audio = document.getElementById('bg_music');
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            audio.pause();
        }else{
            $(this).addClass('on');
            audio.play();
        }
    });

    ////top 视频
    //$('.top_play').click(function(){
    //    document.getElementById('bg_music').pause();
    //    $('.sound_control').removeClass('on');
    //    $.simpleDialog({
    //        skin:false,
    //        content: '.pop_video',
    //        id : 'pop_video'
    //    });
    //    addVideo('video_main', 800, 500, {
    //        source:'http://media.dl.wanmei.com/media/media/zhuxianshouyoucg20160526flv.flv',
    //        autoPlay:true
    //    });
    //
    //});
    $(".pop_video .closeBtn").click(function(){
        $.simpleDialog.close('pop_video');
    });
    //角色
    $(".role_tab>a").click(function () {
        var idx=$(this).index();
        $(".roleBox .role_view").removeClass().addClass("role_view").addClass("s"+idx);
        $(".roleBox .role_attr").removeClass().addClass("role_attr").addClass("s"+idx);
        $(".roleBox .role_inf").removeClass().addClass("role_inf").addClass("s"+idx);
        $(".role_tab>a").removeClass("on").eq(idx).addClass("on");
    });
    //特点
    var lunbo_m = {
        init:function(){
            this.bindEvent();
            var sprite1 = document.querySelector('.ts_view1');
            var sp1 = new spriteClip(sprite1,4,5,120);
            sp1.run()
            this.timer();
        },
        nextPage:function(index){
            var num = index;
            if(num == 4){
                num = 0;
            }
            $('.ts li').removeClass('on').eq(num).addClass('on');
            $('.pageSign span').eq(num).addClass('on').siblings().removeClass('on');
            var sprite1 = document.querySelector('.ts_view'+(num+1));
            var sp1 = new spriteClip(sprite1,4,5,120);
            sp1.run()
        },
        prevPage:function(index){
            var num = index;
            if(num == -1){
                num = 3;
            }
            $('.ts li').removeClass('on').eq(num).addClass('on');
            $('.pageSign span').eq(num).addClass('on').siblings().removeClass('on');
            var sprite1 = document.querySelector('.ts_view'+(num+1));
            var sp1 = new spriteClip(sprite1,4,5,120);
            sp1.run()
        },
        timer:function(){
            var time;
            var self = this;
            var duration = 5000;
            time = setInterval(function(){
                var index = $('.pageSign span.on').index();
                self.nextPage(index+1);
            },duration)
            $('.story_lunbo').hover(function(){
                clearInterval(time)
            },function(){
                time = setInterval(function(){
                    var index = $('.pageSign span.on').index();
                    self.nextPage(index+1);
                },duration)
            })
        },
        bindEvent:function(){
            var self = this;
            $('.pageSign span').on('click',function(){
                if($(this).hasClass('on')){ return; }
                var index_b = $('.pageSign span.on').index();
                var index = $(this).index();
                self.nextPage(index);
            })
            $('.story_lunbo .prevPage').on('click',function(){
                var index = $('.pageSign span.on').index()-1;
                self.prevPage(index);
            })
            $('.story_lunbo .nextPage').on('click',function(){
                var index = $('.pageSign span.on').index()+1;
                self.nextPage(index);
            })
        }
    }
    function spriteClip(dom,w,h,time){
        if(dom){
            this.dom = dom;
            this.w = w ||0;
            this.h = h ||0;
            this.time = time || 0;
            this.display = this.dom.style.display;
            this.played = false;
        }else{
            return false;
        }
    }
    spriteClip.prototype.run = function(){
        if(this.played)
            return false;
        this.played = true;
        this.show();
        for(var w=0;w<this.w;w++){
            for(var h =0;h<this.h;h++){
                (function(w,h,self){
                    var time = (h*self.time*self.w+w*self.time);
                    setTimeout(function(){
                        self.dom.style.webkitMaskPosition = (100/(self.w-1))*w+'% '+(100/(self.h-1))*h+'%';
                        if(w >= self.w-1 && h>=self.h-1){
                            var event = document.createEvent('HTMLEvents');
                            event.initEvent('finish', true, true);
                            event.eventType = 'message';
                            event.content =  'finish';
                            self.dom.dispatchEvent(event);
                        }
                    },time);
                })(w,h,this);
            }
        }
    }
    spriteClip.prototype.hide = function(){
        this.dom.style.display = 'none';
    }
    spriteClip.prototype.show = function(){
        this.dom.style.display = this.display;
    }
    spriteClip.prototype.finish = function(callback){
        this.dom.addEventListener('finish',callback);
    };
    lunbo_m.init();
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
    
})