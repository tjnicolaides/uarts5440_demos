$(document).ready(function() {

	// click / dblclick
	
	$('#clickme').on('click', function(evt){
		console.log('You just clicked #clickme!');
		// do some other stuff here
	});
	
	//$('#clickme').off('click');
	
	// keypress / keyup
	
	$('.keyup-detect').on('keyup', keyupFunction);
	$('.keypress-detect').on('keypress', keypressFunction);
	
	
	// change
	
	$('.change-detect').on('change', function() {
		console.log($(this).val());	
	});
	
	// mouseenter / mouseleave AKA hover
	
	$('#hoverme').on('mouseenter', function(e) {
		console.log('hovering!');
	}).on('mouseleave', function(){
		console.log('not hovering');
	});
	
	// submit
	$('form').on('submit', function(e) {
		e.preventDefault();
		console.log(e);	
		console.log('You just submitted a form!');
	});
	
	// resize
	
	$(window).on('resize', function(e){
		$('.window-size-value').text('Width: ' + $(window).width() + ', height: ' + $(window).height());
	});
	
	$('.window-size-value').text('Width: ' + $(window).width() + ', height: ' + $(window).height());

	// orientation 
	window.addEventListener('onorientationchange', doOnOrientationChange);
	doOnOrientationChange();

	// HTML5
	$('#movie').on("play",function(e){
		console.log('movie is playing');
    }).on('pause', function(e) {
	    console.log('movie has been paused');
    });

});

function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        console.log('landscape');
        $('.window-orientation-value').text('Orientation is landscape mode');
        break; 
      default:
        console.log('portrait');
        $('.window-orientation-value').text('Orientation is portrait mode');
        break; 
    }
  }
  
function keypressFunction() {
	var val = $(this).val();
	console.log(val);
}

function keyupFunction() {
	var val = $(this).val();
	console.log(val);
}