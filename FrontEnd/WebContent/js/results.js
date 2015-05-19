angular.module('petFinderApp').controller('resultController', function($scope, $http, searchService, $location) {
	$scope.pets = searchService;
	$scope.filteredPets = [];
	$scope.currentPage = 1;
	$scope.numPerPage = 10;
	$scope.maxSize = 5;
	$scope.numPages = $scope.pets.results.length / $scope.numPerPage;
	
	$scope.$watchCollection('[pets.results, currentPage]', function() {
		var begin = (($scope.currentPage - 1) * $scope.numPerPage);
		var end = begin + $scope.numPerPage;
		
		$scope.filteredPets = $scope.pets.results.slice(begin, end);

		/* Return to the search page if there are no results to display */
		/*if($scope.pets.results.length == 0){
	    	$location.path('/search');
		} */
	});
	
	$scope.dislikePet = function(petID){		
		$http.post("http://localhost:8080/spring/pet/dummy", petID).success( function(data) {
    	});
	}
	
	$scope.likePet = function(){
		$http.post("http://localhost:8080/spring/pet/dummy", petID).success( function(data) {
    	});
	}
});
