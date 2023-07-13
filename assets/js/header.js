// JavaScript Document
$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
			$('header').addClass('is-animation');
		} else {
			$('header').removeClass('is-animation');
		}
	});
});	

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
			$('.header__logo').addClass('fixed');
		} else {
			$('.header__logo').removeClass('fixed');
		}
	});
});

$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
			$('.header__main-content-inner-button a').addClass('is-animation');
		} else {
			$('.header__main-content-inner-button a').removeClass('is-animation');
		}
	});
});


$(function () {
    const ham = $('#js-hamburger');
    const nav = $('#nav-content');
    ham.on('click', function () { //ハンバーガーメニューをクリックしたら
      ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
      nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
    });
});