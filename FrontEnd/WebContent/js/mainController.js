angular.module('petFinderApp').controller('mainController', function($scope, $http, user) {
	$scope.username = localStorage.username;
	console.log("fname: " + user.getFirstName());
});