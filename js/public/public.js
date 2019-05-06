/*返回 按钮*/
function returnFun(){
	/*返回上一页*/
	if($('.lb_headWrap .lb_headWrap_return').attr('data-num') == 1 || $('.headWrap_lb .returnBut_lb').attr('data-num') == undefined ){
		window.history.back();
		console.log("返回上一页");
	}else {
		/*页面跳转*/
		window.location.href = $('.lb_headWrap .lb_headWrap_return').attr('data-num');
	}
	return false;
}

/*页面跳转*/
function pageJump(_url){
	/*页面跳转*/
    window.location.href = _url;
}
