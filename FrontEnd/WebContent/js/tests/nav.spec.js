beforeEach(module('petFinderApp'));
describe('Nav Controller', function() {	
	var navController,	scope;
	
	beforeEach(inject(function ($rootScope, $controller, $location) {
		scope = $rootScope.$new();
		spyOn($location, 'path').and.returnValue('/Fake location');
		mainController = $controller('navController', {
			$scope: scope
		});
	}));
	
	describe('isActive() function', function() {
		it('returns true if url matches parameter', function () {
			var viewLocation = "/Fake location";
			expect(scope.isActive(viewLocation)).toEqual(true);
		});
		it('returns true if url matches parameter', function () {
			var viewLocation = "/Fake location/fakey";
			expect(scope.isActive(viewLocation)).toEqual(false);
		});
	});
});