angular.module('petFinderApp').controller('PetFinderController', function($scope, searchService) {
    $scope.pets = searchService;
    $scope.args;
    
    $scope.search = function(){
    	$scope.args = $scope.pets.formatSearchData();  //This will be removed
    	$scope.pets.getPet($scope.args);
    };
});