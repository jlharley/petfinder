angular.module('petFinderApp').controller('mainController', function($scope, $http) {
	$scope.greeting = 'Hello World!';
	$scope.username = localStorage.username;
});