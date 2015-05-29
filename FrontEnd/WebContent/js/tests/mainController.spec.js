describe('Main Controller', function() {
	beforeEach(module('petFinderApp'));
	
	var mainController,	scope;
	
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		mainController = $controller('mainController', {
			$scope: scope
		});
	}));
	it('says hello world!', function () {
		expect(scope.greeting).toEqual("Hello World!");
	});
});