// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var swapi = angular.module('swapi', ['ionic', 'ui.router'])

.run(function($ionicPlatform, $rootScope, $location) {


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
swapi.config(function($stateProvider, $urlRouterProvider) {
  // Home Page
  $stateProvider.state('/home', {
    url: '/home',
    views: {
      'home' : {
        templateUrl: 'partials/home.html'
      }
    }
  })

  // List of People
  $stateProvider.state('/list', {
    url: '/list',
    views: {
      'list' : {
        templateUrl: 'partials/list.html',
        controller: 'listController'
      }
    }
  });

  // People Details Page
  $stateProvider.state('list', { // start the list page
    url: '/details/:peopleId', // to details page
    views: {
      'list' : { // from the list to details
        templateUrl: 'partials/details.html',
        controller: 'detailController'
      }
    }
  });

  // List of Films
  $stateProvider.state('/films', {
    url: '/films',
    views: {
      'films' : {
        templateUrl: 'partials/films.html',
        controller: 'filmsController'
      }
    }
  });

  // Films Details Page
  $stateProvider.state('films', { // start the list page
    url: '/film/:filmId', // to details page
    views: {
      'films' : { // from the list to details
        templateUrl: 'partials/film.html',
        controller: 'filmController'
      }
    }
  });

  // Starships List Page
  $stateProvider.state('/starships', {
    url: '/starships',
    views: {
      'starships' : {
        templateUrl: 'partials/starships.html',
        controller: 'starshipsController'
      }
    }
  });

  // Starships Details Page
  $stateProvider.state('starships', { // start the list page
    url: '/starship/:starshipId', // to details page
    views: {
      'starships' : { // from the list to details
        templateUrl: 'partials/starship.html',
        controller: 'starshipController'
      }
    }
  });

  // List Page
  $stateProvider.state('/vehicles', {
    url: '/vehicles',
    views: {
      'vehicles' : {
        templateUrl: 'partials/vehicles.html',
        controller: 'vehiclesController'
      }
    }
  });

  // Vehicles Details Page
  $stateProvider.state('vehicles', { // start the list page
    url: '/vehicle/:vehicleId', // to details page
    views: {
      'vehicles' : { // from the list to details
        templateUrl: 'partials/vehicle.html',
        controller: 'vehicleController'
      }
    }
  });

  // List Page
  $stateProvider.state('/species', {
    url: '/species',
    views: {
      'species' : {
        templateUrl: 'partials/species.html',
        controller: 'speciesController'
      }
    }
  });

  // Species Details Page
  $stateProvider.state('species', { // start the list page
    url: '/specie/:specieId', // to details page
    views: {
      'species' : { // from the list to details
        templateUrl: 'partials/specie.html',
        controller: 'specieController'
      }
    }
  });


  // List Page
  $stateProvider.state('/planets', {
    url: '/planets',
    views: {
      'planets' : {
        templateUrl: 'partials/planets.html',
        controller: 'planetsController'
      }
    }
  });

  // Planets Details Page
  $stateProvider.state('planets', { // start the list page
    url: '/planet/:planetId', // to details page
    views: {
      'planets' : { // from the list to details
        templateUrl: 'partials/planet.html',
        controller: 'planetController'
      }
    }
  });

  // Default Page or Redirects
  $urlRouterProvider.otherwise('/home');
});
// END config



// Controller

// Peoples Controllers
swapi.controller('listController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/people/?format=json").success(function(data) {
      $scope.peoples = data.results;
      // console.log($scope.peoples);
    });
}]);

// People Detaisl Controller
swapi.controller('detailController', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
  $http.get("http://swapi.co/api/people/?format=json").success(function(data) {
    $scope.name = data.results[$stateParams.peopleId].name;
    $scope.birth_year = data.results[$stateParams.peopleId].birth_year;
    $scope.eye_color = data.results[$stateParams.peopleId].eye_color;
    $scope.gender = data.results[$stateParams.peopleId].gender;
    $scope.hair_color = data.results[$stateParams.peopleId].hair_color;
    $scope.height = data.results[$stateParams.peopleId].height;
    $scope.mass = data.results[$stateParams.peopleId].mass;
    $scope.skin_color = data.results[$stateParams.peopleId].skin_color;
    $scope.homeworld = data.results[$stateParams.peopleId].homeworld;
    $scope.films = data.results[$stateParams.peopleId].films;
    $scope.species = data.results[$stateParams.peopleId].species;
    $scope.starships = data.results[$stateParams.peopleId].starships;
    $scope.vehicles = data.results[$stateParams.peopleId].vehicles;
  });
}]);

// Films Controller
swapi.controller('filmsController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/films/?format=json").success(function(data) {
      $scope.films = data.results;
      console.log($scope.films);
    });
}]);

// Film Details Controller
swapi.controller('filmController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $http.get("http://swapi.co/api/films/?format=json").success(function(data) {
      $scope.films = data.results;
      $scope.title = data.results[$stateParams.filmId].title;
      $scope.opening_crawl = data.results[$stateParams.filmId].opening_crawl;
      $scope.director = data.results[$stateParams.filmId].director;
      $scope.producer = data.results[$stateParams.filmId].producer;
      $scope.release_date = data.results[$stateParams.filmId].release_date;
      console.log($scope.films);
    });
}]);


