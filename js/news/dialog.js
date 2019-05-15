$(function(){
    //解决iOS fixed定位失效
    $('.dialog_menu_input').keyup(function(){
        if($(this).html()!=''){
            $('.dialog_menu_send').css('background','#128ae6')
        }else{
            $('.dialog_menu_send').css('background','#c3f4ff')
        }
    })

    // 发送消息
    $('.dialog_menu_send').click(function(){
        let str = '';
        let text = $('.dialog_menu_input').html();
        console.log(text)
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
        $('.dialog_menu_input').html('');
        $('.dialog_menu_send').css('background','#c3f4ff')
        $(document).scrollTop($(document).height());
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
                //$("#avatarPic").attr("src", e.target.result);  //显示图片
            }
        }
    });
})