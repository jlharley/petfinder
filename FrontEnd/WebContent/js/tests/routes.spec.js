beforeEach(module('petFinderApp'));
describe('The routes configuration', function(){
	it('should test home', inject(function($route){
		//Set Up
		//Expectation
		expect($route.routes['/'].controller).toBe('mainController');
		//Verification
		expect($route.routes['/'].templateUrl).toEqual('pages/home.html');
	}));
	it('should test search', inject(function($route){
		//Set Up
		//Expectation
		expect($route.routes['/search'].controller).toBe('PetFinderController');
		//Verification
		expect($route.routes['/search'].templateUrl).toEqual('pages/search.html');
	}));
	it('should test results', inject(function($route){
		//Set Up
		//Expectation
		expect($route.routes['/search/results'].controller).toBe('resultController');
		//Verification
		expect($route.routes['/search/results'].templateUrl).toEqual('pages/results.html');
	}));
	it('should test about', inject(function($route){
		//Set Up
		//Expectation
		expect($route.routes['/about'].controller).toBe('mainController');
		//Verification
		expect($route.routes['/about'].templateUrl).toEqual('pages/about.html');
	}));
	it('should test contact', inject(function($route){
		//Set Up
		//Expectation
		expect($route.routes['/contact'].controller).toBe('contactController');
		//Verification
		expect($route.routes['/contact'].templateUrl).toEqual('pages/contact.html');
	}));
});