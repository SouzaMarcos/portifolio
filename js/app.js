$( document ).ready(function() {
    if($(window).height()>=430){
	   $(".banner").height($(window).height());
	   // $('.large-header').height($(window).height());
    }else{
        $(".banner").height(500);
        // $('.large-header').height(500);
    }
 //    $( ".banner .card" ).animate({ "max-width": "600px" }, 800 , function() {
 //    	 $( ".banner .card article" ).show('fast');
	// });

	$(window).resize(function(){
        //alert($(window).height());
        if($(window).height()>=430){
		  	$(".banner").height($(window).height());
        }else{
            $(".banner").height(500);
        }
	});
	$('body').on('click','button[name="entrar"]',function(){
		$("html, body").animate({ scrollTop: $('section.sobre').offset().top }, 500);
	});
	// $(".section.white").css('min-height',$(window).height()+1);
	// $(window).resize(function(){
	// 	$(".section.white").css('min-height',$(window).height());
	// });
	// $(".button-collapse").sideNav();
	// $('.parallax').parallax();
	// $('ul.tabs').tabs();
 //    $('.tooltipped').tooltip({delay: 1});
    /*$('.slider').slider({full_width: true,indicators:false});
    $('.slider').slider('to',0);
    $('.slider').slider('to',1);*/
    
    // Handle clicks on indicators
    /*$('#menu ul li').click(function () {
    	if($(this).index()>0){
    		$(this).addClass('active');
	    	$('.slider').slider('to',$(this).index());
	    	$('.slider').slider('pause');
	    }else{
	    	 $('html,body').animate({scrollTop: $("#inicio").offset().top},1000);
	    }
    });*/
	// $('.section .paginas section.trabalhos').hide();
	// $('.section .paginas section.contato').hide();
	// $('.entrar .btn').click(function (){
	// 	$('html,body').animate({scrollTop: $("#menu").offset().top+1},1000);
	// });
	// $('#menu ul li').click(function () {
 //    	if($(this).index()>0){
 //    		/*$(this).addClass('active');
	//     	$('.slider').slider('to',$(this).index());
	//     	$('.slider').slider('pause');*/
	//     	$('.section .paginas section').each(function(){
	//     		$(this).hide();
	//     	});
	//     	$('.section .paginas section.'+$(this).find('a').attr('href')).fadeIn(1000);
	//     	//alert($(this).find('a').attr("href"));
	//     	$('html,body').animate({scrollTop: $("#menu").offset().top},500);
	    	
	//     }else{
	//     	$('html,body').animate({scrollTop: $("#inicio").offset().top},500);
	//     	return false;
	//     }
 //    });
    $('button').click(function(){
        $('#cube').removeClass();
        $('#cube').addClass($(this).prop('name'));
    });

});