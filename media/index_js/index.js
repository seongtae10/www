//주요산업소개
$('.txt li:eq(0)').css('display','block');
$('.click ul li a:eq(0)').addClass('current');
$(document).ready(function(){
    $('.click li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.click li a');
       //console.log(ind); 0 1 2 3 

        $('.bigImg img').attr('src','./images/about_big'+(ind+1)+'.jpg'); //a태그를 클릭했을 때 ind+1을 함으로써 사진이름+1으로 바뀌게 된다.
        $('.bigImg img').hide().fadeIn('fast'); //.hide =>display=none  .fadeIn =>display=>block
        $('.txt li').css('display','none');
        $('.txt li:eq('+ind+')').css('display','block');
        
        $('.click ul li a').removeClass('current');
        $('.click ul li a:eq('+ind+')').addClass('current');
       
    });
});