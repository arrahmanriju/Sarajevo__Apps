$(function(){

// banner slider
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
      });

      // gallery pop up light and mix it up

      var containerEl = document.querySelector('.gallery-main');

      var mixer = mixitup(containerEl);

      // conter up

      $('.counter').counterUp({
        delay: 10,
        time: 200000
    });

})