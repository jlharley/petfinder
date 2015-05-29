beforeEach(module('petFinderApp'));
describe('Nav Controller', function() {
	
	var navController,	scope;
	
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		mainController = $controller('navController', {
			$scope: scope
		});
	}));
	xdescribe('isActive function', function() {
		it('returns true if url matches parameter', function () {
			expect(true).toEqual(false);
		});
	});
});