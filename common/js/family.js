
$(document).ready(function() {
   /*	
	$('.select .arrow').click(function(){
		$('.select .aList').fadeIn('slow');			  
	});

	$('.select .aList').mouseleave(function(){
		$(this).fadeOut('fast');			  
	});
  */
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('fast');	
		$(this).find('span').text('▲');	
	},function(){
        $('.select .aList').fadeOut('fast');
		$(this).find('span').text('★');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.select .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
       });
 
});

