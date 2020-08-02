var Car = function(loc) {	
	obj = { loc: loc };

	obj.move = move;

	return obj;
};

var move = function() {
	this.loc++;
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();