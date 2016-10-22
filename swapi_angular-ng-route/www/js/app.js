// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var swapi = angular.module('swapi', ['ionic', 'ngRoute', 'ngSanitize'])

.run(function($ionicPlatform, $rootScope, $location) {

// Buttons
  $rootScope.goHome = function(){
    $location.path('/home');
  };

    $rootScope.goList = function(){
    $location.path('/list');
  };





  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


// Config
swapi.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
    })
    .when('/list', {
      controller: 'listController',
      templateUrl: 'partials/list.html',
    })
    .when('/details/:itemId', {
      controller: 'detailsontroller',
      templateUrl: 'partials/details.html',
    })
    .otherwise({redirectTo: '/home'});
}]); 

// Controller
swapi.controller('listController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/people/?format=json").success(function(data) {
      $scope.peoples = data.results;
      console.log($scope.peoples);
    })
}]);

swapi.controller('detailsontroller', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get("http://swapi.co/api/people/?format=json").success(function(data) {
      $scope.name = data.results[$routeParams.itemId].name;
      $scope.height = data.results[$routeParams.itemId].height;
      $scope.mass = data.results[$routeParams.itemId].mass;
      $scope.hair_color = data.results[$routeParams.itemId].hair_color;
      $scope.skin_color = data.results[$routeParams.itemId].skin_color;
      $scope.eye_color = data.results[$routeParams.itemId].eye_color;
      $scope.birth_year = data.results[$routeParams.itemId].birth_year;
      $scope.gender = data.results[$routeParams.itemId].gender;
      $scope.homeworld = data.results[$routeParams.itemId].homeworld;
      $scope.films = data.results[$routeParams.itemId].films;
      $scope.species = data.results[$routeParams.itemId].species;
      $scope.vehicles = data.results[$routeParams.itemId].vehicles;
      $scope.starships = data.results[$routeParams.itemId].starships;
      console.log($scope.name);
    })
}]);