// Starships Controllers
swapi.controller('starshipsController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/starships/?format=json").success(function(data) {
      $scope.starships = data.results;
    });
}]);

// Starship Details Controller
swapi.controller('starshipController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
    $http.get("http://swapi.co/api/starships/?format=json").success(function(data) {
      $scope.starships = data.results;
      $scope.name = data.results[$stateParams.starshipId].name;
      $scope.model = data.results[$stateParams.starshipId].model;
      $scope.starship_class = data.results[$stateParams.starshipId].starship_class;
      $scope.manufacturer = data.results[$stateParams.starshipId].manufacturer;
      $scope.cost_in_credits = data.results[$stateParams.starshipId].cost_in_credits;
      $scope.length = data.results[$stateParams.starshipId].length;
      $scope.crew = data.results[$stateParams.starshipId].crew;
      $scope.passengers = data.results[$stateParams.starshipId].passengers;
      $scope.max_atmosphering_speed = data.results[$stateParams.starshipId].max_atmosphering_speed;
      $scope.hyperdrive_rating = data.results[$stateParams.starshipId].hyperdrive_rating;
      $scope.MGLT = data.results[$stateParams.starshipId].MGLT;
      $scope.cargo_capacity = data.results[$stateParams.starshipId].cargo_capacity;
      $scope.consumables = data.results[$stateParams.starshipId].consumables;
      $scope.films = data.results[$stateParams.starshipId].films;
      $scope.pilots = data.results[$stateParams.starshipId].pilots;
    });
}]);


// Vehicles Controller
swapi.controller('vehiclesController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/vehicles/?format=json").success(function(data) {
      $scope.vehicles = data.results;
    });
}]);


// Vehicle Detaisl Controller
swapi.controller('vehicleController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
    $http.get("http://swapi.co/api/vehicles/?format=json").success(function(data) {
      $scope.vehicles = data.results;
      $scope.name = data.results[$stateParams.vehicleId].name;
      $scope.model = data.results[$stateParams.vehicleId].model;
      $scope.vehicle_class = data.results[$stateParams.vehicleId].vehicle_class;
      $scope.manufacturer = data.results[$stateParams.vehicleId].manufacturer;
      $scope.length = data.results[$stateParams.vehicleId].length;
      $scope.cost_in_credits = data.results[$stateParams.vehicleId].cost_in_credits;
      $scope.crew = data.results[$stateParams.vehicleId].passengers;
      $scope.max_atmosphering_speed = data.results[$stateParams.vehicleId].max_atmosphering_speed;
      $scope.cargo_capacity = data.results[$stateParams.vehicleId].cargo_capacity;
      $scope.consumables = data.results[$stateParams.vehicleId].consumables;
    });
}]);



// Species Controller
swapi.controller('speciesController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/species/?format=json").success(function(data) {
      $scope.species = data.results;
      // console.log($scope.species);
    });
}]);

// Species Details Controller
swapi.controller('specieController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
    $http.get("http://swapi.co/api/species/?format=json").success(function(data) {
      $scope.species = data.results;
      // console.log($scope.species);
      $scope.name = data.results[$stateParams.specieId].name;
      $scope.classification = data.results[$stateParams.specieId].classification;
      $scope.designation = data.results[$stateParams.specieId].designation;
      $scope.average_height = data.results[$stateParams.specieId].average_height;
      $scope.average_lifespan = data.results[$stateParams.specieId].average_lifespan;
      $scope.eye_colors = data.results[$stateParams.specieId].eye_colors;
      $scope.hair_colors = data.results[$stateParams.specieId].hair_colors;
      $scope.skin_colors = data.results[$stateParams.specieId].skin_colors;
      $scope.Language = data.results[$stateParams.specieId].Language;
      $scope.homeworld = data.results[$stateParams.specieId].homeworld;
    });
}]);


// Planets Controller
swapi.controller('planetsController', ['$scope', '$http', function($scope, $http) {
    $http.get("http://swapi.co/api/planets/?format=json").success(function(data) {
      $scope.planets = data.results;
    });
}]);

// Planet Details Controller
swapi.controller('planetController', ['$scope', '$http','$stateParams', function($scope, $http, $stateParams) {
    $http.get("http://swapi.co/api/planets/?format=json").success(function(data) {
      $scope.planets = data.results;
      $scope.name = data.results[$stateParams.planetId].name;
      $scope.diameter = data.results[$stateParams.planetId].diameter;
      $scope.rotation_period = data.results[$stateParams.planetId].rotation_period;
      $scope.orbital_period = data.results[$stateParams.planetId].orbital_period;
      $scope.gravity = data.results[$stateParams.planetId].gravity;
      $scope.population = data.results[$stateParams.planetId].population;
      $scope.climate = data.results[$stateParams.planetId].climate;
      $scope.terrain = data.results[$stateParams.planetId].terrain;
      $scope.surface_water = data.results[$stateParams.planetId].surface_water;
    });
}]);