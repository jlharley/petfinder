angular.module('petFinderApp').controller('mainController', function($scope, $http, User) {
	User.setFirstName("Tyrion");
	User.setLastName("Lannister");
	$scope.username = User.getFullName();
});