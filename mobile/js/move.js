$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#d12c1c'); //첫번째 불켜
    $('.btn1').css('width','10'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
     $('.gallery li').hide(); //모든 이미지를 보이지 않게.
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 		                    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      //첫번째 바뀌고 난 이후
      $('.mbutton').css('background','#fff'); //버튼불다꺼!!
      $('.mbutton').css('width','10'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#d12c1c');//자신만 불켜
      $('.btn'+cnt).css('width','10');    

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').hide(); //모든 이미지 안보인다.

		  if($target.is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($target.is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($target.is('.btn3')){ 
				 cnt=3; 
		  }else if($target.is('.btn4')){
				 cnt=4; 
		  }

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      //   $('.btn'+i).css('width','16');
		  // }
      //바 클릭했을 때 바가 바뀌는거
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','10');
      $('.btn'+cnt).css('background','#d12c1c');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','10');
      
      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      
    });



	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
	       //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;
         $(this).html('<i class="fa-regular fa-circle-play"></i>');
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   onoff=true; 
       $(this).html('<i class="fa-regular fa-circle-stop"></i>');
	   }
  });	

  //   //왼쪽/오른쪽 버튼 처리
  //   $('.main .btn').click(function(){

  //     clearInterval(timeonoff); //살인마

  //     if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
  //         if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
  //         //if(cnt==imageCount+1)cnt=1;  
  //         cnt++; //카운트 1씩증가
  //     }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
  //         if(cnt==1)cnt=imageCount+1;
  //         if(cnt==0)cnt=imageCount;
  //         cnt--; //카운트 감소
  //     }

  //   // for(var i=1;i<=imageCount;i++){
  //   //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  //   // }
  //   $('.gallery li').hide(); //모든 이미지를 보이지 않게.
  //   $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
  //   $('.mbutton').css('background','#fff'); //버튼 모두불꺼
  //   $('.mbutton').css('width','60');
  //   $('.btn'+cnt).css('background','#d12c1c');//자신 버튼만 불켜 
  //   $('.btn'+cnt).css('width','30');

  //   // if($(this).is('.btnRight')){
  //   //   if(cnt==imageCount)cnt=0;
  //   // }else if($(this).is('.btnLeft')){
  //   //   if(cnt==1)cnt=imageCount+1;
  //   // }

  //   timeonoff= setInterval( moveg , 4000); //부활

  //   if(onoff==false){
  //     onoff=true;
  //     $('.ps').html('<i class="fa-regular fa-circle-stop"></i>');
  //   }
  // });



});


// var startX, endX;

// $('.main').on('touchstart mousedown',function(e){
//     //e.preventDefault();

//     clearInterval(timeonoff); // 타이머 중지
//     startX = e.pageX || e.originalEvent.touches[0].pageX;
// });

// $('.main').on('touchend mouseup',function(e){
//     //e.preventDefault();

//     endX = e.pageX || e.originalEvent.changedTouches[0].pageX;

//     //y_size= Math.abs(startY - endY);
//     //console.log(y_size);
    
//     if(startX < endX) {
//         if(cnt == 1){ cnt = imageCount+1; } // cnt = 6
//         if(cnt == 0){ cnt = imageCount; } // cnt = 5
//         cnt--; //카운트 감소
//         //console.log('왼쪽에서 오른쪽으로 터치');

//     }else if (startX > endX){
//         if(cnt == imageCount+1){ cnt=1; }
//         if(cnt == imageCount){ cnt=0; }  //카운트 초기화
//         cnt++; //카운트 1씩증가
//         //console.log('오른쪽에서 왼쪽으로 터치');
//     } 

//     position = -(cnt-1) * windowWidth; // 현재 cnt에 해당하는 left값
//     $('.gallery').stop().animate({left:position}, 'slow');

//     $('.gallery .slogan').removeClass('active');
//     $('.gallery .slogan:eq('+ (cnt-1) +')').addClass('active');

//     $('.main .dock span').removeClass('on');// 버튼 off
//     $('.main .dock span:eq('+ (cnt-1) +')').addClass('on');// 나만 on

//     $('.main .cnt span:eq(0)').html('0'+cnt);

