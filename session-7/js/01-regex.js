var regex = {
	'email' : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	'html_tag' : /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/ 
}

$(document).ready(function() {

	$('#regex_email').on('keyup', function(){
		
		var value = $(this).val();
		var match = value.search(regex.email);
		console.log(match);
		if(match > -1) {
			$(this).parents('.control-group').removeClass('error').addClass('success');
		} else {
			$(this).parents('.control-group').removeClass('success').addClass('error');
		}		
		
	});
	
	$('#regex_html').on('keyup', function(){
		
		var value = $(this).val();
		var match = value.search(regex.html_tag);
		
		var match_array = value.match(regex.html_tag);
		console.log(match_array);
		
		if(match > -1) {
			$(this).parents('.control-group').removeClass('error').addClass('success');
			$('#regex_html_match').val(match_array[3]);
		} else {
			$(this).parents('.control-group').removeClass('success').addClass('error');
			$('#regex_html_match').val('');
		}		
		
	});
	
   
});

// TestResults.xml
//<([A-Za-z\d]*)>[A-Za-z\d\-\.]*</[A-Za-z\d]*>
//'\1': ' ',\n