$(function(){
    //解决iOS fixed定位失效
    $('.dialog_menu_input').keyup(function(){
        if($(this).val()!=''){
            $('.dialog_menu_send').css('background','#128ae6')
        }else{
            $('.dialog_menu_send').css('background','#c3f4ff')
        }
    })
})