$(document).ready(function() {
	$.ajax({
		//url: 'http://rss.cnn.com/rss/cnn_world.rss',
		url: 'http://www.npr.org/rss/rss.php?id=100',
		type: 'GET',
		success: function(data, textStatus, xhr) {
			
			var list = "<ul class='nav nav-tabs nav-stacked'>";
			
			$('item', data).each(function(item){
				list += '<li>';
				list += '<a href="' + $(this).find('link').text() + '">';
				list += $(this).find('title').text();
				list += '</a>';
				list += '</li>';
			});
			
			list += '</ul>';
			$('.npr-news-container').append(list);
		},
		error: function(msg) {
			console.log(msg);
		}
	});
});


