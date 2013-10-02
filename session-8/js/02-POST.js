var albumList = {};
$(document).ready(function() {
	
	albumList.fetch = function(){
		$.ajax({
			url: 'ajax.php',
			type: 'GET',
			success: function(data, textStatus, xhr) {
				var json = JSON.parse(data);
				var list = "<ul class='nav nav-tabs nav-stacked'>";
			
				$.each(json, function(){
					list += '<li><a href="#">';
					list += this.name;
					list += '</a></li>';
				});
				
				list += '</ul>';
				$('.album-list').html(list);		
			}
		});
	}
	
	albumList.add = function(){
		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: {"name": $('#inputName').val()},
			success: function(data, textStatus, xhr) {
				$('#inputName').val('');
				albumList.fetch();
			},
			error: function(msg) {
				console.log(msg);
			},
		});
	}
	
	albumList.fetch();
	
	$('#postButton').on('click', function(){
		albumList.add();
	});
});