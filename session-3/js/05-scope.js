var variable = 'top-level';


function printVariable() {
    //console.log('inside test, the variable holds "' + variable + '" . ');
}


function test() {
	var variable = "local";
	//console.log('inside test, the variable holds "' + variable + '" . ');
	//printVariable();
}
