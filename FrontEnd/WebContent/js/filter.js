angular.module('petFinderApp')
    .directive('petFilter', function () {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            buttonLabel: "@",
            search: "=",
            args: "="
        },
        templateUrl: 'pages/filter.html'
//        controller: function()...
//        link: function ($scope, element, attrs) { } //DOM manipulation
    }
});