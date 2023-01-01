/ Кнопка «Наверх»
var lastScrollPosition = 0; 

$('#scroll-up').click( function(){
	if ( $(document).scrollTop() > 0 ) {
		$('body').animate({scrollTop:0},1000);
		lastScrollPosition = $(document).scrollTop();
	} 	
});