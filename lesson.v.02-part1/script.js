// カルーセル
$('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 1500,
    arrows: false,
    fade: true,
    speed: 1500,//fadeのスピード設定
});

// $(document).ready(function () {
//     $('#fade-in, .works').hide();
// });

// // manフェードイン
// $(document).on('scroll', function() {
//     // スクロール位置を取得
//     const scrollTop = $(window).scrollTop();

//     if (scrollTop > 300) {
//         // フェードインする
//         $('#fade-in').fadeIn(1000);
//     }

//     if (scrollTop > 850) {
//         // フェードインする
//         $('.works').fadeIn(1000);
//     }
// });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

// Topフェードイン,アウト
$(document).on('scroll', function() {
    // スクロール位置を取得
    const scrollTop = $(window).scrollTop();

    if (scrollTop > 350) {
        // フェードインする
        $('.fade').fadeIn(500);
    }

    else if (scrollTop <= 50) {
        // フェードアウトする
        $('.fade').fadeOut(500);
    }
});

$('.fade').on('click', function() {
    // window.scrollTo(0, 0); で即座にトップに移動
    // behavior: 'smooth' を指定することでスムーズにスクロール
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});

// ホバー時の処理
// jQueryの場合、thisは通常、jQueryオブジェクトが参照する要素を指します。たとえば、
// $(this)とすることで、jQueryオブジェクト内でthisが参照する要素を操作することができます。
$(function() {
    $('.scroll, .close-button').hover(
        function() {
            // マウスオーバー時の処理
            $(this).stop().animate({
                opacity: 0.5
            },500);
        },
        function() {
            // マウスアウト時の処理
            $(this).stop().animate({
                opacity: 1
            },500);
        }
    );
});

$('.scroll').on('click', function () {
    // フェードインする
    // $('.modal').css('display', 'block');
    $('.modal').fadeIn();

    const imgSrc = $(this).attr('src');// クリックされた画像のsrc属性の値を取得!!!this!!!
    $('.modal-img').attr('src', imgSrc);// モーダルの画像部分のsrc属性に取得した値を追加
});

// 閉じるボタンをクリックした時の処理
$('.close-button').on('click', () => {
    // $('.modal').css('display', 'none');// モーダルを非表示にする
    $('.modal').fadeOut();
});