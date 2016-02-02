jQuery(function($) {

  // 対象を変数へ格納
  var $content = $('.slider_container'),
      $imgWrap = $('.slider_img'),
      $sliderImg = $imgWrap.find('img');

  // 画像サイズなど
  var size = {
      width: $sliderImg.width(),
      height: $sliderImg.height() // 今回は使ってない
  };

  // スライドの数を取得
  var imgNum = $sliderImg.length;

  // スライド幅と高さを指定
  $content.width(size.width * imgNum);

  var dotslist = "";
  for(i=0; i<imgNum; i++) {
    // スライド画像を並べる
    $imgWrap.eq(i).css('left', 700*i);

    // スライド画像分ドットを用意
    dotslist += '<span class="dots"></span>';
  }

  // ドットを追加
  $(".slider_controll").append(dotslist);
  var $dots = $('.dots');
  $dots.filter(':first-child').addClass('current');

  // ドットをクリックした時
  $dots.on('click', function(){
    var index = $(this).index();
    // スライドさせる
    $content.css('transform', 'translate('+ -700 * index +'px)');

    // ドットのスタイル付け替え
    $dots.removeClass('current');
    $dots.eq(index).addClass('current');
  })


});
