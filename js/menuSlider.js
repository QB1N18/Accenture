(function(){
	
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

})();