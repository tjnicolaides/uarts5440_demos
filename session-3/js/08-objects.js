 var empty_object = {};
 
 var stooge = {
 	"first-name": "Jerome",
 	"last-name": "Howard",
     active: false
};

//console.log(stooge['last-name']);

/*
stooge.active
stooge['active']

*/

//stooge.active = true;
//stooge['first-name'] = 'Moe';
 
 var flight = {
 	airline: "Oceanic",
 	number: 815,
 	departure: {
 		IATA: "SYD",
 		time: "2004-09-22 14:55",
 		city: "Sydney"
 	},
 	arrival: {
 		IATA: "LAX",
 		time: "2004-09-23 10:42",
 		city: "Los Angeles"
 	}
 };
 
 //console.log(flight.airline);
 //console.log(flight.arrival.city);
 //console.log(flight['departure']['IATA']);
 
 flight.arrival.city = 'San Diego';
 
 //console.log(flight.arrival);
 
 flight.layover = {
    IATA: 'PHL',
    city: 'Philly'
 };
 
 /*flight.layover.IATA = 'PHL';
 flight.layover.city = "Philadelphia";*/
 
 //console.log(flight);

for(prop in flight) {
    //console.log(prop);
    console.log(flight[prop]);
    
    for(subprop in flight[prop]) {
        //console.log(subprop);
        console.log(flight[prop][subprop]);
    }
}

 
 