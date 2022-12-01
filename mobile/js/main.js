$(document).ready(function(){  		
    
    var startX, endX;
    var imgCount;   //이미지 개수
    var imgSize;   //이미지 너비
    var imgIndex=0;  //이미지 순서
    
    
    imgCount=$('.gallery_swiper li').length;  //li의 개수를 담는다
    imgSize=$(window).width();  // 페이지 로드시 윈도우의 너비값을 li의 너비값으로 반환한다
    var liMargin = imgSize/100*3;  
     $('.gallery_swiper li').width(imgSize/100*94);  
     $('.gallery_swiper li').css("margin-left",liMargin)
     $('.gallery_swiper li').css("margin-right",liMargin)
     console.log(liMargin)
     $('.gallery_swiper .pageNum span:eq(0)').css({'background':'#000'});  
       
    
   
   $('.gallery_swiper').on('touchstart mousedown',function(e){
     
    e.preventDefault();
          
    startX=e.pageX || e.originalEvent.touches[0].pageX;
          
    //$('body').append(startX + '<br>');
          
   });
       
       
   
   
   
   $('.gallery_swiper').on('touchend mouseup',function(e){
       
    e.preventDefault();
          
    endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
           
    //$('body').append(endX + '<br>');
       
        
          
    if(startX<endX) {  
        //$('body').append(' 오른쪽으로 터치드래그' + '<br>');
        imgIndex--;
        
         if(imgIndex<0)imgIndex=0;
        $('.jj').text(imgIndex);
        $('.gallery_swiper ul').animate({left:-imgSize*imgIndex},'fast');
        
    }else{      
        //$('body').append(' 왼쪽로 터치드래그' + '<br>');
        imgIndex++;
        if(imgIndex>=imgCount)imgIndex=imgCount-1;
        $('.jj').text(imgIndex);
        $('.gallery_swiper ul').animate({left:-imgSize*imgIndex},'fast');
    }
         
     $('.gallery_swiper .pageNum span').css({'background':'#fff'});
     $('.gallery_swiper .pageNum span:eq('+imgIndex+')').css({'background':'#000'});
       
       
    });
       
       
   
       
   $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
         imgSize = $(window).width();   //너비를 li의 크기로 반환한다
         var liMargin = imgSize/100*3;  
          $('.gallery_swiper ul').css('left',-imgSize*imgIndex); //left값을 li의 너비 값에 대응하게 처리
          $('.gallery_swiper li').width(imgSize/100*94);  
          $('.gallery_swiper li').css("margin-left",liMargin)
          $('.gallery_swiper li').css("margin-right",liMargin)
   });  
   });



       /*ethics 이벤트*/
    
       var busiCount = 2;
       var busiCnt = 1;
   
       // ethics 좌/우 이동
       $('.ethics .ethicsBox ul li:eq(0)').show();
       $('.ethics .ethicsImage img:eq(0)').show();
   
       $('.ethics .ethicsBtn a').click(function(e){
           e.preventDefault();
   
           if($(this).is('.btnPrev')){ // 오른쪽 버튼 클릭
               if(busiCnt == 1){ busiCnt = busiCount+1; }
               busiCnt--; //카운트 감소  // 1 2 1 2
           }else if($(this).is('.btnNext')){  //왼쪽 버튼 클릭
               if(busiCnt == busiCount){ busiCnt = 0; }
               busiCnt++; //카운트 1씩증가
           }
   
           $('.ethics .ethicsBox ul li').hide();
           $('.ethics .ethicsBox ul li:eq('+ (busiCnt-1) +')').fadeIn();
   
           $('.ethics .ethicsImage img').hide();
           $('.ethics .ethicsImage img:eq('+ (busiCnt-1) +')').fadeIn();
   
       });




        // FAQ
        var faqArticle = $('.faq ul li'); // 전체 li

        $('.faq ul li p a').click(function(e){
            e.preventDefault();

            var answer = $(this).parent().parent('li'); // 해당 li

            if(answer.is('.on')){ // li에 on이 있으면
                
                answer.removeClass('on'); // on없애고
                answer.children().next().stop().slideUp('fast'); // 본인 닫아라

            } else { // li에 on이 없으면

                faqArticle.removeClass('on'); // 다른 li에 on 없애고
                answer.addClass('on'); // 내 li에만 on을 넣어라
                
                faqArticle.children().next().stop().slideUp('fast');
                answer.children().next().stop().slideDown('fast');
            }
        });

