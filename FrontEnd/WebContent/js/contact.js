angular.module('petFinderApp').controller('contactController', function($scope, $http, $location) {
	$scope.success = false;
	$scope.error = false;
	
	$scope.send = function () {
		var link = "mailto:nexientu@nexient.com"
		+ "?cc=" + $scope.user.email
		+ "&subject=" + escape("New User Contact From: ") + $scope.user.name
		+ "&body=" + $scope.user.body;
		
		try {
			$location.absUrl(link);
			$scope.success = true;
		} catch (e) {
			console.log(e);
			$scope.error = true;
		}
	}
});