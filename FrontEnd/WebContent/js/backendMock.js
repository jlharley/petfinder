(function(ng){
	if(!document.URL.match(/\?test/)){
		return;
	}

angular.module('petFinderApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngMockE2E']);

//configure our routes
angular.module('petFinderApp').config(function($routeProvider) {
	$routeProvider
		// route for the home page
		.when('/', {
		    templateUrl : 'pages/home.html',
		    controller  : 'mainController'
		})
		
		// route for the search page
		.when('/search', {
			templateUrl : 'pages/search.html',
		    controller  : 'PetFinderController'
		})
		
		// route for the results page
		.when('/search/results', {
		    templateUrl : function(){
		    		return 'pages/results.html';
		    },
		    controller  : 'resultController'
		})
		
		// route for the about page
		.when('/about', {
		    templateUrl : 'pages/about.html',
		    controller  : 'mainController'
		})
		
		// route for the contact page
		.when('/contact', {
		    templateUrl : 'pages/contact.html',
		    controller  : 'contactController'
		});
});
angular.module('petFinderApp').run(function($httpBackend) {
    // define responses for requests here as usual
	$httpBackend.whenGET(/(pages)\//).passThrough();
	$httpBackend.whenPOST('http://localhost:8080/backend/getPet').respond(function(method,url,data){
		console.log('Received these data at FAKE backend:', method, url, data);
		var pets = [];
		for (i= 0; i<10; i++){
			pets = $.merge([{name:"pet" + i, age:i, color:"blue", species:"dog", breed:"mutt"}], pets);
		}
		return [200, pets, {}];
	});
	$httpBackend.whenPOST('http://localhost:8080/backend/login').respond(function(method,url,data){
		console.log('Received these data at FAKE backend:', method, url, data);
		return [200, {username:"uname", firstname:"Tyrion", lastname:"Lannister"}, {}];
	});
});
})(angular)