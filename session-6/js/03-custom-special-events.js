$(document).ready(function() {
   
   
   $('#custom_event').on('the_main_event', function(){
	   $(this).removeClass('btn-warning').addClass('btn-primary');
	   $(this).text('"the_main_event" triggered!');
   });

   $('#custom_event').on('click', function(){
	   $(this).text('click event triggered!');
   });
      
   //$('#custom_event').trigger('the_main_event');
});