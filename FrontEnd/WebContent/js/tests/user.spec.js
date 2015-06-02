beforeEach(module('petFinderApp'));
describe('user Service', function(){
	var searchService, httpBackend, $rootScope;
	beforeEach(inject(function(_user_, _$rootScope_){
		user = _user_;
		$rootScope = _$rootScope_;
	}));
	it('should initialize the user variables with empty string', function(){
		expect(user.username).toEqual("");
		expect(user.firstName).toEqual("");
		expect(user.lastName).toEqual("");
		expect(user.nickname).toEqual("");
	});
});