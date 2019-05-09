$(function () {
    // 侧边栏渲染效果
    function sidebar() {
        //为侧栏导航做准备
        let word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
        let str = "<ul class='list'>";
        for (let i = 0; i < word.length; i++) {
            str += "<li class='item'>" + word[i] + "</li>"
        }
        str += "</ul>"
        $('.address_linkman_list').html(str);
    }
    sidebar()
    
    // 联系人侧边栏
    function linkman(that,moveY){
        let index = that.html();
        let list = $('.address_linkman_list li');
        for(let i=0;i<list.length;i++){
            if($('.address_linkman_title').eq(i).html()==index){
                let scrollTop = $('.address_linkman_title').eq(i).offset().top;
                window.scrollTo(0,scrollTop-45);
            }
        }
        // 侧边栏显示弹框
        $('.address_linkman_index').html(index);
        $('.address_linkman_index').css("display","block")
        setTimeout(function(){
            $('.address_linkman_index').css("display","none")   
        },1000)
    }
    // 监听页面滚动
    $(window).scroll(function(){
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        for(let i=0;i<$('.address_linkman_title').length;i++){
            if(scrollTop>=$('.address_linkman_title').eq(i).offset().top-50&&scrollTop<$('.address_linkman_title').eq(i+1).offset().top){
                console.log(scrollTop,$('.address_linkman_title').eq(i).offset().top)
                $('.address_title').html($('.address_linkman_title').eq(i).html());
            }
        }
        
        // 根据页面位置显示隐藏侧边栏
        // if(scrollTop>=$('.address_linkman_title').eq(1).offset().top-50){
        if(scrollTop>=$('.address_linkman').offset().top-50){
            $('.address_linkman_list').show();
            $('.address_title').show();                                
        }else{
            $('.address_linkman_title').eq(0).removeClass('fiex');
            $('.address_linkman_list').hide();
            $('.address_title').hide();
        }
    })

    // 点击侧边栏列表
    $('.address_linkman_list li').click(function(){
        let that=$(this);
        linkman(that)
    })
    // 触摸侧边栏列表
    // $('.address_linkman_list li').on('touchmove',function(e){
    //     let that=$(this);
    //     let moveY=e.originalEvent.targetTouches[0].clientY;
    //     linkman(that,moveY)
    // })
    //触摸结束触发
    // $('.address_linkman_list li').on('touchend',function(){
    //     $('.address_linkman_index').css("display","none")
    // })
    /* 输入框图片显示隐藏 */
    $('.address_search_input').focus(function () {
        $('.address_search_text').hide();
    })
    $('.address_search_input').blur(function () {
        $('.address_search_text').show();
    })
})