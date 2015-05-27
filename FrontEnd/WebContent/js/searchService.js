angular.module('petFinderApp').service("searchService", function SearchService($http, $location) {
	var searchService = this;
	searchService.args;
	searchService.results = [];	

    var API_URL = "http://localhost:8080/backend/getPet";
	var START = 0;
    var NUM_RESULTS = 10;
    var name = "";
    var minAge = 0;
    var maxAge = 10;
    var color = [];
    var species = [];
    var breed = [];
        
    searchService.petName = '';
    searchService.petAgeMin = '';
    searchService.petAgeMax = '';
    searchService.petColor = '';
    searchService.petSpecies = '';
    searchService.petBreed = '';
    
    searchService.search = function() {
    	searchService.formatSearchData();
    	searchService.getPet();
    	console.log("Setting numResults");
    	searchService.numResults = 30;
    };
	
	searchService.formatSearchData = function(){
		searchService.args = {};
    	searchService.args.animal = "dog";
    	searchService.args.breed = "";
    	searchService.args.size = "M";
    	searchService.args.sex = "M";
    	searchService.args.location = "48108";
    	searchService.args.age = "Baby";
    	searchService.args.offset = START;
    	searchService.args.count = NUM_RESULTS;
    	searchService.args.output = "full";
    	console.log("ARGS: " + searchService.args);
    };
    
    searchService.getPet = function() {
    	searchService.results = [];
    	
    	$http.post(API_URL, searchService.args).success( function(data) {
    		searchService.results = $.merge(data, searchService.results);
        	$location.path('/search/results');
    	});
    };
});
