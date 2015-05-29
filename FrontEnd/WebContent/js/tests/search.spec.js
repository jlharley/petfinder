beforeEach(module('petFinderApp'));
describe('PetFinderController', function(){
	var scope, searchService;
	beforeEach(inject(function($rootScope, _searchService_){
		scope = $rootScope.$new();
		searchService = _searchService_;
	}));
	it('should set the scope value of pets', function(){
		expect(scope.pets).toBeUndefined();
		scope.pets = searchService;		
		expect(scope.pets).toBe(searchService);
	});
	describe('countPets() function', function(){
		it('should initialize count to 0', function(){
			
		});
		it('should count pets', function(){
			
		});
		it('return count value', function(){
			
		});
	});
});