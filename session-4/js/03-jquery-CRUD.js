
$(document).ready(function() {
	// SELECT / MANIPULATE
	selectDOM();
	
	// CREATE
	generateDOM();
	
	// DELETE
	deleteDOM();
});

function selectDOM() {

	$('.span4:even .btn').addClass('btn-warning').text('Learn more');

	/*var buttons = document.getElementsByClassName('btn');
	for (var i = 0; i < buttons.length; i++) {			
		if(buttons[i].className == 'btn') {
			console.log(buttons[i]);
			
			//buttons[i].className += ' btn-warning';
			//buttons[i].innerHTML = 'Learn more.';
		}
	}*/
}

function generateDOM() {
	
	var $div = $('<div/>', {'class': 'well sidebar-nav'});
	var $ul = $('<ul/>', {'class' : 'nav nav-list'});
	
	var $li;
	for(var i = 0; i < 5; i++) {
		if(i === 0) {
			$li = $('<li/>', {'class' : 'nav-header'}).text('Another sidebar');
		} else {
			$li = $('<li/>').append($('<a/>', {'href': '#', 'text' : 'More links'}));
		}
		
		$ul.append($li);
	}	
	
	$('.span3').append($div.append($ul));
	
	/*var div = document.createElement('div');
	div.className = 'well sidebar-nav';
	var ul = document.createElement('ul');
	ul.className = 'nav nav-list';
	
	div.appendChild(ul);
	
	for(var i = 0; i < 5; i++) {
		var li = document.createElement('li');
		var txt = document.createTextNode('More links');
		var ahref = document.createElement('a');
			ahref.setAttribute('href', '#');

		if(i === 0) {
			li.className = 'nav-header';
			txt = document.createTextNode('Another Sidebar');
			ul.appendChild(li);
			li.appendChild(txt);
		} else {
			ul.appendChild(li);
			li.appendChild(ahref);
			ahref.appendChild(txt);
		}
		
	}
	
	var sidebar = document.getElementsByClassName('span3');
	
	for(var j = 0; j < sidebar.length; j++) {
		console.log(div);
		sidebar[i].appendChild(div);
	}*/

}

function deleteDOM() {
	$('.hero-unit').remove();
	/*var heroUnit = document.getElementsByClassName('hero-unit');
	for (var i = 0; i < heroUnit.length; i++) {			
		var node = heroUnit[i].parentNode;
		node.removeChild(heroUnit[i]);
	}*/
}