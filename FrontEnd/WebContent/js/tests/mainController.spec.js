beforeEach(module('petFinderApp'));
describe('Main Controller', function() {
	
	var mainController,	scope, user;
	
	beforeEach(inject(function ($rootScope, $controller, _user_) {
		scope = $rootScope.$new();
		user = _user_;
		mainController = $controller('mainController', {
			$scope: scope
		});
	}));
	it('sets scope value for user', function () {
		expect(scope.user).toBe(user);
	});
});