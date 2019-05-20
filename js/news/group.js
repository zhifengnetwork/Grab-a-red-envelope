$(function(){
    // 底部菜单两层显示
    $('.group_menu_more').click(function(){
        if($(this).children().attr('src')=='../../img/news/more.png'){
            $(this).children().attr('src','../../img/news/more1.png');
            $('.group_menu').css('height','auto');
            $('.group_menu_submenu_img').css('margin','.2rem auto .1rem');
        }else{
            $(this).children().attr('src','../../img/news/more.png');
            $('.group_menu').css('height','1.4rem');
            $('.group_menu_submenu_img').css('margin','.2rem auto')
        }
    })

    // 红包弹框显示隐藏
    $('.group_content_oneself_pack,.group_content_opposite_pack').click(function(){
        $('.group_packwrap').show();
    })
    $('.group_packwrap').click(function(){
        $('.group_packwrap').hide();
    })
    $('.group_pack').click(function(){
        event.stopPropagation();
    })

    // 发红包弹框
    $('.givered_7,.givered_9').click(function(){
        $('.group_content').hide();
        $('.give_pack').show();
        if($(this).hasClass('givered_7')){
            $('.num').val('7');
        }else{
            $('.num').val('9');
        }
    })
    $('.lb_headWrap_return').click(function(){
        $('.group_content').show();
        $('.give_pack').hide();
    })
    // 领取详情
    $('.group_pack_info').click(function(){
        $('.group_content').hide();
        $('.red_details').show();
    })
    $('.lb_headWrap_return').click(function(){
        $('.group_content').show();
        $('.red_details').hide();
    })
})