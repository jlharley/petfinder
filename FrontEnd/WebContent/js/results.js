angular.module('petFinderApp').controller('resultController', function($scope, searchService) {
	$scope.pets = searchService;
	$scope.filteredPets = [];
	$scope.currentPage = 1;
	$scope.numPerPage = 10;
	$scope.maxSize = 5;
	$scope.numPages = $scope.pets.results.length / $scope.numPerPage;
	$scope.availableLimits = [1, 5, 10];
	$scope.limit = 1;
	$scope.setLimit = function (amount) {
		$scope.limit = amount;
	};
	$scope.isActiveLimit = function (amount) {
		return amount === $scope.limit;
	};
	
	$scope.$watchCollection('[pets.results, currentPage]', function() {
		var begin = (($scope.currentPage - 1) * $scope.numPerPage);
		var end = begin + $scope.numPerPage;
		
		$scope.filteredPets = $scope.pets.results.slice(begin, end);

		/* Return to the search page if there are no results to display */
		/*if($scope.pets.results.length == 0){
	    	$location.path('/search');
		} */
	});
	
	$scope.$watchCollection('[pets.results.length]', function() {
    	console.log("Change in length:\n\tlength = " + $scope.pets.results.length + "\n\tnumResults = " + $scope.pets.numResults);
		if ($scope.pets.results.length == 0 && $scope.pets.numResults > 0){
			$scope.pets.search();	
		}
	});
	
	$scope.dislikePet = function(pet){
		var index = $scope.pets.results.indexOf(pet);
		$scope.pets.results.splice(index, 1);
		$scope.pets.numResults --;
	}
	
	$scope.likePet = function(pet){
		var index = $scope.pets.results.indexOf(pet);
		$scope.pets.results.splice(index, 1);
		$scope.pets.numResults --;
	}
});
