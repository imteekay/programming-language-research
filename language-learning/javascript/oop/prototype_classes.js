var Car = function(loc) {
	this.loc = loc;
};

Car.prototype.move = function() {
	this.loc++;
};

var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();