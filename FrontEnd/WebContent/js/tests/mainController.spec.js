beforeEach(module('petFinderApp'));
describe('Main Controller', function() {
	
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