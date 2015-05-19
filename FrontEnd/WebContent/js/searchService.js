angular.module('petFinderApp').service("searchService", function SearchService() {
	var searchService = this;
	searchService.args;
	searchService.results = [];
	
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
    	console.log("ARGS = " + JSON.stringify(searchService.args));
    };
});
