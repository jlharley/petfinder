angular.module('petFinderApp').service("searchService", function SearchService($http, $location) {
	var searchService = this;
	searchService.args;
	searchService.results = [];	

    var API_URL = "http://localhost:8080/spring/pet/dummy";
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
    };
	
	searchService.formatSearchData = function(){
    	searchService.args = {};
    	searchService.args.start = START;
    	searchService.args.numResults = NUM_RESULTS;
    	searchService.args.name = name;
    	searchService.args.minAge = minAge;
    	searchService.args.maxAge = maxAge;
    	searchService.args.color = color;
    	searchService.args.species = species;
    	searchService.args.breed = breed;
    };
    
    searchService.getPet = function() {
    	searchService.results = [];
    	
    	$http.post(API_URL, searchService.args).success( function(data) {
    		searchService.results = $.merge(data, searchService.results);
        	$location.path('/search/results');
    	});
    };
});
