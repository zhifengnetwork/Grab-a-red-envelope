/**底部nav切换(未-点击)_按循序
 *  *bottomTabArrOne.length来循环
 * **/
var bottomTabArrOne = [
	"../../img/public/bottom_nav/news@2x_1.png",
	"../../img/public/bottom_nav/mail_list@2x_1.png",
	"../../img/public/bottom_nav/find@2x_1.png",
];
/*底部nav切换(已-点击)_按循序*/
var bottomTabArrTwo = [
	"../../img/public/bottom_nav/news@2x_2.png",
	"../../img/public/bottom_nav/mail_list@2x_2.png",
	"../../img/public/bottom_nav/find@2x_2.png",
];
/*图标的大小_按循序（不设置默认）*/
var iconWH = [
	'width: .44rem; height: .44rem;',
	'width: .44rem; height: .44rem;',
	'width: .6rem; height: .39rem;',
]
/*底部nav-title_按循序*/
var buttonNavTitle = [
	"信息",
	"通讯录",
	"发现",
];

/*底部nav-点击url路径_按循序*/
var buttonNavUrl = [];
/*未-登陆路径*/
var loginFalse = [
	"'../news/news.html'",
	"'../mail_list/mail_list.html'",
	"'../find/find.html'",
]
/*已-登陆路径*/
var loginTrue = [
	"''",
	"''",
	"''",
]

/**对应登陆状态=>路径
 * 未登录=> 0;
 * 已登陆=> 1;
 * **/
console.log($('#bottomNavWrap').attr('data-id'),111);

if(Number($('#bottomNavWrap').attr('data-id')) == 0){
	for(var l=0;l<bottomTabArrOne.length;l++){
		buttonNavUrl[l] = loginFalse[l]
	}
}else {
	for(var q=0;q<bottomTabArrOne.length;q++){
		buttonNavUrl[q] = loginTrue[q]
	}
}
console.log('最终路径:',buttonNavUrl);

/*js动态创建-底部导航栏*/
var botNavdStr = '';
for(var g = 0; g < bottomTabArrOne.length; g++) {
	/*<!--项，
		1、点击时 font-color：class="bNavYseFontColor";
		2、（未点击时）字体颜色:class="bNavNoFontColor";
	-->*/
	botNavdStr += '<div class="bottomNavTerm">';
	/*<!--icon box-->*/
	botNavdStr += '<p class="bottomNavIconBox" onclick="window.location.href=' + buttonNavUrl[g] + '">';
		botNavdStr += '<img class="bottomNavIcon" style="'+ iconWH[g] +'" src="' + bottomTabArrOne[g] + '" />';
	botNavdStr += '</p>';
	/*<!--title
		1、（点击时）字体颜色:class="bNavYseFontColor";
	-->*/
	botNavdStr += '<p class="bottomNavTitle bNavNoFontColor">' + buttonNavTitle[g] + '</p>';
	botNavdStr += '</div>';
}

/*生产=> 底部导航栏*/
$('#bottomNavWrap').html(botNavdStr);

/*底部导航栏=> 切换*/
var thisInd = Number($.trim($('.pageTopTitle').attr('page-id')));
/*当前=> 替换*/
/*icon*/
$('#bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavIcon').attr('src', bottomTabArrTwo[thisInd]);
/*title的color*/
$('#bottomNavWrap .bottomNavTerm').eq(thisInd).find('.bottomNavTitle').addClass('bNavYseFontColor').removeClass('bNavNoFontColor');

