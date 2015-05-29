angular.module('petFinderApp').controller('PetFinderController', function($scope, $http, searchService, $location, user) {
    $scope.pets = searchService;
 
    $scope.countPets = function() {
    	var count = 0;
    	angular.forEach($scope.pets.results, function(pet) {
    		count += 1;
    	});
    	return count;
    };
});