angular.module('petFinderApp').service("searchService", function SearchService($http, $location) {
	var searchService = this;
	searchService.args;
	searchService.results = [];
	searchService.numResults = 30;

	var START = 0;
    var NUM_RESULTS = 10;
        
    /*searchService.petName = '';
    searchService.petAgeMin = '';
    searchService.petAgeMax = '';
    searchService.petColor = '';
    searchService.petSpecies = '';
    searchService.petBreed = '';*/
	
	searchService.formatSearchData = function(){
		var formatted = {};
		formatted.animal = "dog";
		formatted.breed = "";
		formatted.size = "M";
		formatted.sex = "M";
		formatted.location = "48108";
		formatted.age = "Baby";
		formatted.offset = START;
		formatted.count = NUM_RESULTS;
		formatted.output = "full";
    	return formatted;
    };
    
    searchService.getPet = function(args) {
    	$http.post("http://localhost:8080/backend/getPet", args).success( function(data) {
    		console.log("getPet")
    		searchService.results = data;
        	//$location.path('/search/results');
    	});
    };
});
