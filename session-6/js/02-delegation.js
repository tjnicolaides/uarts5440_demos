$(document).ready(function() {

   $('.well').on('click', '.btn', function(evt){
   //$('.btn').on('click', function(evt){
   
      console.log(evt);
       evt.preventDefault();
   		$('<div class="row-fluid"><a href="#" class="btn btn-large btn-warning">Button</a><hr></div>').appendTo('.well');
   		$(this).removeClass('btn-warning').addClass('btn-info');
   });
   
   
});