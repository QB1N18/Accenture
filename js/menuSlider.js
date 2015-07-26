$(document).ready(function(){
 
	$('#logodos').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#logodos').slideDown(1300);
		} else {
			$('#logodos').slideUp(1300);
		}
	});


	$("#showMenu").click(function(){
		var i;
		var l = 4;
		for( i=1 ; i<=l ; i++){
			$("header nav ul li").eq(i).slideToggle("fast");
			
		}
	});

	$(window).resize(function(){
        var w = $(window).width();
        if(w > 320) {
        	$("header nav ul li").removeAttr('style');
        }
    });

 
});