//     timeonoff= setInterval( moveg , 4000);
// });







	// //gnb
	// var op = false; //네비가 열려있으면(true) , 닫혀있으면(false)
	// $('.menu_open').click(function (e) {
	// 	e.preventDefault();
	// 	var documentHeight = $(document).height();
	// 	$('#gnb').css('height', documentHeight);
	// 	if (op == false) {
	// 		$('#gnb').animate({ right: 0, opacity: 1 }, 200);
	// 		$('#headerArea').css('background-color', 'white');
	// 		$('h1').css('background', 'url(../images/logobx2_03.png)no-repeat center/100% 34px');
	// 		$('.menu_open').css('color', 'black');
	// 		$('.menu_open i').attr('class', 'fas fa-times');
	// 		$('body').css({ overflow: 'hidden', height: '100' });
	// 		op = true;
	// 	} else {
	// 		$('#gnb').animate({ right: '-100%', opacity: 0 }, 'fast');
	// 		if ($(window).scrollTop() <= 1) {
	// 			$('#headerArea').css('background-color', '');
	// 			$('h1').css('background-image', 'url(../images/logowx2_03.png)no-repeat center/100% 34px');
	// 			$('.menu_open').css('color', '');
	// 		}
	// 		$('.menu_open i').attr('class', 'fas fa-bars');
	// 		$('body').css({ overflow: '', height: '' });
	// 		op = false;
	// 	}
	// });
	// //2depth 메뉴 교대로 열기 처리
	// var onoff = [false, false, false, false];
	// var arrcount = onoff.length;
	// $('.mainmenu h3 a').click(function (e) {
	// 	e.preventDefault();
	// 	var ind = $(this).parents('li').index();
	// 	if (onoff[ind] == false) {
	// 		//$('#gnb .depth1 ul').hide();
	// 		$(this).parents('li').find('ul').slideDown('fast');
	// 		$(this).parents('li').siblings('li').find('ul').slideUp('fast');
	// 		for (var i = 0; i < arrcount; i++) onoff[i] = false;
	// 		onoff[ind] = true;
	// 		$('.mainmenu span').text('▼');
	// 		$(this).find('span').text('▲');
	// 	} else {
	// 		$(this).parents('li').find('ul').slideUp('fast');
	// 		onoff[ind] = false;
	// 		$(this).find('span').text('▼');
	// 	}
	// });














// 메뉴on/off
$(document).ready(function() {
  var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
  
  $(".menu_open").click(function() { //메뉴버튼 클릭시
      
      var documentHeight =  $(document).height();
      $("#gnb").css('height',documentHeight); 

     if(op==false){
       $("#gnb").animate({right:0,opacity:1}, 'fast');
       $('#headerArea').addClass('mn_open');
       $('#headerArea').css('background-color','rgba(255,255,255,1)');
       $('#headerArea h1 a').css('background','url(./images/logobx2_03.png)').css('background-size','83px 32px');
       op=true;
     }else{
       $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
       $('#headerArea').removeClass('mn_open');
       $('#headerArea').css('background-color','rgba(0,0,0,.5)');
       $('#headerArea h1 a').css('background','url(./images/logowx2_03.png)').css('background-size','83px 32px');
       op=false;
     }

  });
  
  
   //2depth 메뉴 교대로 열기 처리 
   var onoff=[false,false,false,false];
   var arrcount=onoff.length;
   
   //console.log(arrcount);
   
   $('#gnb .depth1 h3 a').click(function(){
       var ind=$(this).parents('.depth1').index();
       
       //console.log(ind);
       
      if(onoff[ind]==false){
       //$('#gnb .depth1 ul').hide();
       $(this).parents('.depth1').find('ul').slideDown('slow');
       $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
        for(var i=0; i<arrcount; i++) onoff[i]=false; 
        onoff[ind]=true;
          
        $('.depth1 span').html('<i class="fa-solid fa-chevron-down"></i>');   
        $(this).find('span').html('<i class="fa-solid fa-chevron-up"></i>');   
           
      }else{
        $(this).parents('.depth1').find('ul').slideUp('fast'); 
        onoff[ind]=false;   
          
        $(this).find('span').html('<i class="fa-solid fa-chevron-down"></i>');     
      }
   });    
 
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