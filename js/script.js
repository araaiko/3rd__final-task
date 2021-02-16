// 横スクロールメニューの矢印をクリックでメニューの両端に移動する
$(function () {
    $('.js-scroll-right').click(function (e) {
        $('.js-global-nav').animate({
            scrollLeft: 799.64
        }, 500, 'swing');
    });

    $('.js-scroll-left').click(function (e) {
        $('.js-global-nav').animate({
            scrollLeft: 0
        }, 500, 'swing');
    });
});

// 横スクロールメニューの左右の矢印を表示/非表示にする
jQuery('.js-global-nav').on("scroll", function () {
    var scrollPosition = $(".js-global-nav").scrollLeft();
    var maxPosition = $('.js-global-nav').get(0).scrollWidth - $('.js-global-nav').get(0).clientWidth;

    // 左の矢印の表示/非表示
    if (0 < scrollPosition) {
        jQuery('.js-scroll-left').fadeIn();
    } else {
        jQuery('.js-scroll-left').fadeOut();
    };

    // 右の矢印の表示/非表示
    if (scrollPosition === maxPosition) {
        jQuery('.js-scroll-right').fadeOut();
    } else {
        jQuery('.js-scroll-right').fadeIn();
    };
    return false;
});