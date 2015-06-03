beforeEach(module('petFinderApp'));
describe('contactController', function(){
	var contactController, scope;
	beforeEach(inject(function($controller, $rootScope, _$location_){
		scope = $rootScope.$new();
		$location = _$location_;
		contactController = $controller('contactController', {
			$scope: scope
		});
		spyOn($location, 'absUrl');
	}));
	describe('send method', function(){
		beforeEach(inject(function(){
			scope.user = {};
			scope.user.email;
		}));
		it('should set location to the defined link', function(){
			scope.user.email = 'noreply@noreply.com';
			scope.user.name = 'user';
			scope.user.body = 'Hello, World!';			
			scope.send();
			expect($location.absUrl).toHaveBeenCalled();
		});
	});
});