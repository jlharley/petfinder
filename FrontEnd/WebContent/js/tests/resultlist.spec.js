beforeEach(module('petFinderApp'));
describe('resultlist directive', function(){
	var element, scope, $httpBackend;
	beforeEach(inject(function($rootScope, _$compile_, _$httpBackend_){
		scope = $rootScope.$new();
		$httpBackend = _$httpBackend_;
		$compile = _$compile_;
		element = '<pet-result ng-if="results.length > 0" />';
		
	}));
	it('should call a GET to pages/resultlist.html for the template', function(){
		$httpBackend.expectGET('pages/resultlist.html').respond(function(){
			return [200, "test", {}];
		});
		element = $compile(element)(scope);
	    scope.$digest();
	});
});