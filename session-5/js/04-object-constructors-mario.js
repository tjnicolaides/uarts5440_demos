function Hero(name) {
    this.name = name;
    this.speak = function() {
        return 'It\'s-a me, ' + this.name + '!';
    }
    
    this.jump = function() {
        // control the hero div and make it hop 
        return 'I jumped!';
    }
    this.run = function(direction) {
        var direction = direction || 'left';
        return 'I ran ' + direction;
    }
}

var mario = new Hero('Mario');
var luigi = new Hero('Luigi');

luigi.jump = function() {
    return 'I jumped and then flailed my legs around a little bit';
}

function Enemy() {
    this.movement = function() {
        return 'I walked left and right repeatedly';
    }
    
    this.hitSide = function(dirArg)  {
        var direction = dirArg || 'left';
        if(direction == 'left' || direction == 'right') {
            return 'I killed the hero';
        } else if(direction == 'top') { 
            return 'The hero killed me by jumping on me :-(';
        } else {
            return 'How did you do that??';
        }
    }
}

function Goomba() {
    this.type = 'Goomba';
}

function Turtle() {
    this.type = 'Turtle';
}

Goomba.prototype = new Enemy;
Turtle.prototype = new Enemy;

var all_turtles = [];

for(var i = 0; i < 10; i++) {
    all_turtles.push(new Turtle());
}