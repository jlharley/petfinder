beforeEach(module('petFinderApp'));
describe('PetFinderController', function(){
	var PetFinderController, scope, searchService;
	beforeEach(inject(function($controller, $rootScope, _searchService_){
		scope = $rootScope.$new();
		searchService = _searchService_;
		PetFinderController = $controller('PetFinderController', {
			$scope: scope
		});
		spyOn(scope.pets, 'getPet').and.returnValue('[{}]');
	}));
	it('should set the scope value of pets', function(){
		expect(scope.pets).toBe(searchService);
	});
	describe('search() method', function(){
		it('should format the search data', function(){
			
		});
		it('should call getpet from the search service', function(){			
			scope.search();
			expect(scope.pets.getPet).toHaveBeenCalledWith(jasmine.any(Object));			
		});
	});
});