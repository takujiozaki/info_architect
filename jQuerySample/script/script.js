$(function(){
    $('.menu-btn').on('click', function(){
      //ボタンの表示
      const menubtn_i = $('.menu-btn i');
      if(menubtn_i.hasClass("fa-bars")){
        $('.menu-btn i').removeClass("fa-bars");
        $('.menu-btn i').addClass("fa-times");
      }else{
        $('.menu-btn i').removeClass("fa-times");
        $('.menu-btn i').addClass("fa-bars");
      }
      //画面切り替え
      $('.menu').toggleClass('is-active');
    });

    $('.slider').bxSlider();
}());