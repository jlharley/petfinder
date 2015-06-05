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
		    templateUrl : 'pages/results.html',
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
		})
	
		// route for the contact page
		.when('/login', {
		    templateUrl : 'pages/login.html'/*,
		    controller  : 'loign'*/
		});
});