angular.module('petFinderApp').controller('PetFinderController', function($scope, searchService) {
    $scope.pets = searchService;
    var args;
    
    $scope.search = function(){
    	args = $scope.pets.formatSearchData();  //This will be removed
    	$scope.pets.getPet(args);
    };
});