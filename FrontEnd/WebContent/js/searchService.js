angular.module('petFinderApp').service("searchService", function SearchService($http, $location) {
	var searchService = this;
	searchService.results = [];
	searchService.numResults = 30;	//FOR TESTING

	var START = 0;
    var NUM_RESULTS = 10;
	
	searchService.formatSearchData = function(args){
		var formatted = {};
		formatted.animal = args.animal;
		formatted.breed = args.breed;
		formatted.size = args.size;
		formatted.sex = args.sex;
		formatted.location = args.location;
		formatted.age = args.age;
		formatted.offset = START;
		formatted.count = NUM_RESULTS;
		formatted.output = "full";
    	return formatted;
    };
    
    searchService.getPet = function(args) {
    	$http.post("http://localhost:8080/backend/getPet", args).success( function(data) {
    		console.log("getPet");
    		searchService.results = data;
        	//$location.path('/search/results');
    	});
    };
});
