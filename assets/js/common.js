// JavaScript Document


// $(function() {
// 	$('body').fadeIn(500); //1秒かけてフェードイン！
// });



$(function () {
// JS: common.js
//*************************************
/*** 上に戻るボタン ***/
let topBtn = $('#scroll-top');
topBtn.hide();

// ある程度スクロールされたら、上に戻るボタンを表示する
$(window).scroll(function () {
	var scrollPosition= $(this).scrollTop();

	if (scrollPosition > 600) {
		topBtn.fadeIn(); // フェードインで表示
	} else {
		topBtn.fadeOut(); // フェードアウトで非表示
	}
});





var topHeader = $('#header');
var $scrollWrapper= $('.js-scrollWrapper');
if( $(window).scrollTop()>500){
	topHeader.show();
}



function progressMath(start,end,progress){
	var progress =Math.max(start,progress);
	progress =Math.min(end,progress);
	var difference= end-progress;
	var range=end-start;
	 return difference/range*100;
}
topBtn.on("click",function(event) {
	event.preventDefault();  // ページ内リンクの挙動をキャンセル
	$('body,html').animate({ // スムーズにスクロールする設定
		scrollTop: 0
	}, 500);
});
});



$(function () {
const ham = $('#header__menu');
const nav = $('#header__gnav');
const gnavbg = $('.header__gnav-bg');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
  gnavbg.toggleClass('gnav-open'); // ナビゲーションメニューにactiveクラスを付け外し

});
gnavbg.on('click', function () { //ハンバーガーメニューをクリックしたら
	ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
	nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
	gnavbg.toggleClass('gnav-open'); // ナビゲーションメニューにactiveクラスを付け外し  
  });

$('.gnav__nav-title a').on('click', function() {
	ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
	nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
	gnavbg.toggleClass('gnav-open'); // ナビゲーションメニューにactiveクラスを付け外し  
});
});



/*** 内部リンク用 ***/
$(function(){
	$('a[href^="#"]').click(function(){
	  //スクロールのスピード
	  var speed = 500;
	  //リンク元を取得
	  var href= $(this).attr("href");
	  //リンク先を取得
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  //リンク先までの距離を取得
	  var position = target.offset().top - 0;
	  //スムーススクロール
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
});




