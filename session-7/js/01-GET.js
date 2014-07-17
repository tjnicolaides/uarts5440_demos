$(document).ready(function() {
    
	$.ajax({
		'url': 'http://www.npr.org/rss/rss.php?id=100',
		type: 'GET',
		success: function(data, textStatus, xhr) {
		    
		    var list = "<ul class='nav nav-tabs nav-stacked'>";
		    
			var items = $(data).find('item');
			
			items.each(function(){
				
				list += '<li>';
				list += '<a href="' + $(this).find('link').text() +  '">';
				list += $(this).find('title').text();
				list += '</a>';
				list += '</li>';
				
			});
			
			list += '</ul>';
			
			$('.npr-news-container').append(list);
			//
			
			
		}
	});
	
});


