angular.module('petFinderApp').controller('mainController', function($scope, $http, user) {
	$scope.user = user;
});