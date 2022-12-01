 //동아위드 슬라이드
 var position = 0; //최초위치
 var movesize = $('.news ul li').width() + 40; // 이미지 1개 너비 +40 리턴
 console.log(movesize);

 // 갤러리 복제
 $('.newsInner ul').after($('.newsInner ul').clone());

 //동아위드 방향키 클릭시
 $('.btn').click(function (e) {
   e.preventDefault();

   if ($(this).is('.newsLeftBtn')) {
     //이전버튼 클릭
     if (position == -2000) {
       $('newsInner').css('left', -0);
       position = -0;
     }

     position -= movesize; // 400씩 감소
     console.log(position);
     $('.newsInner')
       .stop()
       .animate({
           left: position,
         },
         'fast',
         function () {
           if (position <= -2000) {
             $('.newsInner').css('left', 0);
             position = 0;
           }
         }
       );
     //.clearQueue();
   } else if ($(this).is('.newsRightBtn')) {
     //다음버튼 클릭
     if (position == 0) {
       // 맨처음에 오른쪽 버튼을 클릭했을 때 발생하는 오류 막아줌
       $('.newsInner').css('left', -2000);
       position = -2000;
     }

     position += movesize; // 400씩 증가
     console.log(position);
     $('.newsInner')
       .stop()
       .animate({
           left: position,
         },
         'fast',
         function () {
           if (position >= 0) {
             $('.newsInner').css('left', -2000);
             position = -2000;
           }
         }
       );
     //.clearQueue();
   }
 });



































     // 미디어센터
     var mediaCount = 10; // 총 갯수
     var mediaSize = 420; // 개당 사이즈
     var mediaPosition = -4200; // 첫값 기본셋팅
     var mediaWidth = mediaCount * mediaSize; //총갯수 * 개당사이즈
 
     // 총 5개일 때 첫값 -2100, 끝값 -4200
     // 총 10개 일 때는 첫값 -4200, 끝값 -8400
     
     $('.movebox ul').after($('.movebox ul').clone()).after(($('.movebox ul:first').clone())); //3개 복제
     $('.movebox').css('width', mediaWidth*3).css('left',-4200);
 
     $('.media_btn a').click(function(e){
         e.preventDefault();
 
         if($(this).is('.btnPrev')){
             
             if(mediaPosition == -8400){ // 끝값과 같으면
                 $('.movebox').css('left',-4200); // 첫값으로
                 mediaPosition = -4200; // 첫값으로
             };
             mediaPosition -= mediaSize;
 
             $('.movebox').stop().animate({left:mediaPosition}, 'fast', // 콜백함수 (마지막에 계산)
             function(){
                 if(mediaPosition == -8400){
                     $('.movebox').css('left',-4200);
                     mediaPosition = -4200;
                 };
             });
 
         } else if ($(this).is('.btnNext')){
             
             if(mediaPosition == -4200){ // 첫값과 같으면
                 
                 $('.movebox').css('left',-8400); // 끝값으로
                 mediaPosition = -8400; // 끝값으로
                 
             }
             mediaPosition += mediaSize;
 
             $('.movebox').stop().animate({left:mediaPosition}, 'fast', // 콜백함수 (마지막에 계산)
             function(){
                 if(mediaPosition == -4200){
                     $('.movebox').css('left',-8400);
                     mediaPosition = -8400;
                 };
             });
 
         } else if ($(this).is('.more')){ // more 링크
             var thisurl = $('.media_btn .more').attr('href');
             window.location = thisurl;            
         }
 
     });
 




      // 미디어센터
      var mainMedia = $('.media').offset().top - mainScrollGap;
      if(mainScroll > mainMedia){
          $('.media').addClass('active');
      } else if(mainScroll < mainMedia - 500){
          $('.media').removeClass('active');
      };


















      // JavaScript Document
$(document).ready(function() {
    var position=0;  //최초위치
    var movesize=150; //이미지 하나의 너비
   // var timeonoff;
   
    $('.slide_gallery ul').after($('.slide_gallery ul').clone());
  /*
    function moveG() {
        position-=movesize;  // 150씩 감소
        $('.slide_gallery').stop().animate({left:position}, 'fast',
            function(){							
            if(position==-750){
                $('.slide_gallery').css('left',0);
                position=0;
            }
        });
    }

    timeonoff= setInterval(moveG, 3000);
  */
    
        //슬라이드 겔러리를 한번 복제
 
  $('.button').click(function(e){
     e.preventDefault();

     //clearInterval(timeonoff);
     
     if($(this).is('.m1')){  //이전버튼 클릭
         
          position-=movesize;  // 150씩 감소
              $('.slide_gallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==-750){
                        $('.slide_gallery').css('left',0);
                        position=0;
                    }
                });
     }else if($(this).is('.m2')){  //다음버튼 클릭
           if(position==0){
                $('.slide_gallery').css('left',-750);
                position=-750;
            }
 
            position+=movesize; // 150씩 증가
            $('.slide_gallery').stop().animate({left:position}, 'fast',
                function(){							
                    if(position==0){
                        $('.slide_gallery').css('left',-750);
                        position=-750;
                    }
                });
      }
   });
});