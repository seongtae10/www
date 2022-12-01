// scroll transition
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var mainScroll = $(window).scrollTop(); //스크롤의 거리
    // var mainScrollGap = $(window).height() / 2;
    var mainScrollGap = $(window).height();
    
    // 주요산업소개
    var mainintroduction = $('.introduction').offset().top;
    if(mainScroll > mainintroduction - 600){
        $('.introduction').addClass('active');
        
    } else if(mainScroll < mainintroduction - 500){
        $('.introduction').removeClass('active');
    };
    

    // 윤리경영/사회공헌
    var mainethics = $('.ethics').offset().top;
    if(mainScroll > mainethics - 600){
        $('.ethics').addClass('active');
    } else if(mainScroll < mainethics -500){
        $('.ethics').removeClass('active');
    };
    

    // Latest News
    var mainnews = $('.dg-container').offset().top;
    if(mainScroll > mainnews - 600){
        $('.dg-container').addClass('active');
    } else if(mainScroll < mainnews - 500){
        $('.dg-container').removeClass('active');
    };

    // 인사채용
    var mainrecruit = $('.recruit').offset().top;
    if(mainScroll > mainrecruit -600){
        $('.recruit').addClass('active');
    } else if(mainScroll < mainrecruit - 500){
        $('.recruit').removeClass('active');
    };

    // // 인재채용
    // var mainRecruit = $('.recruit').offset().top - mainScrollGap - 200;
    // if(mainScroll > mainRecruit){
    //     $('.recruit').addClass('active');
    // } else if(mainScroll < mainRecruit - 500){
    //     $('.recruit').removeClass('active');
    // };

});


//주요산업소개
$('.con1right ul li:eq(0)').css('display','block'); //이건 ul li 자체를 display:none 을 처리하여 클릭하기 전까기 계속 display:none이기때문에 처음값을 li:eq()값을 li:eq(0)으로 만들고=>0일 때 0인 영역을 display:block으로 만들어주기 때문에 잘 영역이 생기고 잘 보인다.
$('.redBox .topTxt li:eq(0)').css('display','block');
$('.click ul li a:eq(0)').addClass('current');
$(document).ready(function(){
    $('.click li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.click li a');
       //console.log(ind); 0 1 2 3 

        $('.con').attr('src','./images/mainconbox_'+(ind+1)+'.jpg'); //a태그를 클릭했을 때 ind+1을 함으로써 사진이름+1으로 바뀌게 된다.
        $('.con').hide().fadeIn('fast'); //.hide =>display=none  .fadeIn =>display=>block
        $('.con1right ul li').css('display','none'); //opacity보단 해당영역까지 없애는 display:none을 사용함으로써 무로 만든다.        
        $('.con1right ul li:eq('+ind+')').css('display','block'); //a태그를 클릭했을 때 li:eq(0)일 때 콘솔로그를 찍었을 때 0으로 나온다. 그럼 a를 클릭했을 때 상황에 바뀌게 하려면 어떻게 해야할까? 바로 전에 사용했던 ind값을 통해서 능동적을 바뀌게 하면 된다. li:eq('+ind+')를 넣음으로써 a를 클릭시 ind값으로 0 1 2 3으로 바뀌게 되어 li도 마찬가지로 바뀌게 된다. 그리고 .css를 통해 display:none이 었던걸 0 1 2 3을 통해서 display:block으로 바뀌어줌으로써 안보이고 영역에 없던게 생기게 되는 것 이다.
        $('.redBox .topTxt li').css('display','none');
        $('.redBox .topTxt li:eq('+ind+')').css('display','block');
        
        $('.click ul li a').removeClass('current');
        $('.click ul li a:eq('+ind+')').addClass('current');
       
    });
});






  
