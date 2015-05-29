beforeEach(module('petFinderApp'));
describe('Search Service', function(){
	var searchService, httpBackend, location;
	beforeEach(inject(function(_searchService_, $httpBackend, $location){
		searchService = _searchService_;
		httpBackend = $httpBackend;
		location = $location;
	}));
	xdescribe('search() function', function(){
	});
});