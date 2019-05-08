 	
　var windowHeight = $(window).height(),
　　$body = $("body");
　　// console.log($(window).height()); //627
　　// console.log($('body').height()); //0
　　$body.css("height", windowHeight); //重要代码	
	
$("body").on("touchstart", function(e) {
　　　　e.preventDefault();
　　　　startX = e.originalEvent.changedTouches[0].pageX,
　　　　startY = e.originalEvent.changedTouches[0].pageY;
　　});
　　$("body").on("touchmove", function(e) {
　　　　e.preventDefault();
　　　　moveEndX = e.originalEvent.changedTouches[0].pageX,
　　　　moveEndY = e.originalEvent.changedTouches[0].pageY,
　　　　X = moveEndX - startX,
　　　　Y = moveEndY - startY;
　   if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
　　　　

      var left = $(".leftNav").css("left");
    left = parseInt(left);
    if(left<0){
        $(".main").animate({ marginLeft : 600},{duration:'slow'});
        $(".leftNav").animate({ left : 0},{duration:'slow'});
      

    }

　　　　}
　else if ( X < 0 ) {
　　　　　
          $(".main").animate({marginLeft:0},{duration:'fast'});
         $(".leftNav").animate({left:-600},{duration:'fast'});

　　　　}

})
