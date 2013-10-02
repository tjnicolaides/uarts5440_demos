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

var mothra = new Monster(false, "SCREEE");

    //mothra.name = "MechaMothra";
	/*mothra.attack = function() {
		return this.name + ' flies sprays sticky silk webbing. Gross.';
	}*/





function Opponent(name, saying) {
	this.name = name || "Generic Godzilla Opponent";
	this.saying = saying || "**crickets**";
	this.opponent = "Godzilla";
}

Opponent.prototype = new Monster();

var mecha_godzilla = new Opponent("Mecha Godzilla", "CLANK CLANK");
