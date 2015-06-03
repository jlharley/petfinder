beforeEach(module('petFinderApp'));
describe('filter directive', function(){
	var element, scope, $httpBackend;
	beforeEach(inject(function($rootScope, _$compile_, _$httpBackend_){
		scope = $rootScope.$new();
		$httpBackend = _$httpBackend_;
		$compile = _$compile_;
		element = '<pet-filter button-label="Filter" search="search" args="args"/>';
		
	}));
	it('should call a GET to pages/filter.html for the template', function(){
		$httpBackend.expectGET('pages/filter.html').respond(function(){
			return [200, "test", {}];
		});
		element = $compile(element)(scope);
	    scope.$digest();
	});
});