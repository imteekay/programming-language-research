var myApp = angular.module('myApp', [])

myApp.controller('MyController', function MyController($scope) {
	$scope.author = {
		'name': 'Leandro Tk',
		'title': 'Software Engineer',
		'company': 'Codus'
	}
});

