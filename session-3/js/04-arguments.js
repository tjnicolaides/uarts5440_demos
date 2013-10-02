function trainFare(zone, roundTrip, offPeakHours) {
	// get base fare from value of zone - 1 through 6
	
	if(typeof zone === 'number') {
		if(zone > 0 && zone <= 6) {
			var baseFare = zone;
		} else {
			throw 'You must choose a zone between 1 and 6.';
		}
	} else {
		throw 'You must select a number for zone.';
	}
    
    
        
	// calculate discount if roundTrip is true (double baseFare, subtract $0.50);
	
    if(roundTrip) {
        baseFare = (baseFare * 2) - 0.5;
    }
    // calculate another discount is offPeakHours is true (another $0.50 off.)

    if(offPeakHours) {
        baseFare = baseFare - 0.5;
    }
    
    // return fare
    return baseFare;
    
}
try {
	var fare = trainFare(-3, true, false);
	console.log(fare);

} catch (error) {
	console.log('Something is amiss! -- ' , error);
}


/*fare = trainFare(2, false, true);

console.log(fare);

fare = trainFare(3);

console.log(fare);

fare = trainFare();

console.log(fare);*/