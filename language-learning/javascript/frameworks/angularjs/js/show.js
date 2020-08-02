var myApp = angular.module('myApp', [])

myApp.controller('PublicCtrl', ['$scope', function($scope) {

  $scope.showPlansSmoothly = function() {
    $scope.showPlans = true;

    $('.div2').removeClass().addClass('animated fadeInDown');

    $('body').animate({
      scrollTop: (682)
    }, 1500);
  }

  $scope.selectPlan = function() {
    $scope.showSimulation = true;

    $('.div4').removeClass().addClass('animated fadeInRight');

  }

}]);

myApp.controller('SimulationCtrl', ['$scope', function($scope) {

  $scope.selectPlan = function() {
    $scope.showSimulation = true;
    $('.div3').addClass('animated fadeOutLeft');
    $('.div4').addClass('animated fadeInRight');

  }

}]);