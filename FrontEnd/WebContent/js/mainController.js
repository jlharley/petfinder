angular.module('petFinderApp').controller('mainController', function($scope, $http) {
	$scope.username = localStorage.username;
});