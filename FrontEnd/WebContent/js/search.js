angular.module('petFinderApp').controller('PetFinderController', function($scope, $http, searchService, $location) {
    $scope.pets = searchService;
    var API_URL = "http://localhost:8080/spring/pet/dummy";
    var START = 0;
    var NUM_RESULTS = 10;    
    var name = "";
    var minAge = 0;
    var maxAge = 10;
    var color = [];
    var species = [];
    var breed = [];
        
	$scope.petName = '';
	$scope.petAgeMin = '';
	$scope.petAgeMax = '';
	$scope.petColor = '';
	$scope.petSpecies = '';
	$scope.petBreed = '';
    
    
    //  Choose one of these methods to send the info to the backend
    //    depending on if we want to send an array of objects or nested objects   
    
    var args2 = {};
    args2.meta = {start: START, numResults: NUM_RESULTS};
     
    $scope.search = function() {
    	formatSearchData();
    	$scope.getPet();
    };
    
    //  WORKING
    $scope.getPet = function() {
    	$scope.pets.results = [];
    	
    	$http.post(API_URL, $scope.pets.args).success( function(data) {
    		console.log("PetFinderController > getPet() | sending " + JSON.stringify(args2) + " to BackEnd");
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
    
    $scope.$watchCollection('[pets.results, currentPage]', function() {
    	
    });
    
    formatSearchData = function(){
    	$scope.pets.args = {};
    	$scope.pets.args.start = START;
    	$scope.pets.args.numResults = NUM_RESULTS;
    	$scope.pets.args.name = name;
    	$scope.pets.args.minAge = minAge;
    	$scope.pets.args.maxAge = maxAge;
    	$scope.pets.args.color = color;
    	$scope.pets.args.species = species;
    	$scope.pets.args.breed = breed;
    	console.log("ARGS = " + JSON.stringify($scope.pets.args));
    };
});