

 $(document).ready(function(){
    // alert()
    // .gnb항목 숨겼다 나타나게 하기(모바일 오픈)
    
$(".open1").click(function(){
  $(".leftWrap").animate({right:220},400,"swing")	;
  })
  
  $(".close1").click(function(){
    $(".leftWrap").animate({right:0},400,"swing")	;
  })

  //head항목 슬라이드하면 색상 변경
    // offset() -> 선택한 요소의 좌표 : x y
    // scrollTop() -> 스크롤의 수직위치
    // $(document) 좌표를 비교
   
    var offsetH = $(".head").offset();  // 0
    $(window).scroll(function(){
      //  $(document) > offsetH  - fixed add
      // $(document) < offsetH  - fixed remove
      if($(document).scrollTop() > offsetH.top){
        $(".head").addClass("fixed");
      }else{
        $(".head").removeClass("fixed");
      }
    });

    $('.canvus').easyPieChart({
      barColor: '#fff', //차트가 그려질 색
      trackColor: '#222', //차트가 그려지는 트랙 색상
      scaleColor: '#fff', //차트테두리에 그려지는 기준선 예:눈금표
      lineCap: 'round', //차트 선의 모양, 종류,butt,round,square
      lineWidth: 15, // 차트 선의 두께
      size: 150, // 차트크기
      animate: 1000, // 그려지는 시간
      onStart: $.noop,
      onStop: $.noop
    });

    var menu = $(".gnb > li");
    var content = $(".content > section");

    menu.click(function(){
      event.preventDefault();
      var idx = $(this).index();
      var section = content.eq(idx);
      var sectH = section.offset().top;
      $("html , body").stop().animate({scrollTop : sectH});
    });

    $(window).scroll(function(){
      var location = $(window).scrollTop(); // 스크롤의 현재 위치

      // location값이 sect01 영역 안에 있을때 menu1 을 활성화
      // 영역1 <= location < 영역2  -- 우리가 원하는 조건
      // 영역1 <= location  and  location < 영역2 -- 실제 작성
      // and --->  &&
      // 0 번 부터 시작
      // 제이쿼리 플러그인을 사용해서 고난이도의 동작에 활용
      if(location >= $("#sect01").offset().top && location < $("#sect02").offset().top){
        menu.removeClass("on");
        menu.eq(0).addClass("on")
      }else if(location >= $("#sect02").offset().top && location < $("#sect03").offset().top){
        menu.removeClass("on");
        menu.eq(1).addClass("on")
      }else if(location >= $("#sect03").offset().top && location < $("#sect04").offset().top){
        menu.removeClass("on");
        menu.eq(2).addClass("on")
      }else if(location >= $("#sect04").offset().top){
        menu.removeClass("on");
        menu.eq(3).addClass("on")
      }
      //구문이 반복되어 동작하는 경우 반복문 for , each  반복문의 통해

    });

// HERO SLIDER
var menu = [];
jQuery('.swiper-slide').each( function(index){
    menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
});
var interleaveOffset = 0.5;
var swiperOptions = {
    loop: true,
    speed: 800,
    parallax: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        progress: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }      
        },

        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },

        setTransition: function(speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition =
                speed + "ms";
            }
        }
    }
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function(indx){
    if ($(this).attr("data-background")){
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});
});