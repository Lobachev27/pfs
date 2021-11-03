/*Переключение табов на первом экране */

$(document).ready(function() {

  $('.layout-main :input[value="dog"]').prop('checked', true);
  $('#petTypeForm .btn-next').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-2.html";
  });

  $('.layout-main .radio').on('change', radioChangeTab);

  function radioChangeTab() {
     if ($(':input[value="dog"]').is(":checked")){
      $('#tabDog').addClass("active");
      $('#tabCat').removeClass("active");
      $('#petTypeForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-2.html";
      });

    }
    if($(':input[value="cat"]').is(":checked")){
      $('#tabCat').addClass("active");
      $('#tabDog').removeClass("active");
      $('#petTypeForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-2.html";
      });
    }
  }

});

/*Блокировка submit при не выбранной radio button*/

$(document).ready(function() {

  $('.layout-2 :input[type="submit"]').prop('disabled', true);
  $('.layout-2 :input[type="radio"]').on('change', submitDisabled);

  $('.layout-3 :input[type="submit"]').prop('disabled', true);
  $('.layout-3 :input[type="radio"]').on('change', submitDisabled);

  $('.layout-4 :input[type="submit"]').prop('disabled', true);
  $('.layout-4 :input[type="radio"]').on('change', submitDisabled);

  $('.layout-5 :input[type="radio"]').on('change', submitDisabled);

  function submitDisabled() {
    if ($(':input[type="radio"]').is(":checked")){
      $(':input[type="submit"]').prop('disabled', false)
    } else {
      $(':input[type="submit"]').prop('disabled', true);
    }

    if ($('#foodSortCatForm :input[value="daily"]').is(":checked")){
      $('#foodSortCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-3.html";
      });

    }
    if($('#foodSortCatForm :input[value="diet"]').is(":checked")){
      $('#foodSortCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-3d.html";
      });
    }

    if($('#ageCatForm :input[type="radio"]').is(":checked")){
      $('#ageCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-4.html";
      });
    }

    if($('#dietCatForm :input[type="radio"]').is(":checked")){
      $('#dietCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-4d.html";
      });
    }

    if($('#sterilisationCatForm :input[type="radio"]').is(":checked")){
      $('#sterilisationCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-5.html";
      });
    }

    if($('#foodTypeCatForm :input[type="radio"]').is(":checked")){
      $('#foodTypeCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-7.html";
      });
    }

    if($('#foodTypeDietCatForm :input[type="radio"]').is(":checked")){
      $('#foodTypeDietCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./result-d.html";
      });
    }

    if ($('#foodSortDogForm :input[value="daily"]').is(":checked")){
      $('#foodSortDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-3.html";
      });

    }
    if($('#foodSortDogForm :input[value="diet"]').is(":checked")){
      $('#foodSortDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-3d.html";
      });
    }

    if($('#foodTypeDogForm :input[type="radio"]').is(":checked")){
      $('#foodTypeDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-4.html";
      });
    }

    if($('#dietDogForm :input[type="radio"]').is(":checked")){
      $('#dietDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-4d.html";
      });
    }

    if ($('#sizeDogForm :input[value="small"], #sizeDogForm :input[value="middle"]').is(":checked")){
      $('#sizeDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-5s.html";
      });

    }
    if($('#sizeDogForm :input[value="big"]').is(":checked")){
      $('#sizeDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-5b.html";
      });
    }

    if($('#ageDogSmallForm :input[type="radio"]').is(":checked")){
      $('#ageDogSmallForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-6s.html";
      });
    }

    if($('#BodyTypeDogForm :input[type="radio"]').is(":checked")){
      $('#BodyTypeDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-6b.html";
      });
    }

    if($('#ageDogBigForm :input[type="radio"]').is(":checked")){
      $('#ageDogBigForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./dog-7b.html";
      });
    }

    if($('#foodTypeDietDogForm :input[type="radio"]').is(":checked")){
      $('#foodTypeDietDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./result-d.html";
      });
    }
  }

  $('#foodSortCatForm .btn-prev, #foodSortDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./";
  });

  $('#ageCatForm .btn-prev, #dietCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-2.html";
  });

  $('#sterilisationCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-3.html";
  });

  $('#foodTypeDietCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-3d.html";
  });

  $('#specialNeedsCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-4.html";
  });

  $('#foodTypeCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-5.html";
  });

  $('#foodTasteCatForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./cat-6.html";
  });

  $('#foodTypeDogForm .btn-prev, #dietDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-2.html";
  });

  $('#sizeDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-3.html";
  });

  $('#foodTypeDietDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-3d.html";
  });

  $('#ageDogSmallForm .btn-prev, #BodyTypeDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-4.html";
  });

  $('.steps-6 #specialNeedsDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-5s.html";
  });

  $('#ageDogBigForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-5b.html";
  });

  $('.steps-7 #specialNeedsDogForm .btn-prev').click(function (e) {
    e.preventDefault();
    document.location.href = "./dog-6b.html";
  });

});

