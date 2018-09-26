window.addEventListener('load',function(){
    headerGradient();
    slide();
    
});

//头部变色功能函数
function headerGradient(){
    //获取顶部
    var header = document.querySelector('#header');
    //获取轮播图高度
    var slideHeight = document.querySelector('#slide').offsetHeight;

    window.addEventListener('scroll',scroll);
    
    scroll();

    function scroll(){
        var scrollTop = document.documentElement.scrollTop;
        //计算透明度
        var opacity = scrollTop/slideHeight;
        opacity = opacity>1? 1 : opacity;
        
        header.style.backgroundColor="rgba(222, 24, 27,"+opacity+")";
    }  
}

function slide(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', 
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true,//等同于以下设置
    });
    
    document.querySelector('.swiper-container').onmouseenter=function(){
        mySwiper.autoplay.stop();
    }

    document.querySelector('.swiper-container').onmouseleave=function(){
        mySwiper.autoplay.start();
    }
}