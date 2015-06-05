angular.module('petFinderApp').service("searchService", function SearchService($http, $location) {
	var searchService = this;
	searchService.numResults = 30;	//FOR TESTING

	var START = 0;
    var NUM_RESULTS = 10;
	
	searchService.formatSearchData = function(args){
		var formatted = {};
		formatted.animal = args.animal || null;
		formatted.breed = args.breed || null;
		formatted.size = args.size || null;
		formatted.sex = args.sex || null;
		formatted.location = args.location;
		formatted.age = args.age || null;
		formatted.offset = START;
		formatted.count = NUM_RESULTS;
		formatted.output = "full";
    	return formatted;
    };
    
    searchService.getPet = function(args) {
    	START = START + NUM_RESULTS;
    	return $http.post("http://localhost:8080/backend/getPet", args);
    };
    
    searchService.getLikedPets = function(args) {
    	return $http.post("http://localhost:8080/backend/getLikedPets", args);
    };
    
    searchService.sendUser = function(args) {
    	return $http.post("http://localhost:8080/backend/addUserDB", args);
    };
});
