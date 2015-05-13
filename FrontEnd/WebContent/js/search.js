petFinderApp.controller('PetFinderController', function($scope, $http, search) {
    $scope.pets = search;
    var API_URL = "http://localhost:8080/spring/pet/dummy";
 
    $scope.addPet = function() {
    	$scope.pets.results.push({id:$scope.countPets(), name:$scope.petName, age:$scope.petAge, color:$scope.petColor, species:$scope.pets.resultspecies, breed:$scope.petBreed});
    	$scope.petName = '';
    	$scope.petAge = '';
    	$scope.petColor = '';
    	$scope.pets.resultspecies = '';
    	$scope.petBreed = '';
    };
    
    //  WORKING
    $scope.getPet = function() {
    	var args = {name:"doc"};
    	$http.post(API_URL, args).success( function(data) {
    		$scope.pets.results = $.merge(data, $scope.pets.results);
    	});
    };
 
    $scope.countPets = function() {
    	var count = 0;
    	angular.forEach($scope.pets.results, function(pet) {
    		count += 1;
    	});
    	return count;
    };
 
    $scope.clear = function() {
    	$scope.pets.results = [];
    };
});