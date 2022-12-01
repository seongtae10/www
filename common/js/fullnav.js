
$(document).ready(function() {

   var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).addClass('on');
          
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).removeClass('on')
           }else if(scroll>smh-50){
               $(this).addClass('on')
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-50){//스크롤300까지 내리면
               $('#headerArea').addClass('on');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').removeClass('on');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:330},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:135},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this)
       },function() {
          $('.depth1',this)
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:200},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:50},'normal').clearQueue();
    });
    

    //맨위로 이동
    $('.topMove').hide();
           
             $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
                  var scroll = $(window).scrollTop(); //스크롤의 거리
                 var cont = $('#content').offset().top;
                 
                  $('.text').text(scroll);

                  if(scroll>cont-100){ //500이상의 거리가 발생되면
                      $('.topMove').fadeIn('slow');  //top보여라~~~~
                  }else{
                      $('.topMove').fadeOut('fast');//top안보여라~~~~
                  }
             });
    $('.topMove').click(function(e){
        e.preventDefault();
         //상단으로 스르륵 이동합니다.
        $("html,body").stop().animate({"scrollTop":0},1000); 
     });
});
