petFinderApp.controller('navController', function($scope, $location) {
	var nav = this;
	
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};
});