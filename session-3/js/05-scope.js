var myVar = 'top-level';

var globalVar;

globalVar = setGlobalVar('top-level');


function setGlobalVar(val) {
    return val;   
}

var anotherGlobalVar;

function setGlobalVarAgain() {
    anotherGlobalVar = 'foo';
}
setGlobalVarAgain();


function printVariable() {
    console.log('inside test, the variable holds "' + myVar + '" . ');
}


function test() {
	var myVar = "local";
	console.log('inside test, the variable holds "' + myVar + '" . ');
	printVariable();
}
