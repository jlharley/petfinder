angular.module('petFinderApp').controller('PetFinderController', function($scope, searchService) {
    $scope.pets = searchService;
});