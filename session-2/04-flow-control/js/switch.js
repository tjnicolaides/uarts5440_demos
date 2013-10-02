var device = prompt('What type of phone do you have?');

switch(device) {
	case 'iPhone':
    case 'iphone':
    case 'IPHONE': 
		console.log('OS by Apple');
		break;
    case 'Android': 
		console.log('OS by Google');
		break;
    case 'Blackberry': 
		console.log('OS by RIM');
		break;
    case 'Palm': 
		console.log('OS by HP');
		break;
    case '0': 
        console.log("You don't have a phone? Too bad.");
        device = 'Android';
        break;
    default:
        console.log("I don't know that phone, sorry.");
        break;
        
}