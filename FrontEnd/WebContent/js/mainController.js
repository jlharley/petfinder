angular.module('petFinderApp').controller('mainController', function($scope, user, searchService) {
	$scope.user = user;
	$scope.signedIn = false;
	
	$scope.$on('event:google-plus-signin-success', function (event,authResult) {
			console.log('Signed in!');
			console.log(authResult);
			console.log(JSON.stringify(getUserInfo()));
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
	$scope.userCallback = function(userInfo) {
	    $scope.$apply(function() {
	        $scope.user.emailAddress = userInfo.emails[0].value;
	        $scope.user.firstName = userInfo.name.givenName;
	        $scope.user.lastName = userInfo.name.familyName;
	        $scope.user.displayName = userInfo.displayName;
	        $scope.user.image = userInfo.image.url;
			var args = {"emailAddress":$scope.user.emailAddress,"firstName":$scope.user.firstName,"lastName":$scope.user.lastName};
			searchService.sendUser(args);
	    });
	};
	  function getUserInfo() {
		    gapi.client.request(
		        {
		            'path':'/plus/v1/people/me',
		            'method':'GET',
		            'callback': $scope.userCallback
		        }
		    );
		};
});