$(function(){
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
})