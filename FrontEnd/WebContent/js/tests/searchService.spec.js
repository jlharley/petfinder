beforeEach(module('petFinderApp'));
describe('Search Service', function(){
	var searchService, httpBackend, $rootScope;
	beforeEach(inject(function(_searchService_, _$httpBackend_, _$rootScope_){
		searchService = _searchService_;
		$httpBackend = _$httpBackend_;
		$rootScope = _$rootScope_;
	}));
	describe('formatSearchData function', function(){
		it('should create formatted variable', function(){
			var args = {};
			expect().toBeUndefined();
			args = searchService.formatSearchData(args);
			expect(args).toEqual(jasmine.any(Object));
		});
	});
	describe('getPet function', function(){
		beforeEach(function(){
			$httpBackend.expectPOST('http://localhost:8080/backend/getPet').respond(function(method,url,data){
				return [200, {"test":"test"}, {}];
			});
		});
		it('take in an object', function(){
			
		});
		it('make an http post to backend', function(){
			var test;
			searchService.getPet({}).success(function(data){
				test = data;
			});
			$httpBackend.flush();	
			expect(test).toEqual({"test":"test"});
		});
		it('return a promise from the response', function(){
			
		});
	});
});