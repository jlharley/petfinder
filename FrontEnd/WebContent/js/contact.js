angular.module('petFinderApp').controller('contactController', function($scope, $http, searchService, $location) {
	$scope.success = false;
	$scope.error = false;
	
	$scope.send = function () {
		var link = "mailto:nexientu@nexient.com"
		+ "?cc=" + $scope.user.email
		+ "&subject=" + escape("New User Contact From: ") + $scope.user.name
		+ "&body=" + $scope.user.body;
		
		try {
			window.location.href = link;
			$scope.success = true;
		} catch (e) {
			console.log(e);
			$scope.error = true;
		}
	}
});