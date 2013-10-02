$(document).ready(function() {

	


	$('#clickme').on('click', function(foo){
		foo.preventDefault();
		console.log(foo);
	});

	$('.change-detect').on('change', function(evt){
		console.log(evt);
	});
	
});