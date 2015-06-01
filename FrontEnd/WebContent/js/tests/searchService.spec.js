beforeEach(module('petFinderApp'));
describe('Search Service', function(){
	var searchService, httpBackend, location, $rootScope;
	beforeEach(inject(function(_searchService_, $httpBackend, $location, _$rootScope_){
		searchService = _searchService_;
		httpBackend = $httpBackend;
		location = $location;
		$rootScope = _$rootScope_;
		spyOn($location, 'path').and.returnValue('/Fake location');
	}));
	describe('formatSearchData function', function(){
		it('should create formatted variable', function(){
			var formatted;
			expect().toBeUndefined();
			formatted = searchService.formatSearchData();
			expect(formatted).toEqual(jasmine.any(Object));
		});
	});
	describe('getPet function', function(){
		beforeEach(function(){
			httpBackend.expectPOST('http://localhost:8080/backend/getPet').respond(function(method,url,data){
				return [200, {}, {}];
			});
		});
		it('take in an object', function(){
			httpBackend.flush();
		});
		it('make an http post to backend', function(){
			
		});
		it('set results equal to the returned data', function(){
			
		});
		it('call location.path to change url', function(){
			var args = {};
			searchService.getPet(args);
			httpBackend.flush();
			console.log("test")
			//expect(location.path).toHaveBeenCalledWith('/search/results');
		});
	});
});