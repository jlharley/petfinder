beforeEach(module('petFinderApp'));
describe('Nav Controller', function() {	
	var navController,	scope;
	
	beforeEach(inject(function ($rootScope, $controller, $location) {
		scope = $rootScope.$new();
		spyOn($location, 'path').andReturn('Fake location');
		mainController = $controller('navController', {
			$scope: scope
		});
	}));
	
	xdescribe('isActive() function', function() {
		it('returns true if url matches parameter', function () {
			var viewLocation = "/test";
			expect(true).toEqual(false);
		});
	});
});