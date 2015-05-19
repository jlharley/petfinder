angular.module('petFinderApp').controller('PetFinderController', function($scope, $http, searchService, $location) {
    $scope.pets = searchService;
    var API_URL = "http://localhost:8080/spring/pet/dummy";
    
    
    
    //  Choose one of these methods to send the info to the backend
    //    depending on if we want to send an array of objects or nested objects
     
    $scope.search = function() {
    	$scope.pets.formatSearchData();
    	$scope.getPet();
    };
    
    //  WORKING
    $scope.getPet = function() {
    	$scope.pets.results = [];
    	
    	$http.post(API_URL, $scope.pets.args).success( function(data) {
    		$scope.pets.results = $.merge(data, $scope.pets.results);
        	$location.path('/search/results');
    	});
    };
 
    $scope.countPets = function() {
    	var count = 0;
    	angular.forEach($scope.pets.results, function(pet) {
    		count += 1;
    	});
    	return count;
    };
});