/*Блокировка submit при не выбранном checkbox и блокировка чекбоксов, если выбрано "нет потребностей"*/

$(document).ready(function() {

  $('.layout-5 :input[type="submit"]').prop('disabled', true);
  $('.layout-5 :input[type="checkbox"]').on('change', submitDisabled2);

  $('.layout-6 :input[type="submit"]').prop('disabled', true);
  $('.layout-6 :input[type="checkbox"]').on('change', submitDisabled2);

  $('.layout-5 :input[value="no needs"]').on('change', checkboxDisabled);

  function submitDisabled2() {
    if ($(':input[type="checkbox"]').is(":checked")){
      $(':input[type="submit"]').prop('disabled', false);
    } else {
      $(':input[type="submit"]').prop('disabled', true);
    }

    if($('#specialNeedsCatForm :input[type="checkbox"]').is(":checked")){
      $('#specialNeedsCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-6.html";
      });
    }

    if($('#foodTasteCatForm :input[type="checkbox"]').is(":checked")){
      $('#foodTasteCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./result.html";
      });
    }

    if($('#specialNeedsDogForm :input[type="checkbox"]').is(":checked")){
      $('#specialNeedsDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./result.html";
      });
    }
  }

  function checkboxDisabled() {
    if ($(this).is(":checked")){
      $(':input[type="checkbox"]').prop('checked', false).prop('disabled', true);
      $(this).prop('checked', true).prop('disabled', false);
    } else {
      $(':input[type="checkbox"]').prop('disabled', false);
    }

    if($('#specialNeedsCatForm :input[type="checkbox"]').is(":checked")){
      $('#specialNeedsCatForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./cat-6.html";
      });
    }

    if($('#specialNeedsDogForm :input[type="checkbox"]').is(":checked")){
      $('#specialNeedsDogForm .btn-next').click(function (e) {
        e.preventDefault();
        document.location.href = "./result.html";
      });
    }
  }

});

/*Верхний слайдер с товарами*/

