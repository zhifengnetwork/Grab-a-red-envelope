$(function(){
    // 底部菜单两层显示
    $('.group_menu_more').click(function(){
        if($(this).children().attr('src')=='../../img/news/more.png'){
            $(this).children().attr('src','../../img/news/more1.png');
            $('.group_menu_submenu').css('height','auto');
        }else{
            $(this).children().attr('src','../../img/news/more.png');
            $('.group_menu_submenu').css('height','.45rem');
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
        $('body').css('padding','0')
        if($(this).hasClass('givered_7')){
            $('.num').val('7');
        }else{
            $('.num').val('9');
        }
    })
    $('.lb_headWrap_return').click(function(){
        $('.group_content').show();
        $('.give_pack').hide();
        $('body').css('padding-bottom','1.4rem')
    })
    // 领取详情
    $('.group_pack_info').click(function(){
        $('.group_content').hide();
        $('.red_details').show();
        $('body').css('padding','0')
    })
    $('.lb_headWrap_return').click(function(){
        $('.group_content').show();
        $('.red_details').hide();
        $('body').css('padding-bottom','1.4rem')
    })

    //改变发送按钮样式
    $('.group_menu_input').keyup(function(){
        if($(this).html()!=''){
            $('.group_menu_send').css('background','#128ae6')
        }else{
            $('.group_menu_send').css('background','#c3f4ff')
        }
    })

    // 发送消息
    $('.group_menu_send').click(function(){
        let str = '';
        let text = $('.group_menu_input').html();
        if(text == ''||text == undefined){
            return;
        }
        str +='<div class="group_content_oneself clearfloat">'
                    +'<div class="group_content_oneself_imgwrap">'
                        +'<img class="group_content_oneself_img" src="../../img/0000⑨.jpg" alt="">'
                    +'</div>'
                    +'<div class="group_content_oneself_info">'
                        +'<div class="group_content_oneself_name">火之高兴</div>'
                        +'<div class="group_content_oneself_text">'+text+'</div>'
                    +'</div>'
                +'</div>'
        $('.group_content').append(str);
        $('.group_menu_input').html('');
        $('.group_menu_send').css('background','#c3f4ff')
        $('html,body').animate({
            scrollTop: $('html,body').height()
        }, 'slow');
        $('.group_menu_more').children().attr('src','../../img/news/more.png');
        $('.group_menu_submenu').css('height','.45rem');
    })

    // 验证图片
    $(".picture").change(function (e) {
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
                str +='<div class="group_content_oneself clearfloat">'
                +'<div class="group_content_oneself_imgwrap">'
                +'<img class="group_content_oneself_img" src="../../img/0000⑨.jpg" alt="">'
                +'</div>'
                +'<div class="group_content_oneself_info">'
                +'<div class="group_content_oneself_name">质检员</div>'
                +'<div class="group_content_oneself_textimg">'
                +'<img class="group_content_oneself_img" src="'+e.target.result+'" alt="">'
                +'</div>'
                +'</div>'
                +'</div>'
                $('.group_content').append(str);
                $('html, body').animate({
                    scrollTop: $('html, body').height()
                }, 'slow');
            }
            $(".picture").val('');
        }
    });

    //图片绑定表情包
   $('.emotion_ear').SinaEmotion($('.group_menu_input'));

   //点击图片放大
   $('.group_content').on('click','.group_content_oneself_textimg .group_content_oneself_img,.group_content_opposite_textimg .group_content_opposite_img',function(){
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
    $('.magnify_mask').click(function(){
        $('.group_content_oneself_textimg .group_content_oneself_img,.group_content_opposite_textimg .group_content_opposite_img').removeClass('magnify_active');
        $('.magnify').attr('src','')
        $(this).hide();
    });

    // 点击发送按钮不关闭输入法
    $('.group_menu_send').click(function(){
        $('.group_menu_input').focus();
    });
})