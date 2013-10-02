var movie = {
	'title' : 'Star Wars',
	'director' : 'George Lucas'
}
 
var anotherMovie = movie;
    anotherMovie.director = 'JJ Abrams';

var director = movie.director;


	var a = {}, b = {}, c = {};
	// a, b, and c each refer to a
	// different empty object
	a = b = c = {};
	// a, b, and c all refer to
	// the same empty object