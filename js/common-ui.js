$(".nano").nanoScroller({ scroll: 'top',hide:false });

//폰트 종류 변경 컨트롤
$('.ui-font-family>.title').on('click',function(){
  if($('.ui-font-family').hasClass('open')){
    $('.ui-font-family').removeClass('open');
  }else{

    $('.ui-font-family').addClass('open');
  }
});
//폰트 스타일 변경 컨트롤
$('.ui-font-style>li>a').on('click',function(){
  var li = $(this).parent();
  if(li.hasClass('on')){
    li.removeClass('on')
  }else{
    layer_clear();
    li.addClass('on')
  }
});
//하단 메뉴들 컨트롤
$('footer>.menu>li>a').on('click',function(){
  var li = $(this).parent();
  if(li.hasClass('on')){
    li.removeClass('on')
  }else{
    li.addClass('on')
  }
});



//셀렉트박스 컨트롤
$('.ui-select>.title').on('click',function(){
  if($('.ui-select').hasClass('open')){
    $('.ui-select').removeClass('open');
  }else{
    $('.ui-select').addClass('open');
  }
});

//셀렉트박스(select-a) 타입 컨트롤
$('.select-a>.select-title').on('click',function(){
  var _this = $(this).parents('.select-a');
  console.log(_this);
  if(_this.hasClass('open')){
    _this.removeClass('open');
  }else{
    _this.addClass('open');
  }
});
//sound 셀렉트 컨트롤
$('.select-a.sound-onoff .sound-onoff-toggle').on('click',function(){
  if($(this).parent().hasClass('soundOn')){
    $(this).parent().removeClass('soundOn');
  }else{
    $(this).parent().addClass('soundOn');
  }
});

//스티커 특수문자 상용문구 컨트롤
$('.ui-util>li>a').on('click',function(){

  var li = $(this).parent();
  if(li.hasClass('open')){
    li.removeClass('open');
  }else{
    layer_clear();
    //$(this).parents('.ui-util').find('li').removeClass('open');
    li.addClass('open');
  }

});
//스티커 특수문자 상용문구 컨트롤
$('.ui-util2>li>a').on('click',function(){
  var li = $(this).parent();
  if(li.hasClass('open')){
    li.removeClass('open');
  }else{
    layer_clear();
    //$(this).parents('.ui-util').find('li').removeClass('open');
    li.addClass('open');
  }
});

//상용문구 컨트롤
$('.custom-mungu .btn-close').on('click',function(){
  $(this).parents('li').removeClass('open');
});

//풀스크린
$('.btn-fullscreen').on('click',function(){
  if($('html').hasClass('fullscreen')){
    $('html').removeClass('fullscreen');
  }else{
    $('html').addClass('fullscreen');
  }
});


//
$('.btn-juso').on('click',function(){
  if($('.jusoUpload').hasClass('open')){
    $('.jusoUpload').removeClass('open');
  }else{
    $('.jusoUpload').addClass('open');
  }

})
$('.jusoUpload .btn-close').on('click',function(){
  $('.jusoUpload').removeClass('open');
});

$('.write-sends-open').on('click',function(){
  if($('.write-sends').hasClass('open')){
    $('.write-sends').removeClass('open')
  }else{
    $('.write-sends').addClass('open')
  }
})
$('.write-sends .btn-close').on('click',function(){
  $('.write-sends').removeClass('open')
});

// 스킨 체크 컨트롤
$('.skin-list>ul>li').on('click',function(){
  $(this).parents('.skin-list').find('ul>li').removeClass('chk');
  $(this).addClass('chk');
})

$('.print-list .btn-close').on('click',function(){
  $('.ui-util2>li:nth-child(1)').removeClass('open');
});

/* 현재 떠있는 레이어창 제거(왼쪽 레이어 겹치는 현상때문에 만든함수)*/
function layer_clear(){
  $('.ui-font-style>li:nth-child(4)').removeClass('on');
  $('.ui-util>li').removeClass('open');
  $('.ui-util2>li').removeClass('open');
  $('.write-sends').removeClass('open');
}
