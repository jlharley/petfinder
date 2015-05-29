angular.module('petFinderApp').controller('PetFinderController', function($scope, $http, searchService, $location, user) {
    $scope.pets = searchService;
});