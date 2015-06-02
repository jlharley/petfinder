beforeEach(module('petFinderApp'));
describe('PetFinderController', function(){
	var PetFinderController, scope, searchService;
	beforeEach(inject(function($controller, $rootScope, _searchService_, $q){
		scope = $rootScope.$new();
		searchService = _searchService_;
		q = $q;
		PetFinderController = $controller('PetFinderController', {
			$scope: scope
		});
		spyOn(searchService, 'formatSearchData').and.returnValue('{test:test}');
		spyOn(searchService, 'getPet').and.returnValue({success:function(){}});
		
	}));
	describe('search method', function(){
		beforeEach(function(){
		});
		it('should format the search data', function(){
			scope.search();
			expect(searchService.formatSearchData).toHaveBeenCalled();
		});
		it('should call getPet from the search service', function(){
			scope.search();
			expect(searchService.getPet).toHaveBeenCalled();
		});
	});
	describe('getRandomPet method', function(){
		beforeEach(function(){
		});
		it('should call getPet from the search service', function(){
			scope.getRandomPet();
			expect(searchService.getPet).toHaveBeenCalled();
		});
	});
	describe('update method', function(){
		beforeEach(function(){
		});
		it('should format the search data', function(){
			scope.update();
			expect(searchService.formatSearchData).toHaveBeenCalled();
		});
		it('should call getPet from the search service', function(){
			scope.update();
			expect(searchService.getPet).toHaveBeenCalled();
		});
	});
	describe('dislikePet method', function(){
		beforeEach(function(){
			scope.results = [1,2,3];
		});
		it('should remove value from array', function(){
			expect(scope.results).toEqual([1,2,3]);
			scope.dislikePet(1);
			expect(scope.results).toEqual([2,3]);
		});
	});
	describe('likePet method', function(){
		beforeEach(function(){
			scope.results = [1,2,3];
		});
		it('should remove value from array', function(){
			expect(scope.results).toEqual([1,2,3]);
			scope.likePet(2);
			expect(scope.results).toEqual([1,3]);
		});
	});
	describe('setLimit method', function(){
		beforeEach(function(){
			scope.limit = 1;
		});
		it('should remove value from array', function(){
			expect(scope.limit).toEqual(1);
			scope.setLimit(2);
			expect(scope.limit).toEqual(2);
		});
	});
	describe('isActiveLimit method', function(){
		beforeEach(function(){
			scope.limit = 1;
		});
		it('should remove value from array', function(){
			expect(scope.limit).toEqual(1);
			expect(scope.isActiveLimit(1)).toBe(true);
		});
	});
});