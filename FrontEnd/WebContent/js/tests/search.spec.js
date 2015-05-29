beforeEach(module('petFinderApp'));
describe('PetFinderController', function(){
	var PetFinderController, scope, searchService;
	beforeEach(inject(function($controller, $rootScope, _searchService_){
		scope = $rootScope.$new();
		searchService = _searchService_;
		PetFinderController = $controller('PetFinderController', {
			$scope: scope
		});
	}));
	it('should set the scope value of pets', function(){
		expect(scope.pets).toBe(searchService);
	});
});