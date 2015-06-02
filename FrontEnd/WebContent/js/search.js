angular.module('petFinderApp').controller('PetFinderController', function($scope, searchService) {
    $scope.pets = searchService;
    $scope.args = {};
    
    //TEMP
    $scope.args.animal = null;
    $scope.args.breed = null;
    $scope.args.size = null;
    $scope.args.sex = null;
    $scope.args.location = "48108";
    $scope.args.age = null;
    
    
    $scope.search = function(){
    	$scope.args = $scope.pets.formatSearchData($scope.args);  //This will be removed
    	$scope.pets.getPet($scope.args);
    };
    
    $scope.getRandomPet = function(){
    	$scope.pets.getPet({animal:null, breed:null, size:null, sex:null, location:"48108", age:null, offset:null, count:10, output:"full"});
    };
    
    $scope.availableLimits = [1, 5, 10];
	$scope.limit = 1;
	
	$scope.setLimit = function (amount) {
		$scope.limit = amount;
	};
	$scope.isActiveLimit = function (amount) {
		return amount === $scope.limit;
	};
	
	/*$scope.$watchCollection('[pets.results.length]', function() {
    	console.log("Change in length:\n\tlength = " + $scope.pets.results.length + "\n\tnumResults = " + $scope.pets.numResults);
		if ($scope.pets.results.length == 0 && $scope.pets.numResults > 0){
			$scope.update();
		}
	});*/
	
	$scope.update = function(){
		$scope.args = $scope.pets.formatSearchData();  //This will be removed
    	$scope.pets.getPet($scope.args);
	};
	
	$scope.dislikePet = function(pet){
		var index = $scope.pets.results.indexOf(pet);
		$scope.pets.results.splice(index, 1);
		$scope.pets.numResults --;
	};
	
	$scope.likePet = function(pet){
		var index = $scope.pets.results.indexOf(pet);
		$scope.pets.results.splice(index, 1);
		$scope.pets.numResults --;
	};
	
    $scope.getRandomPet();
    
});