angular.module('petFinderApp')
    .directive('petResult', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment
        templateUrl: 'pages/resultlist.html'
//        controller: function()...
//        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});