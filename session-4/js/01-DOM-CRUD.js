document.onreadystatechange = function() {
    
    console.log('I\'m ready for my closeup, Mr. Deville');
    
    if (document.readyState === 'complete') {
		
		// SELECT / MANIPULATE
		selectDOM();
		
		// CREATE
		generateDOM();
		
		// DELETE
		deleteDOM();
		}
};

function selectDOM() {

	var buttons = document.getElementsByClassName('btn');

	for(var i =0; i< buttons.length; i++) {
	    if(buttons[i].className == "btn") {
	        buttons[i].className += ' btn-warning';
	        buttons[i].innerHTML = "Learn more. &raquo;";
	    }
	}
}

function generateDOM() {
		
	var div = document.createElement('div');
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
	console.log(sidebar);
	
	for(var j = 0; j < sidebar.length; j++) {
        sidebar[j].appendChild(div);   
	}

}

function deleteDOM() {
	var heroUnit = document.getElementsByClassName('hero-unit');
	for (var i = 0; i < heroUnit.length; i++) {			
		var node = heroUnit[i].parentNode;
		node.removeChild(heroUnit[i]);
	}
}