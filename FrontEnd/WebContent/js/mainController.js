angular.module('petFinderApp').controller('mainController', function($scope, user) {
	$scope.user = user;
	$scope.userInfo;
	$scope.signedIn = true;
	
	$scope.$on('event:google-plus-signin-success', function (event,authResult) {
			console.log('Signed in!');
			console.log(authResult);
			getUserInfo();
			signedIn = true;
	  });
	  $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
		  console.log('Not signed into Google Plus.');
	  });
	  $scope.signOut = function(){
		  console.log("signing out");
		  gapi.auth.signOut();
	        $scope.$apply;
	  }
	 
	// When callback is received, process user info.
	$scope.userInfoCallback = function(userInfo) {
	    $scope.$apply(function() {
	        console.log("user:" + JSON.stringify(userInfo));
	        $scope.userInfo = userInfo;
	        $scope.$apply;
	    });
	};
	  function getUserInfo() {
		    gapi.client.request(
		        {
		            'path':'/plus/v1/people/me',
		            'method':'GET',
		            'callback': $scope.userInfoCallback
		        }
		    );
		};
});