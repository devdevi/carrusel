$(document).ready(function(){
	var imgItems = $('.slide li').length; // Numero de Slides
	var imgPos = 1;

	$('.slide li').hide(); // Ocultanos todos los slides
	$('.slide li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(function(){

		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	});
	$('.right span').click(function(){

		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	});
	$('.left span').click(function(){

		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slide li').hide(); // Ocultamos todos los slides
		$('.slide li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	});

});