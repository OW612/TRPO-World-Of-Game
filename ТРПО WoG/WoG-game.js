/ Кнопка «Наверх»
var lastScrollPosition = 0; 

$('#scroll-game').click( function(){
	if ( $(document).scrollTop() >  1000) {
		$('body').animate({scrollTop:1000},1000);
		lastScrollPosition = $(document).scrollTop();
	} 
	
	if ( $(document).scrollBottom() <  1000) {
		$('body').animate({scrollBottom:1000},1000);
		lastScrollPosition = $(document).scrollBottom();
	} 	
});