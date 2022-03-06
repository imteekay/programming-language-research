var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

var names = animals.map(function (animal) {
  return animal.name + ' is a ' + animal.species;
});

// With for loop
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  dogs.push(animals[i].name);
}
