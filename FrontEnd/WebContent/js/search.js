angular.module('petFinderApp').controller('PetFinderController', function($scope, searchService, user) {
    $scope.args = {};
    $scope.results = [];
    var response;
    
    $scope.search = function(){
        $scope.args.location = "48108";
    	$scope.args = searchService.formatSearchData($scope.args);  //This will be removed
    	response = searchService.getPet($scope.args);
    	response.success( function(data) {
    		$scope.results = data;
    	});
    };
    
    $scope.getLikedPets = function(){
		var args = {"emailAddress":user.emailAddress,"firstName":user.firstName,"lastName":user.lastName};
    	response = searchService.getLikedPets(args);
    	response.success( function(data) {
    		$scope.results = data;
    	});
    };
    
    
    $scope.getRandomPet = function(){
    	response = searchService.getPet({animal:null, breed:null, size:null, sex:null, location:"48108", age:null, offset:null, count:10, output:"full"});
    	response.success( function(data) {
    		$scope.results = data;
    	});
    };
    
    $scope.availableLimits = [1, 5, 10];
	$scope.limit = 1;
	
	$scope.setLimit = function (amount) {
		$scope.limit = amount;
	};
	$scope.isActiveLimit = function (amount) {
		return amount === $scope.limit;
	};
	
	$scope.update = function(){
		$scope.args = searchService.formatSearchData();  //This will be removed
    	response = searchService.getPet($scope.args);
	};
	
	$scope.dislikePet = function(pet){
		var index = $scope.results.indexOf(pet);
		$scope.results.splice(index, 1);
		//searchService.numResults --;
	};
	
	$scope.likePet = function(pet){
		var index = $scope.results.indexOf(pet);
		$scope.results.splice(index, 1);
		//searchService.numResults --;
		var args = {"emailAddress":user.emailAddress,"petId":pet.id};
    	console.log("ADDING LIKED PET: " + JSON.stringify(args));
    	response = searchService.getLikedPets(args);
    	response.success( function(data) {
    		$scope.results = data;
    	});
	};
    
});