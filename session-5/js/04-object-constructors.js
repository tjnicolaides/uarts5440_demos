function Monster(name, saying) {
	this.name = name || "Godzilla";
	this.saying = saying || "ROARRR";
	this.speak = function() {
		return this.name + ' says: ' + this.saying;
	}
	this.attack = function() {
		return this.name + ' uses laser eye beams to set things on fire. Run!';
	}
}

var godzilla = new Monster();

// Another monster = Mothra
// Mothra has a different saying
// Mothra has a different attack
  
function Opponent(name, saying) {
	this.name = name || "Generic Godzilla Opponent";
	this.saying = saying || "**crickets**";
	this.opponent = "Godzilla";
}

Opponent.prototype = new Monster(); // in this case, Monster opponents are also Monsters

//var mecha_godzilla = new Opponent("Mecha Godzilla", "CLANK CLANK");
