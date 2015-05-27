angular.module('petFinderApp').controller('mainController', function($scope, $http, User) {
	$scope.username = User.getUsername();
});