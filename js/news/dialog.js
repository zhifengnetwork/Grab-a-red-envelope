$(function(){
    // $('html, body').animate({
    //     scrollTop: $('html, body').height()
    // },100);
    //改变发送按钮样式
    $('.dialog_menu_input').keyup(function(){
        if($(this).html()!=''){
            $('.dialog_menu_send').css('background','#128ae6')
        }else{
            $('.dialog_menu_send').css('background','#c3f4ff')
        }
    })

    // 发送消息
    $('.dialog_menu_send').on('click',function(){
        if (navigator.vibrate) {
            navigator.vibrate([200,50,200]);
        } else if (navigator.webkitVibrate) {
            navigator.webkitVibrate([200,50,200]);
        }
        $('#audio')[0].play();
        let str = '';
        let text = $('.dialog_menu_input').html();
        if(text == ''){
            return;
        }
        str +='<div class="dialog_content_oneself clearfloat">'
                    +'<div class="dialog_content_oneself_imgwrap">'
                        +'<img class="dialog_content_oneself_img" src="../../img/0000⑨.jpg" alt="">'
                    +'</div>'
                    +'<div class="dialog_content_oneself_info">'
                        +'<div class="dialog_content_oneself_name">质检员</div>'
                        +'<div class="dialog_content_oneself_text">'+text+'</div>'
                    +'</div>'
                +'</div>'
        $('.dialog_content').append(str);
        // 点击发送按钮获取焦点
        $('.dialog_menu_input').focus();
        $('.dialog_menu_input').html('');
        $('.dialog_menu_send').css('background','#c3f4ff')
        $('html, body').animate({
            scrollTop: $('html, body').height()
        }, 100);
    })

    // 验证图片
    $(".camera,.picture").change(function (e) {
        for (var i = 0; i < e.target.files.length; i++) {
            var file = e.target.files.item(i);
            //验证是否为图片，不是就跳出循环
            if (!(/^image\/.*$/i.test(file.type))) {
                alert("请选择图片上传！")
                continue;
            }
            //实例化FileReader API  
            var freader = new FileReader();
            freader.readAsDataURL(file);
            freader.onload = function (e) {
                let str = '';
                str +='<div class="dialog_content_oneself clearfloat">'
                +'<div class="dialog_content_oneself_imgwrap">'
                +'<img class="dialog_content_oneself_img" src="../../img/0000⑨.jpg" alt="">'
                +'</div>'
                +'<div class="dialog_content_oneself_info">'
                +'<div class="dialog_content_oneself_name">质检员</div>'
                +'<div class="dialog_content_oneself_textimg">'
                +'<img class="dialog_content_oneself_img" src="'+e.target.result+'" alt="">'
                +'</div>'
                +'</div>'
                +'</div>'
                $('.dialog_content').append(str);
                $('html, body').animate({
                    scrollTop: $('html, body').height()
                }, 100);
            }
            $(".camera,.picture").val('');
        }
    });

    // 显示转账弹框
    $('.transfer').on('click',function(){
        $('.dialog_transfer_wrap').show()
    })
    // 隐藏转账弹框
    $('.dialog_transfer_back').on('click',function(){
        $('.dialog_transfer_wrap').hide()
        $('.dialog_transfer_num_input').val('')
    })
    //点击表情包的图片，让滚动条滚动到底部
    $('.emotion_ear').on('click',function(){
        // $('.dialog_menu_input').focus();
//  	console.log($(document).scrollTop())
//  	$("html,body").animate({scrollTop:$(document).scrollTop()},1000);
    	
    	
    })  
   //图片绑定表情包
   $('.emotion_ear').SinaEmotion($('.dialog_menu_input'));
// $('#face').SinaEmotion($('.emotion'));
   //测试本地解析
    //点击图片放大
    $('.dialog_content').on('click','.dialog_content_oneself_textimg .dialog_content_oneself_img,.dialog_content_opposite_textimg .dialog_content_opposite_img',function(){
        if(!$(this).hasClass('magnify_active')){
            let src = $(this).attr('src');
            $(this).addClass('magnify_active');
            $('.magnify_mask').show();
            $('.magnify').attr('src',src);
        }else{
            $(this).removeClass('magnify_active');
            $('.magnify_mask').hide();
            $('.magnify').attr('src','');
        }
    });
	$('.magnify_mask').on('click',function(){
        $('.dialog_content_oneself_textimg .dialog_content_oneself_img,.dialog_content_opposite_textimg .dialog_content_opposite_img').removeClass('magnify_active');
        $('.magnify').attr('src','')
        $(this).hide();
    });

})