$(document).ready(function() {
  var swiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(swiper == undefined) {
      swiper = new Swiper('.result_top .swiper-container', {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 70,
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        centerInsufficientSlides: true,
        pagination: {
          el: ".result_top .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.result_top .swiper-button-next',
          prevEl: '.result_top .swiper-button-prev'
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          630: {
            slidesPerView: 1,
          }
        }
      });
      if(($(".result_top .swiper-slide").length <= 1) && (screenWidth < 630) || ($(".result_top .swiper-slide").length <= 2) && (screenWidth > 630) || ($(".result_top .swiper-slide").length <= 3) && (screenWidth > 992) || ($(".result_top .swiper-slide").length <= 3) && (screenWidth > 1199)) {
        $('.result_top .swiper-wrapper').addClass( "disabled" );
        $('.result_top .swiper-pagination').addClass( "disabled" );
      } else{
        $('.result_top .swiper-wrapper').removeClass( "disabled" );
        $('.result_top .swiper-pagination').removeClass( "disabled" );
      }
    } else {
      if(($(".result_top .swiper-slide").length <= 1) && (screenWidth < 630) || ($(".result_top .swiper-slide").length <= 2) && (screenWidth > 630) || ($(".result_top .swiper-slide").length <= 3) && (screenWidth > 992) || ($(".result_top .swiper-slide").length <= 3) && (screenWidth > 1199)) {
        $('.result_top .swiper-wrapper').addClass( "disabled" );
        $('.result_top .swiper-pagination').addClass( "disabled" );
      } else{
        $('.result_top .swiper-wrapper').removeClass( "disabled" );
        $('.result_top .swiper-pagination').removeClass( "disabled" );
      }
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

});

/*Нижний слайдер с товарами*/

$(document).ready(function() {
  var swiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(swiper == undefined) {
      swiper = new Swiper('.result_bottom .swiper-container', {
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 25,
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        centerInsufficientSlides: true,
        pagination: {
          el: ".result_bottom .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.result_bottom .swiper-button-next',
          prevEl: '.result_bottom .swiper-button-prev'
        },
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          630: {
            slidesPerView: 1,
          }
        }
      });
      if(($(".result_bottom .swiper-slide").length <= 1) && (screenWidth < 630) || ($(".result_bottom .swiper-slide").length <= 2) && (screenWidth > 630) || ($(".result_bottom .swiper-slide").length <= 3) && (screenWidth > 767) || ($(".result_bottom .swiper-slide").length <= 4) && (screenWidth > 1199)) {
        $('.result_bottom .swiper-wrapper').addClass( "disabled" );
        $('.result_bottom .swiper-pagination').addClass( "disabled" );
      } else{
        $('.result_bottom .swiper-wrapper').removeClass( "disabled" );
        $('.result_bottom .swiper-pagination').removeClass( "disabled" );
      }
    } else {
      if(($(".result_bottom .swiper-slide").length <= 1) && (screenWidth < 630) || ($(".result_bottom .swiper-slide").length <= 2) && (screenWidth > 630) || ($(".result_bottom .swiper-slide").length <= 3) && (screenWidth > 767) || ($(".result_bottom .swiper-slide").length <= 4) && (screenWidth > 1199)) {
        $('.result_bottom .swiper-wrapper').addClass( "disabled" );
        $('.result_bottom .swiper-pagination').addClass( "disabled" );
      } else{
        $('.result_bottom .swiper-wrapper').removeClass( "disabled" );
        $('.result_bottom .swiper-pagination').removeClass( "disabled" );
      }
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

});

/*Карточка товара*/

$(document).ready(function() {

  var productCount = $('#productCount');
  var priceCount = $('#priceCount');
  var product = 0;
  var price = 0;

  /*if(price === 0){
    $(".btn-buy").prop('disabled', true);
  }*/

  $('.btn-basket').click(function(){
    if($(this).parent().parent().parent().hasClass("buy")){
      return false;
    } else{
      $(this).parent().parent().parent().addClass("buy");
      $(this).text('1');
    }

    product = +productCount.text();
    product++;
    productCount.text(product);

    price = +priceCount.text();
    price = price + +$(this).parent().prev().children(".product_price_value").text();
    priceCount.text(price);

    $(".btn-buy").prop('disabled', false);
  });

  $('.product_plus').click(function(){
    var countEl = $(this).prev().prev();
    var count = +countEl.text();
    count++;
    countEl.text(count);

    product = +productCount.text();
    product++;
    productCount.text(product);

    price = +priceCount.text();
    price = price + +$(this).parent().prev().children(".product_price_value").text();
    priceCount.text(price);

    $(".btn-buy").prop('disabled', false);
  });

  $('.product_minus').click(function(){
    var countEl = $(this).prev();
    var count = +countEl.text();
    if (count > 1) {
      count--;
      countEl.text(count);
    } else{
      $(this).parent().parent().parent().removeClass("buy");
      $(this).prev().text('В корзину');
    };
    product = +productCount.text();
    product--;
    productCount.text(product);

    price = +priceCount.text();
    price = price - +$(this).parent().prev().children(".product_price_value").text();
    priceCount.text(price);

    if(price === 0){
      $(".btn-buy").prop('disabled', true);
    }
  });
});
