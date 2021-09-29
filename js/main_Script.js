

$(document).ready(function(){
  $(".open1").click(function(){
    $(".leftWrap").animate({right:0},500,"swing")	;
    })
    
    $(".close1").click(function(){
      $(".leftWrap").animate({right:300},500,"swing")	;
    })
  });
